const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const ROOT = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=UTF-8',
  '.css': 'text/css; charset=UTF-8',
  '.js': 'application/javascript; charset=UTF-8',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.xml': 'application/xml; charset=UTF-8',
  '.txt': 'text/plain; charset=UTF-8'
};

const server = http.createServer((req, res) => {
  let cleanUrl = req.url.split('?')[0];

  // 1. Smart 301 Redirect: /index.html or /index -> /
  if (cleanUrl === '/index.html' || cleanUrl === '/index') {
    res.writeHead(301, { 'Location': '/' });
    res.end();
    return;
  }

  // 2. Smart 301 Redirect: /page.html -> /page
  if (cleanUrl.endsWith('.html')) {
    const extensionless = cleanUrl.slice(0, -5);
    res.writeHead(301, { 'Location': extensionless });
    res.end();
    return;
  }

  // 3. Resolve path
  let targetPath = cleanUrl === '/' ? '/index.html' : cleanUrl;
  let filePath = path.join(ROOT, targetPath);

  // If path doesn't have an extension, try adding .html (extensionless routing)
  if (!path.extname(filePath) && fs.existsSync(filePath + '.html')) {
    filePath = filePath + '.html';
  }

  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';
    res.writeHead(200, { 'Content-Type': contentType });
    fs.createReadStream(filePath).pipe(res);
  } else {
    // 404 Error handling
    const notFoundPath = path.join(ROOT, '404.html');
    if (fs.existsSync(notFoundPath)) {
      res.writeHead(404, { 'Content-Type': 'text/html; charset=UTF-8' });
      fs.createReadStream(notFoundPath).pipe(res);
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
    }
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
