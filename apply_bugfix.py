import re
import os

app_js_path = r'C:\Users\wafi2\.gemini\antigravity\scratch\skd-cat-app\app.js'
with open(app_js_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Fix fetchYouTubeVideo
# Find: const safeTitle = ... const safeDesc = ...
# Replace with encTitle and encDesc
content = re.sub(
    r"const safeTitle = title\.replace\([^;]+;\s*const safeDesc = desc\.replace\([^;]+;",
    r"const safeTitle = title.replace(/'/g, '&apos;').replace(/\"/g, '&quot;');\n                const encTitle = encodeURIComponent(title);\n                const encDesc = encodeURIComponent(desc);",
    content
)

# Update the onclick for toggleSaveVideo in fetchYouTubeVideo
content = re.sub(
    r"onclick=\"toggleSaveVideo\('\$\{videoId\}', '\$\{safeTitle\}', '\$\{safeDesc\}', this\)\"",
    r"onclick=\"toggleSaveVideo('${videoId}', '${encTitle}', '${encDesc}', this)\"",
    content
)

# Update generateVideoSummary in fetchYouTubeVideo and openSavedVideo
content = re.sub(
    r"onclick=\"generateVideoSummary\('\$\{safeTitle\}', '\$\{safeDesc\}', 'summary-\$\{videoId\}', this\)\"",
    r"onclick=\"generateVideoSummary('${encTitle}', '${encDesc}', 'summary-${videoId}', this)\"",
    content
)

# Fix generateVideoSummary function definition
content = re.sub(
    r"window\.generateVideoSummary = async function\(title, desc, containerId, btn\) \{",
    r"window.generateVideoSummary = async function(encTitle, encDesc, containerId, btn) {\n    const title = decodeURIComponent(encTitle);\n    const desc = decodeURIComponent(encDesc);",
    content
)

# Fix toggleSaveVideo function definition
content = re.sub(
    r"window\.toggleSaveVideo = function\(videoId, title, desc, btn\) \{",
    r"window.toggleSaveVideo = function(videoId, encTitle, encDesc, btn) {\n    const title = decodeURIComponent(encTitle);\n    const desc = decodeURIComponent(encDesc);",
    content
)

# Fix renderSavedVideos
content = re.sub(
    r"const safeTitle = v\.title\.replace\([^;]+;\s*const safeDesc = v\.desc\.replace\([^;]+;",
    r"const encTitle = encodeURIComponent(v.title);\n        const encDesc = encodeURIComponent(v.desc);",
    content
)

# Update openSavedVideo and toggleSaveVideo calls in renderSavedVideos
content = re.sub(
    r"onclick=\"openSavedVideo\('\$\{v\.videoId\}', '\$\{safeTitle\}', '\$\{safeDesc\}'\)\"",
    r"onclick=\"openSavedVideo('${v.videoId}', '${encTitle}', '${encDesc}')\"",
    content
)
content = re.sub(
    r"onclick=\"event\.stopPropagation\(\); toggleSaveVideo\('\$\{v\.videoId\}', '\$\{safeTitle\}', '\$\{safeDesc\}', this\)\"",
    r"onclick=\"event.stopPropagation(); toggleSaveVideo('${v.videoId}', '${encTitle}', '${encDesc}', this)\"",
    content
)

# Fix openSavedVideo function definition
content = re.sub(
    r"window\.openSavedVideo = function\(videoId, title, desc\) \{",
    r"window.openSavedVideo = function(videoId, encTitle, encDesc) {\n    const title = decodeURIComponent(encTitle);\n    const desc = decodeURIComponent(encDesc);",
    content
)

# Remove safeTitle and safeDesc generation inside openSavedVideo
content = re.sub(
    r"const safeTitle = title\.replace\([^;]+;\s*const safeDesc = desc\.replace\([^;]+;",
    r"const encTitle = encodeURIComponent(title);\n    const encDesc = encodeURIComponent(desc);\n    const safeTitle = title.replace(/'/g, '&apos;').replace(/\"/g, '&quot;');",
    content
)

with open(app_js_path, 'w', encoding='utf-8') as f:
    f.write(content)

# Update sw.js cache version
sw_path = r'C:\Users\wafi2\.gemini\antigravity\scratch\skd-cat-app\sw.js'
with open(sw_path, 'r', encoding='utf-8') as f:
    sw_content = f.read()

sw_content = sw_content.replace("'skd-app-cache-v1'", "'skd-app-cache-v2'")

with open(sw_path, 'w', encoding='utf-8') as f:
    f.write(sw_content)

print("Bugfixes applied successfully")
