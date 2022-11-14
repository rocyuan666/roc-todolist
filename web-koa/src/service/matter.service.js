const { apiSuccess, apiError } = require("../utils/apiBase");
const db = require("../app/database");
const { asyncTasks } = require("roc-utils");

class MatterService {
  /**
   * 添加事项
   * @param {*} userId
   * @param {*} name
   * @param {*} level
   * @returns
   */
  async add(userId, name, level) {
    const sql = `INSERT INTO roc_matter (userId, name, level, addtime) VALUES (?, ?, ?, ?)`;
    const [err, result] = await asyncTasks(db.execute(sql, [userId, name, level, new Date()]));
    if (err) return apiError(err);
    return apiSuccess(result[0].insertId);
  }

  /**
   * 删除事项
   * @param {*} id
   * @returns
   */
  async del(id) {
    // 硬删除
    // const sql = `DELETE FROM roc_matter WHERE id = ?`;
    // 软删除
    const sql = `UPDATE roc_matter SET deltime = ? WHERE id = ?`;
    const [err, result] = await asyncTasks(db.execute(sql, [new Date(), id]));
    if (err) return apiError(err);
    return apiSuccess("删除成功");
  }

  /**
   * 编辑事项
   * @param {*} id
   * @param {*} name
   * @param {*} level
   * @param {*} status
   */
  async edit(id, name, level, status) {
    const sql = `UPDATE roc_matter SET name = ?, level = ?, status = ?, edittime = ? WHERE id = ?`;
    const [err, result] = await asyncTasks(db.execute(sql, [name, level, status, new Date(), id]));
    if (err) return apiError(err);
    return apiSuccess("更新成功");
  }

  /**
   * 查询事项
   * @param {*} userId
   * @returns
   */
  async list(userId, status) {
    if (status == undefined) {
      // 查全部
      const sql = `SELECT * FROM roc_matter WHERE userId = ? AND deltime IS NULL`;
      const [err, result] = await asyncTasks(db.execute(sql, [userId]));
      if (err) return apiError(err);
      return apiSuccess(result[0]);
    } else {
      // 查询状态（待办 || 已办）对应的数据
      const sql = `SELECT * FROM roc_matter WHERE userId = ? AND deltime IS NULL AND status = ?`;
      const [err, result] = await asyncTasks(db.execute(sql, [userId, status]));
      if (err) return apiError(err);
      return apiSuccess(result[0]);
    }
  }
}

module.exports = new MatterService();
