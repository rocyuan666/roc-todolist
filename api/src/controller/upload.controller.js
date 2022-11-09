const uploadService = require("../service/upload.service");

class UploadController {
  async upload(ctx, next) {
    ctx.body = await uploadService.upload(ctx.file);
  }
}

module.exports = new UploadController();
