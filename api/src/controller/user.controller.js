const userService = require("../service/user.service");

class UserController {
  async findById(ctx, next) {
    const { userId } = ctx.params;
    ctx.body = await userService.getUserById(userId);
  }
}

module.exports = new UserController();
