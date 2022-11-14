/*
 * @作者：rocyuan（袁鹏）
 * @邮箱：rocyuan@luojing.top、rocyuan666@163.com
 * @微信：rocyuan666
 * @个人网站：https://luojing.top
 *
 * 网络请求的简单封装
 */
import axios, { AxiosRequestConfig } from "axios";
import NProgress from "nprogress";
import cfg from "../common/config";
import { message } from "antd";

export function request(newConfig: AxiosRequestConfig<any>) {
  const instance1 = axios.create({
    baseURL: process.env.NODE_ENV === "development" ? cfg.devBaseUrl : cfg.proBaseUrl,
    timeout: cfg.timeOut * 1000,
  });

  // 请求拦截
  instance1.interceptors.request.use(
    (config: any) => {
      //展示进度条
      NProgress.start();
      /*
				处理请求的参数数据
			*/
      // 处理请求的config（比如每次请求携带token）
      config.headers.token = localStorage.getItem("token");
      return config;
    },
    (err) => {
      Promise.reject(err);
    }
  );
  // 响应拦截
  instance1.interceptors.response.use(
    (res) => {
      //隐藏进度条
      NProgress.done();
      /*
				处理响应的状态码及数据。。。
			*/
      if (res.data.code === 1) {
        return res.data;
      } else if (res.data.code === 401) {
        message.error(res.data.message);
        localStorage.removeItem("token");
        window.location.href = "#/login";
        return Promise.reject(res.data.message);
      } else {
        message.error(res.data.message);
        return Promise.reject(res.data.message);
      }
    },
    (err) => {
      Promise.reject(err);
    }
  );

  // 发送请求
  return instance1(newConfig);
}
