const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 3000;
const HOSTNAME = process.env.HOSTNAME || "0.0.0.0";

const html = fs.readFileSync(path.join(__dirname, "proposta.html"), "utf-8");

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(html);
});

server.listen(PORT, HOSTNAME, () => {
    console.log(`Servidor rodando em http://${HOSTNAME}:${PORT}`);
});
