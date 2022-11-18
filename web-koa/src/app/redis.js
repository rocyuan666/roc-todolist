const { createClient } = require("redis");
const { REDIS_HOST, REDIS_PORT } = require("./config");

const redisClient = createClient({
  socket: {
    host: REDIS_HOST,
    port: REDIS_PORT,
  },
});

redisClient.on("error", (err) => {
  console.error("redis连接失败:", err);
});

redisClient.connect().then(() => {
  console.log("redis连接成功~");
});

module.exports = redisClient;
