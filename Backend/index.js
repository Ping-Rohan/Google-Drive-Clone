const { createServer } = require("http");
const logger = require("./logger");
const Routes = require("./routes");
const { Server } = require("socket.io");

const PORT_NUMBER = 4000;

const route_handler = new Routes();

const server = createServer(route_handler.handler.bind(route_handler));

const io = new Server(server, {
  cors: {
    credentials: false,
    origin: "*",
  },
});

route_handler.setSocketEndpoint(io);

io.on("connection", (socket) => {
  logger.info(`A client connected...`);
});

server.listen(PORT_NUMBER, () => logger.info(`App running at port : ${PORT_NUMBER}`));
