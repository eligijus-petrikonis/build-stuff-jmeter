// server.mjs
import { createServer } from "node:http";

const server = createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  console.log("Test");
  res.end("Hello World!");
});

// starts a simple http server locally on port 3000
server.listen(3000, "0.0.0.0", () => {
  console.log("Listening on 0.0.0.0:3000");
});

// run with `node server.mjs`
