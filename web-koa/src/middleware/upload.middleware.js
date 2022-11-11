const path = require("path");
const multer = require("@koa/multer");

// 上传文件存放路径、及文件命名处理
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, path.join(__dirname, "..", "..", "public", "uploads"));
  },
  filename(req, file, cb) {
    const allNameList = file.originalname.split(".");
    let type = allNameList[allNameList.length - 1];
    cb(null, `${file.fieldname}-${Date.now().toString(16)}.${type}`);
  },
});

// 文件上传限制(暂不限制)
const limits = {
  fields: 10, //非文件字段的数量
  fileSize: 500 * 1024, //文件大小 单位 b
  files: 1, //文件数量
};

const upload = multer({ storage });

const uploadMiddleware = upload.single("file");

module.exports = {
  uploadMiddleware,
};
