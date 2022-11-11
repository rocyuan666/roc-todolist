import { request } from "../common/request";

export function login(data: { username: string; password: string }) {
  return request({
    url: "/login",
    method: "post",
    data,
  });
}
