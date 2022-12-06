const { apiSuccess } = require("../utils/apiBase");
const { APP_HOST, APP_PORT } = require("../app/config");

class UploadService {
  async upload(file) {
    const filePath = `${APP_HOST}:${APP_PORT}/uploads/${file.filename}`;
    return apiSuccess(filePath);
  }
}

module.exports = new UploadService();
