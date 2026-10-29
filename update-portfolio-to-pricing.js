const fs = require('fs');

// 1. Update portfolio.html with clean immediate redirect to pricing.html
const portfolioRedirectHtml = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="refresh" content="0; url=pricing.html" />
    <title>Redirecting to Pricing | IkonTeki Africa</title>
    <script>window.location.replace("pricing.html");</script>
  </head>
  <body style="background: #000000; color: #FFFFFF; font-family: sans-serif; text-align: center; padding-top: 100px;">
    <p>Redirecting to <a href="pricing.html" style="color: #00AEEF;">Pricing & Service Packages</a>...</p>
  </body>
</html>`;

fs.writeFileSync('portfolio.html', portfolioRedirectHtml, 'utf8');
console.log('portfolio.html updated to redirect to pricing.html');

// 2. Scan all HTML files and replace portfolio.html references in navigation and footers
const allHtmlFiles = fs.readdirSync('.').filter(f => f.endsWith('.html') && f !== 'portfolio.html');

allHtmlFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  // Replace portfolio link in footer or body with pricing
  if (content.includes('portfolio.html')) {
    content = content.replace(/portfolio\.html/g, 'pricing.html');
    changed = true;
  }

  // Update text label from "Portfolio" to "Pricing" if it was linking to portfolio.html
  if (content.includes('>Portfolio<')) {
    content = content.replace(/>Portfolio</g, '>Pricing<');
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated portfolio -> pricing in ${file}`);
  }
});
