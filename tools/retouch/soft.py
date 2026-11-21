"""A light retouch: python3 soft.py <dir> <src> <out>. Only the hero's dusty mauve tone and a fine
grain; none of the heavy parts (the dark grade, light leaks, crumpled paper, stains, scratches)."""
import sys, time, json, base64
Z = sys.argv[1]; sys.path.insert(0, Z)
from cdp import CDP
src, out = sys.argv[2], sys.argv[3]
V = {"seed":4242,"gamma":1.0,"stops":[[0,[44,30,38]],[0.2,[78,58,68]],[0.42,[122,100,112]],[0.64,[166,146,156]],[0.84,[206,192,198]],[1,[238,229,232]]],
     "chroma":0.38,"panels":[],"leaks":[],"paperFreq":0.006,"paperSeed":17,"paperRelief":4,"paperK":1.4,"paper":0.0,
     "stainK":2.2,"stain":0.0,"fibre":0.0,"dust":0,"scratches":0,"grain":9,"q":0.88}
V["src"] = "file://" + src
c = CDP(9334); c.call("Page.enable"); c.call("Runtime.enable")
c.call("Page.navigate", url="file://" + Z + "/zine.html"); time.sleep(1.2)
d = c.js("zine(" + json.dumps(V) + ")")
open(out, "wb").write(base64.b64decode(d.split(",", 1)[1])); print("ok", out.split("/")[-1])
