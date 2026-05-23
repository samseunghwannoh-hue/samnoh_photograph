"""
resize_photos.py
Resizes all JPEG images under the images/ folder to fit within
1920 × 1080 (aspect ratio preserved, never upscaled).
Saves in-place at JPEG quality 85 with optimise=True.
Run from the portfolio root:  python3 resize_photos.py
"""

import os
import sys
from pathlib import Path
from PIL import Image

IMAGE_DIR  = Path(__file__).parent / 'images'
MAX_W, MAX_H = 1920, 1080
QUALITY    = 85

exts = {'.jpg', '.jpeg', '.JPG', '.JPEG'}

files = [p for p in IMAGE_DIR.rglob('*') if p.suffix in exts]
total = len(files)
print(f'Found {total} images. Resizing to fit within {MAX_W}×{MAX_H} …\n')

skipped = 0
resized = 0
errors  = 0

for i, path in enumerate(files, 1):
    try:
        with Image.open(path) as img:
            w, h = img.size

            # Skip if already within bounds
            if w <= MAX_W and h <= MAX_H:
                skipped += 1
                print(f'[{i:>4}/{total}] skip  {path.name}  ({w}×{h})')
                continue

            # thumbnail() shrinks in-place to fit the bounding box
            img_copy = img.copy()
            img_copy.thumbnail((MAX_W, MAX_H), Image.LANCZOS)
            nw, nh = img_copy.size

            # Preserve EXIF if present
            exif = img.info.get('exif', None)
            save_kwargs = dict(quality=QUALITY, optimize=True)
            if exif:
                save_kwargs['exif'] = exif

            img_copy.save(path, **save_kwargs)
            resized += 1
            print(f'[{i:>4}/{total}] resize {path.name}  {w}×{h} → {nw}×{nh}')

    except Exception as e:
        errors += 1
        print(f'[{i:>4}/{total}] ERROR {path.name}: {e}', file=sys.stderr)

print(f'\n✓ Done — resized: {resized}  skipped (already small): {skipped}  errors: {errors}')
