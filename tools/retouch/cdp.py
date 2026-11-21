import json, socket, base64, os, struct, urllib.request
class CDP:
    def __init__(self, port):
        tabs = json.loads(urllib.request.urlopen("http://127.0.0.1:%d/json" % port).read())
        page = [t for t in tabs if t.get("type") == "page"][0]
        url = page["webSocketDebuggerUrl"]; path = url.split(str(port), 1)[1]
        self.s = socket.create_connection(("127.0.0.1", port)); self.s.settimeout(120)
        key = base64.b64encode(os.urandom(16)).decode()
        self.s.sendall(("GET %s HTTP/1.1\r\nHost: 127.0.0.1:%d\r\nUpgrade: websocket\r\nConnection: Upgrade\r\nSec-WebSocket-Key: %s\r\nSec-WebSocket-Version: 13\r\n\r\n" % (path, port, key)).encode())
        buf = b""
        while b"\r\n\r\n" not in buf: buf += self.s.recv(4096)
        self.buf = buf.split(b"\r\n\r\n", 1)[1]; self.id = 0
    def _exact(self, n):
        while len(self.buf) < n:
            d = self.s.recv(1 << 20)
            if not d: raise EOFError
            self.buf += d
        out, self.buf = self.buf[:n], self.buf[n:]; return out
    def _recv(self):
        data = b""
        while True:
            h = self._exact(2); fin = h[0] & 0x80; op = h[0] & 0x0f; ln = h[1] & 0x7f
            if ln == 126: ln = struct.unpack(">H", self._exact(2))[0]
            elif ln == 127: ln = struct.unpack(">Q", self._exact(8))[0]
            data += self._exact(ln)
            if fin: return data.decode("utf-8", "replace")
    def _send(self, t):
        p = t.encode(); m = os.urandom(4); h = bytes([0x81]); n = len(p)
        h += bytes([0x80 | n]) if n < 126 else (bytes([0x80 | 126]) + struct.pack(">H", n) if n < 65536 else bytes([0x80 | 127]) + struct.pack(">Q", n))
        self.s.sendall(h + m + bytes(b ^ m[i % 4] for i, b in enumerate(p)))
    def call(self, method, **params):
        self.id += 1; i = self.id; self._send(json.dumps({"id": i, "method": method, "params": params}))
        while True:
            msg = json.loads(self._recv())
            if msg.get("id") == i:
                if "error" in msg: raise RuntimeError(msg["error"])
                return msg.get("result", {})
    def js(self, expr):
        r = self.call("Runtime.evaluate", expression=expr, returnByValue=True, awaitPromise=True)
        return r.get("result", {}).get("value")
    def shot(self, path, clip=None):
        kw = {"format": "png"}
        if clip: kw["clip"] = clip
        open(path, "wb").write(base64.b64decode(self.call("Page.captureScreenshot", **kw)["data"]))
