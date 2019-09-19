import http from "http";
import makeApp from "../src/make-app";
import initializeApp from "../src/initialize-app";
import makeRouter from "../src/make-router";
import p from "../package.json";
import { NODE_PORT } from "../src/config";

function main() {
  const app = makeApp();
  const server = http.createServer(app);

  initializeApp(makeRouter, app);

  server.on("error", console.error);
  server.on("listening", () =>
    console.log(`${p.name} ${p.version} listening on 127.0.0.1:${NODE_PORT}`)
  );

  server.listen(NODE_PORT);
}

main();
