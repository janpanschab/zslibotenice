require('dotenv').config();
const { createServer } = require('http');
const { parse } = require('url');
const { join } = require('path');
const next = require('next');
const pathMatch = require('path-match');

const dev = process.env.NODE_ENV !== 'production';
// const port = parseInt(process.env.PORT, 10) || 3000;
const port = dev ? 8000 : 3000;
const app = next({ dev });
const handle = app.getRequestHandler();
const route = pathMatch();
const match = route('/:url');

app.prepare().then(() => {
  createServer((req, res) => {
    const { pathname } = parse(req.url);
    const params = match(pathname);
    const rootStaticFiles = [
      '/android-chrome-96x96',
      '/apple-touch-icon.png',
      '/browserconfig.xml',
      '/favicon-16x16.png',
      '/favicon-32x32.png',
      '/favicon.ico',
      '/mstile-150x150.png',
      '/safari-pinned-tab.svg',
      '/site.webmanifest',
    ];
    if (rootStaticFiles.indexOf(pathname) > -1) {
      const path = join(__dirname, 'static', pathname);
      app.serveStatic(req, res, path);
    } else if (params === false) {
      handle(req, res);
      return;
    }

    app.render(req, res, '/page', params);
  }).listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
