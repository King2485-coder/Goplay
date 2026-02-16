import os

characters = ["boy", "girl"]
outfits = ["spring", "summer", "fall", "winter"]

animations = {
    "idle": 10,
    "walk": 10,
    "wave": 8,
    "highfive": 8
}

missing = []

for c in characters:
    for o in outfits:
        for anim, count in animations.items():
            for i in range(count):
                expected = f"{c}_{o}_{anim}_{i}"
                found = False

                for root, _, files in os.walk("."):
                    for f in files:
                        if expected in f:
                            found = True
                            break

                if not found:
                    missing.append(expected)

if missing:
    print("❌ Missing sprite frames:")
    for m in missing:
        print("   ", m)
else:
    print("✅ All sprite frames found! Your animations are complete.")
