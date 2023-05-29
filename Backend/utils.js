const { readdir, stat } = require("fs/promises");

class Utils {
  #fileStatus;
  constructor() {
    this.#fileStatus = [];
  }
  async getFileStatus(folder) {
    const files = await readdir(folder);
    for (let file of files) {
      const { size, birthtime } = await stat(`${folder}/${file}`);
      const mappedData = {
        file,
        size: size,
        birthtime,
      };
      this.#fileStatus.push(mappedData);
    }
    return this.#fileStatus;
  }
}

module.exports = Utils;
