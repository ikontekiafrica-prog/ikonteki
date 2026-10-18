const fs = require('fs');
const path = require('path');

const rootDir = __dirname;
const htmlFiles = fs.readdirSync(rootDir).filter(f => f.endsWith('.html'));

let missingAssets = 0;
let totalChecked = 0;

htmlFiles.forEach(file => {
  const filePath = path.join(rootDir, file);
  const content = fs.readFileSync(filePath, 'utf-8');

  // Match local src attributes: src="images/..." or src="whatever" (exclude http/https/data:)
  const srcRegex = /(?:src|href)=["']([^"':#]+?\.(?:png|jpg|jpeg|webp|gif|svg|ico|css|js))["']/gi;
  let match;
  while ((match = srcRegex.exec(content)) !== null) {
    const assetPath = match[1];
    if (assetPath.startsWith('http') || assetPath.startsWith('//') || assetPath.startsWith('data:')) continue;
    
    // Resolve relative path
    const resolved = path.join(rootDir, assetPath);
    totalChecked++;
    if (!fs.existsSync(resolved)) {
      console.error(`❌ [${file}] Missing asset referenced: ${assetPath} (Resolved: ${resolved})`);
      missingAssets++;
    }
  }
});

console.log(`\nChecked ${totalChecked} local asset references across ${htmlFiles.length} HTML files.`);
if (missingAssets === 0) {
  console.log(`✅ 100% of referenced assets exist on disk! No broken links.`);
  process.exit(0);
} else {
  console.error(`❌ Found ${missingAssets} broken asset references.`);
  process.exit(1);
}
