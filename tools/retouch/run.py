"""The hero's own retouch, run on another photo: python3 run.py <dir> <src> <out> [dust-scale]
Step 1 grade.html (the dark wine-rose grade), step 2 zine.html (the faded zine print), with the
exact settings that made hero.jpg (from the session that made it, 10 Nov 2026)."""
import sys, time, base64, json
Z = sys.argv[1]; sys.path.insert(0, Z)
from cdp import CDP
src, out = sys.argv[2], sys.argv[3]
k = float(sys.argv[4]) if len(sys.argv) > 4 else 1.0
V1 = {"stops":[[0,[14,3,8]],[0.22,[40,8,18]],[0.45,[82,30,52]],[0.66,[140,96,128]],[0.84,[205,182,214]],[1,[246,232,238]]],"gamma":1.12,"con":1.25,"keep":0.1,"keepDim":0.75,"glow":0.32,"glowB":0.9,"vig":0.7}
V2 = {"seed":4242,"gamma":0.62,"stops":[[0,[56,42,50]],[0.2,[86,68,78]],[0.42,[124,106,116]],[0.64,[162,145,153]],[0.84,[198,184,190]],[1,[226,215,219]]],"chroma":0.14,"panels":[],"leaks":[{"x":0.08,"y":0.42,"r":0.55,"c":"236,224,229","a":0.22},{"x":0.9,"y":0.08,"r":0.45,"c":"220,206,213","a":0.12}],"paperFreq":0.006,"paperSeed":17,"paperRelief":4,"paperK":1.4,"paper":0.5,"stainK":2.2,"stain":0.35,"fibre":0.18,"dust":600,"scratches":22,"grain":16,"q":0.84}
V2["dust"] = round(600 * k); V2["scratches"] = round(22 * k)   # the same density on a photo of another size
c = CDP(9334)
c.call("Page.enable"); c.call("Runtime.enable")
def page(name):
    c.call("Page.navigate", url="file://" + Z + "/" + name); time.sleep(1.2)
page("grade.html")
V1["src"] = "file://" + src
d = c.js("grade(" + json.dumps(V1) + ")")
dark = out.rsplit(".", 1)[0] + "-dark.jpg"
open(dark, "wb").write(base64.b64decode(d.split(",", 1)[1]))
page("zine.html")
V2["src"] = "file://" + dark
d = c.js("zine(" + json.dumps(V2) + ")")
if not d or not str(d).startswith("data:"): print("failed", str(d)[:300]); sys.exit(1)
open(out, "wb").write(base64.b64decode(d.split(",", 1)[1]))
print("ok", out)
