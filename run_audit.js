const fs = require('fs');
const path = require('path');

const files = fs.readdirSync(__dirname).filter(f => f.endsWith('.html') || f.endsWith('.css'));

const tests = [
  { name: 'Gold / #d4af37', regex: /#d4af37|gold/i },
  { name: 'Linear or Radial Gradients', regex: /linear-gradient|radial-gradient/i },
  { name: 'Old email ikontec25@gmail.com', regex: /ikontec25@gmail\.com/i },
  { name: 'Old email info@ikonteki.co.tz', regex: /info@ikonteki\.co\.tz/i },
  { name: 'Old complex address', regex: /Commercial Complex/i },
  { name: 'Founder education/CV', regex: /Institute of Accountancy|Bachelor|Degree in/i },
  { name: 'Logo text repetition in nav', regex: /<span[^>]*class=["'][^"']*logo-text[^"']*["'][^>]*>IkonTeki/i }
];

console.log('--- AUDITING ' + files.length + ' FILES ---');
let issueCount = 0;

for (const file of files) {
  const content = fs.readFileSync(path.join(__dirname, file), 'utf8');
  for (const t of tests) {
    const match = content.match(t.regex);
    if (match) {
      console.log(`[VIOLATION] in ${file} -> ${t.name}: found "${match[0]}"`);
      issueCount++;
    }
  }
}

if (issueCount === 0) {
  console.log('✅ ALL AUDITS PASSED: 0 violations found!');
} else {
  console.log(`⚠️ Found ${issueCount} issues to resolve.`);
}
