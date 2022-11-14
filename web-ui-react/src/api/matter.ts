import { request } from "../common/request";

export function list(params: { status: number }) {
  return request({
    url: "/matter/list",
    method: "get",
    params,
  });
}

export function add(data: { name: string; level: number }) {
  return request({
    url: "/matter/add",
    method: "post",
    data,
  });
}

export function del(data: { id: number }) {
  return request({
    url: "/matter/del",
    method: "delete",
    data,
  });
}

export function edit(data: { id: number; name: string; level: number; status: number }) {
  return request({
    url: "/matter/edit",
    method: "put",
    data,
  });
}
