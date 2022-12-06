const { apiSuccess } = require("../utils/apiBase");
const { APP_UPLOAD_BASEURL } = require("../app/config");

class UploadService {
  async upload(file) {
    const filePath = `${APP_UPLOAD_BASEURL}/uploads/${file.filename}`;
    return apiSuccess(filePath);
  }
}

module.exports = new UploadService();
