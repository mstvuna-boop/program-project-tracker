const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const root = __dirname;
const dataDir = process.env.DATA_DIR || path.join(root, "data");
const dataFile = path.join(dataDir, "tracker-data.json");
const port = Number(process.argv[2] || process.env.PORT || 4180);
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8"
};

http.createServer((request, response) => {
  if (request.url === "/api/data" && request.method === "GET") {
    fs.readFile(dataFile, "utf8", (error, data) => {
      response.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
      response.end(error ? "{}" : data);
    });
    return;
  }

  if (request.url === "/api/data" && request.method === "POST") {
    let body = "";
    request.on("data", chunk => {
      body += chunk;
      if (body.length > 5_000_000) request.destroy();
    });
    request.on("end", () => {
      try {
        JSON.parse(body);
        fs.mkdir(dataDir, { recursive: true }, mkdirError => {
          if (mkdirError) {
            response.writeHead(500);
            response.end("Cannot create data folder");
            return;
          }
          fs.writeFile(dataFile, body, "utf8", writeError => {
            response.writeHead(writeError ? 500 : 200, { "Content-Type": "application/json; charset=utf-8" });
            response.end(writeError ? "{\"ok\":false}" : "{\"ok\":true}");
          });
        });
      } catch {
        response.writeHead(400);
        response.end("Invalid JSON");
      }
    });
    return;
  }

  const urlPath = decodeURIComponent(new URL(request.url, `http://localhost:${port}`).pathname);
  const requestPath = urlPath === "/" ? "index.html" : urlPath.replace(/^\/+/, "");
  const safePath = path.normalize(requestPath).replace(/^(\.\.[/\\])+/, "");
  const filePath = path.join(root, safePath);

  if (!filePath.startsWith(root)) {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }

  fs.readFile(filePath, (error, data) => {
    if (error) {
      response.writeHead(404);
      response.end("Not found");
      return;
    }
    response.writeHead(200, {
      "Content-Type": types[path.extname(filePath)] || "application/octet-stream",
      "Cache-Control": "no-store"
    });
    response.end(data);
  });
}).listen(port, "0.0.0.0", () => {
  console.log(`http://0.0.0.0:${port}`);
});
