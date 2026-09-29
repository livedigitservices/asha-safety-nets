import glob, re

files = glob.glob('src/**/*.jsx', recursive=True) + glob.glob('src/**/*.css', recursive=True) + ['index.html']
blue_regex = re.compile(r'\b(?:sky|blue|indigo)-\d+|\b(?:#264595|#0284c7|#00d084|#0693e3|#8ed1fc)\b', re.IGNORECASE)

print("FILES WITH BLUE / LEGACY COLOR CLASSES:")
for filepath in sorted(files):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    matches = blue_regex.findall(content)
    if matches:
        print(f" - {filepath}: {len(matches)} matches -> {set(matches[:5])}")
