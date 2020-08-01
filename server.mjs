import Koa from "koa";
import serveStatic from "koa-static";

const server = new Koa();
server.use(serveStatic("./dist"));
const port = process.env.PORT || 8000;
server.listen(port, () => {
  console.log("Vue app instance in running on koa at port %s", port);
});
