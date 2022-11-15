const userService = require("../service/user.service");

class UserController {
  async findById(ctx, next) {
    const userId = ctx.user.id;
    ctx.body = await userService.getUserById(userId);
  }
  async editById(ctx, next) {
    const { nickname, headimg } = ctx.request.body;
    ctx.body = await userService.editUserById(ctx.user.id, nickname, headimg);
  }
}

module.exports = new UserController();
