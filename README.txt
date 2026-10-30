JAVA PRACTICAL HUB
==================
Built with HTML, CSS and JavaScript.

FILES
- index.html: website structure
- style.css: website design
- script.js: topic navigation, search, code dialog and copy button
- practicals.js: practical questions, source code and screenshot paths
- assets/screenshots/: place output screenshots here

OPEN
1. Extract the ZIP.
2. Open the folder in VS Code.
3. Start a local server in the folder containing index.html:
   python -m http.server 8000
4. Open http://127.0.0.1:8000 in your browser.
Keep the terminal open while using the site.

ADD SCREENSHOTS
1. Save a screenshot under assets/screenshots/, e.g. strings-practical-35.png.
2. In practicals.js, find the matching practical entry.
3. Change "screenshot": "" to "screenshot": "assets/screenshots/strings-practical-35.png".
4. Save and refresh the page.

FORMAT
Practical entries preserve the requested format: package declaration, PracticalN class, compact Java code and inline comments. Code can be edited directly in practicals.js. Entries currently included are starter/selected syllabus-aligned practicals based on the program lists provided; compare them with your final files and add any remaining solutions/screenshots as needed.

Note: Google Fonts and Highlight.js are loaded from CDNs and need internet access for custom fonts and syntax highlighting.
