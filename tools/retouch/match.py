"""python3 match.py <dir> <ref> <src> <out>: give <src> the brightness spread of <ref> (the home hero),
pixel by pixel through the two images' cumulative histograms, each pixel's colour kept (its RGB moved by
the change in its brightness)"""
import sys, time, json, base64
Z = sys.argv[1]; sys.path.insert(0, Z)
from cdp import CDP
ref, src, out = sys.argv[2:5]
c = CDP(9334); c.call("Page.enable"); c.call("Runtime.enable")
c.call("Page.navigate", url="file://" + Z + "/zine.html"); time.sleep(1.2)
d = c.js("""(async (a, b) => {
  const L = (s) => new Promise((r, j) => { const i = new Image(); i.onload = () => r(i); i.onerror = j; i.src = s; });
  const px = (im) => { const c = document.createElement('canvas'); c.width = im.naturalWidth; c.height = im.naturalHeight; const x = c.getContext('2d'); x.drawImage(im, 0, 0); return [c, x, x.getImageData(0, 0, c.width, c.height)]; };
  const cdf = (p) => { const h = new Float64Array(256); for (let i = 0; i < p.length; i += 4) h[Math.round(0.299 * p[i] + 0.587 * p[i + 1] + 0.114 * p[i + 2])]++; let s = 0; const n = p.length / 4; for (let i = 0; i < 256; i++) { s += h[i]; h[i] = s / n; } return h; };
  const [, , R] = px(await L(a)), [c, x, S] = px(await L(b));
  const cr = cdf(R.data), cs = cdf(S.data), map = new Float32Array(256);
  for (let i = 0, j = 0; i < 256; i++) { while (j < 255 && cr[j] < cs[i]) j++; map[i] = j; }
  const p = S.data;
  for (let i = 0; i < p.length; i += 4) { const l = 0.299 * p[i] + 0.587 * p[i + 1] + 0.114 * p[i + 2], d = map[Math.round(l)] - l; p[i] += d; p[i + 1] += d; p[i + 2] += d; }
  x.putImageData(S, 0, 0); return c.toDataURL('image/jpeg', 0.84);
})(%s, %s)""" % (json.dumps("file://" + ref), json.dumps("file://" + src)))
open(out, "wb").write(base64.b64decode(d.split(",", 1)[1])); print("ok", out.split("/")[-1])
