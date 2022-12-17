const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewear = jsonServer.defaults();
const port = 5000

server.use(middlewear);
server.use(router);

server.listen(port, ()=>{
    console.log("api listening on port", port);
});