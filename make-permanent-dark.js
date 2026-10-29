const fs = require('fs');

const allHtmlFiles = fs.readdirSync('.').filter(f => f.endsWith('.html'));

allHtmlFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  // Replace darkMode: false with darkMode: true
  if (content.includes("'darkMode': false")) {
    content = content.replace(/'darkMode':\s*false/g, "'darkMode': true");
    changed = true;
  }
  if (content.includes('darkMode: false')) {
    content = content.replace(/darkMode:\s*false/g, 'darkMode: true');
    changed = true;
  }

  // Remove fallback to false in localStorage check
  if (content.includes(': false;')) {
    content = content.replace(/:\s*false;/g, ': true;');
    changed = true;
  }

  // Ensure body has class="b eh"
  content = content.replace(/<body([^>]*)>/i, (match, attrs) => {
    if (!attrs.includes('class="b eh"') && !attrs.includes("class='b eh'")) {
      if (/class="/i.test(attrs)) {
        attrs = attrs.replace(/class="([^"]*)"/i, 'class="b eh $1"');
      } else if (/class='/i.test(attrs)) {
        attrs = attrs.replace(/class='([^']*)'/i, "class='b eh $1'");
      } else {
        attrs = ` class="b eh"${attrs}`;
      }
      changed = true;
    }
    return `<body${attrs}>`;
  });

  if (changed) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated permanent dark mode in ${file}`);
  }
});

// Also in navbar.js, force localStorage darkMode to true
let navbarJs = fs.readFileSync('navbar.js', 'utf8');
if (!navbarJs.includes("localStorage.setItem('darkMode', 'true')")) {
  navbarJs = `try { localStorage.setItem('darkMode', 'true'); } catch (e) {}\n` + navbarJs;
  fs.writeFileSync('navbar.js', navbarJs, 'utf8');
  console.log('navbar.js updated to ensure localStorage darkMode is always true.');
}
