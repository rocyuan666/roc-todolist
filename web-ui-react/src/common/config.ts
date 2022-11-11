interface Iconfig {
  devBaseUrl: string;
  proBaseUrl: string;
  timeOut: number;
}

const config: Iconfig = {
  // 网络请求开发环境地址
  devBaseUrl: "http://localhost:18080",
  // 网络请求生产环境地址
  proBaseUrl: "http://localhost:18080",
  // 网络请求超时时长设置（单位：s）
  timeOut: 60,
};

export default config;
