# The hero's retouch

The faded zine print that `hero.jpg` has, as a tool, so any photo can be given the same look. It is
the exact code and settings that made `hero.jpg` (10 Nov 2026); re-run on the hero's source photo it
gives `hero.jpg` back pixel for pixel.

Two steps, both in headless Chrome: `grade.html` (a dark wine-rose grade: soften, gradient map,
halation, vignette) and then `zine.html` (the dusty mauve map with lifted blacks, two light leaks,
crumpled-paper relief, stains, fibre, dust, scratches and grain). `run.py` holds the settings.

    cd tools/retouch
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new \
      --remote-debugging-port=9334 --user-data-dir=/tmp/retouch-profile \
      --allow-file-access-from-files about:blank &
    sips -s format jpeg -s formatOptions 95 -Z 2000 "my photo.jpg" --out /tmp/in.jpg
    python3 run.py "$PWD" /tmp/in.jpg "$PWD/out.jpg" 1.0
    pkill -f remote-debugging-port=9334

Work at about 2000px on the long side, as the hero does (the dust, scratches and grain are sized in
pixels). The last number scales the dust and scratches with the photo's area (width x height / 3,000,000).
