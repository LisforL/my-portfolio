"""Serves this folder for previewing the site: python3 serve.py [port]   (default 8000)

The same as `python3 -m http.server`, with one difference: every file is sent with
"Cache-Control: no-cache", so the browser checks for a newer copy each time instead of keeping an
old page or picture for hours (a replaced picture, e.g. a new cover with the same file name, shows
at once). Unchanged files still come back as a quick "304 not modified".
"""
import functools
import http.server
import os
import sys


class NoCache(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-cache")
        super().end_headers()


if __name__ == "__main__":
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 8000
    here = os.path.dirname(os.path.abspath(__file__))
    handler = functools.partial(NoCache, directory=here)
    print("Serving %s at http://localhost:%d" % (here, port))
    http.server.ThreadingHTTPServer(("", port), handler).serve_forever()
