const logger = require("./logger");
const Utils = require("./utils");
const url = require("url");
const UploadHandler = require("./uploadHandler");
const { pipeline } = require("stream/promises");

class Routes {
  #io;
  constructor() {}

  // FOR SOCKET ENDPOINT
  setSocketEndpoint(io) {
    this.#io = io;
  }

  // FOR ANY POST REQUEST
  async post(request, response) {
    console.log(request.rawBody);
    const {
      query: { socketId },
    } = url.parse(request.url, true);
    const header = request.headers;

    // SEND SOCKET ID TO UPLOAD PART
    const upload = new UploadHandler({
      targetFolder: "./Downloads",
      io: this.#io,
      socketId: socketId,
    });

    // SEND HEADER TO BUSBOY
    const bb = upload.registerBusBoyEvents(header);
    // PIPE REQUEST TO BUSBOY INSTANCE
    await pipeline(request, bb);
  }

  // FOR ANY GET REQUEST
  async get(request, response) {
    const util = new Utils();
    const object = await util.getFileStatus("./Downloads");
    response.write(JSON.stringify(object));
    response.end();
  }

  // FOR ANY UNMATCHED PROTOCOL
  defaultRoute(request, response) {
    logger.info("Default route");
  }

  // INCOMING REQUEST HANDLER
  handler(request, response) {
    response.setHeader("Access-Control-Allow-Origin", "*");
    const choosen = this[request.method.toLowerCase()] || this.defaultRoute;
    return choosen.apply(this, [request, response]);
  }
}

module.exports = Routes;
