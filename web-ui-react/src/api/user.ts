import { request } from "../common/request";

export function getUserInfo() {
  return request({
    url: "/user/userInfo",
    method: "get",
  });
}

export function editUserInfo(data: { nickname: string; headimg: string }) {
  return request({
    url: "/user/edit",
    method: "post",
    data,
  });
}
