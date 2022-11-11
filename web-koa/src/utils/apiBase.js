module.exports = {
  apiSuccess(data) {
    return {
      code: 1,
      data: data,
      message: "成功",
    };
  },
  apiError(message = "失败", code = 0) {
    return {
      code: code,
      data: "",
      message: message,
    };
  },
};
