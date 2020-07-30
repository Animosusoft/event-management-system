import Koa from "koa";
import serveStatic from "koa-static";

const server = new Koa();
server.use(serveStatic("./dist"));
const port = process.env.port || 8000;
server.listen(port);
