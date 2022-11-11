import { request } from "../common/request";

export function register(data: { username: string; password: string }) {
  return request({
    url: "/register",
    method: "post",
    data,
  });
}
