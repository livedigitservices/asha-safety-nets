import re

path = r'C:\Users\user\.gemini\antigravity\brain\e76df51c-e804-4dff-8ede-b19eb915b41e\.system_generated\steps\309\content.md'
with open(path, 'r', encoding='utf-8') as f:
    text = f.read()

fonts = set(re.findall(r'font-family:\s*([^;}"\']+)', text, re.IGNORECASE))
colors = set(re.findall(r'#(?:[0-9a-fA-F]{3}){1,2}\b', text))

print("FONTS FOUND:")
for font in sorted(fonts):
    print(" -", font)

print("\nCOLORS FOUND:")
for color in sorted(colors):
    print(" -", color)
