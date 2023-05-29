const busboy = require("busboy");
const { createReadStream, createWriteStream } = require("fs");
const { pipeline } = require("stream/promises");
const logger = require("./logger");

const SUCCESSFUL_UPLOAD_EVENT = "chunk-uploaded";

class UploadHandler {
  #targetFolder;
  #io;
  #socketId;
  constructor({ targetFolder, io, socketId }) {
    this.#targetFolder = targetFolder;
    this.#io = io;
    this.#socketId = socketId;
  }
  registerBusBoyEvents(headers) {
    const busboyInstance = busboy({ headers });
    busboyInstance.on("file", this.onFile.bind(this));
    return busboyInstance;
  }

  notifyClient() {
    async function* Notify(sourceStream) {
      let processedBytes = 0;
      for await (const chunk of sourceStream) {
        // SINCE YOU CANNOT ACCESS THIS KEYWORD INSIDE GENERATOR
        // YOU MUST BIND THIS KEYWORD TO GENERATOR FUNCTION
        processedBytes += chunk.length;
        logger.info(`Processed ${processedBytes}`);
        this.#io.to(this.#socketId).emit(SUCCESSFUL_UPLOAD_EVENT, processedBytes);
        yield chunk;
      }
    }
    return Notify.bind(this);
  }

  async onFile(field, file, { filename: fileName }) {
    const destinationFolder = `${this.#targetFolder}/${fileName}`;
    await pipeline(
      file,
      this.notifyClient.apply(this),
      createWriteStream(destinationFolder)
    );
  }
}

module.exports = UploadHandler;
