const matterService = require("../service/matter.service");

class MatterController {
  async add(ctx, next) {
    const { name, level } = ctx.request.body;
    ctx.body = await matterService.add(ctx.user.id, name, level);
  }
  async del(ctx, next) {
    const { id } = ctx.request.body;
    ctx.body = await matterService.del(id);
  }
  async edit(ctx, next) {
    const { id, name, level, status } = ctx.request.body;
    ctx.body = await matterService.edit(id, name, level, status);
  }
  async list(ctx, next) {
    const { status } = ctx.request.query;
    ctx.body = await matterService.list(ctx.user.id, status);
  }
}

module.exports = new MatterController();
