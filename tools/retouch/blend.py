"""python3 blend.py <dir> <light> <heavy> <k> <out>: the light retouch with k of the heavy one over it"""
import sys, time, json, base64
Z = sys.argv[1]; sys.path.insert(0, Z)
from cdp import CDP
a, b, k, out = sys.argv[2], sys.argv[3], float(sys.argv[4]), sys.argv[5]
c = CDP(9334); c.call("Page.enable"); c.call("Runtime.enable")
c.call("Page.navigate", url="file://" + Z + "/zine.html"); time.sleep(1)
d = c.js("""(async (a, b, k) => {
  const L = (s) => new Promise((r, j) => { const i = new Image(); i.onload = () => r(i); i.onerror = j; i.src = s; });
  const A = await L(a), B = await L(b), c = document.createElement('canvas'); c.width = A.naturalWidth; c.height = A.naturalHeight;
  const x = c.getContext('2d'); x.drawImage(A, 0, 0); x.globalAlpha = k; x.drawImage(B, 0, 0, c.width, c.height);
  return c.toDataURL('image/jpeg', 0.86); })(%s, %s, %s)""" % (json.dumps("file://" + a), json.dumps("file://" + b), k))
open(out, "wb").write(base64.b64decode(d.split(",", 1)[1])); print("ok", out.split("/")[-1])
