import http from "node:http";
import fs from "node:fs";
import url from "node:url";
import path from "node:path";

// const hostname = '127.0.0.1';
// const port = 8080;
// const server = http.createServer((req, res) => {
//   if (req.url === '/') {
//     res.writeHead(200, {'content-type': 'text/html'});
//     fs.createReadStream('index.html').pipe(res);
//   } else if (req.url === '/about') {
//     res.writeHead(200, {'Content-Type': 'text/html' });
//     fs.createReadStream('about.html').pipe(res);
//   } else if (req.url === '/contact-me') {
//     res.writeHead(200, {'content-type': 'text/html'});
//     fs.createReadStream('contact-me.html').pipe(res); 
//   } else {
//     res.writeHead(404, {'content-type': 'text/html'});
//     fs.createReadStream('404.html').pipe(res);
//   }
// });

// server.listen(port, hostname, () => {
//   console.log(`server running at http://${hostname}:${port}/`);
// });