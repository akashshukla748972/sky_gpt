import http from "http";
import app from "./src/app.js";
import { gv } from "./configs/global_variable.js";

const server = http.createServer(app);

server.listen(gv.port, () => {
  console.log(`Server is running on port ${gv.port}`);
});
