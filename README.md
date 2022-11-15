# roc-todolist

## 介绍

roc-todolist，前端是基于 ts + react 技术栈开发，后端是基于 js + koa2 + mysql 技术栈开发。
因为本人恰饭的技术栈一直是 vue 相关，于是有空了就学一学别的技术，本项目则是将学习到的知识串起来玩一玩。
由于时间原因，虽然做的非常简单，主要以学习为主，但是“麻雀虽小五脏俱全”。

## 预览

预览地址：[http://todolist.rocyuan.top/](http://todolist.rocyuan.top/)

## 前端部分

前端根目录在 web-ui-react

### 主要技术

- 使用 create-react-app 脚手架搭建项目结构
- typescript 使用
- react 框架使用
- ant-design 组件库使用
- axios 网络请求封装
- redux 状态管理使用
- react-redux react 与 redux 连接
- redux-thunk 状态管理中间件的使用
- react-router-dom 路由的使用
- styled-components 样式使用 css in js 的方案
- classnames 动态 class 使用
- ...

## 后端部分

后端根目录在 web-koa

### 主要技术

- 对于 koa2 项目自行封装项目结构 简单分为四层 router（路由层）、controller（控制层）、service（业务处理层）、middleware（中间件层）
- koa 框架使用
- koa-bodyparser body 数据解析使用
- koa-static 静态资源访问使用
- @koa/multer multer 文件上传使用
- @koa/router 路由使用
- mysql2 mysql 使用
- crypto-js 密码 MD5 加密使用
- jsonwebtoken（JWT）生成、效验 token 使用
- RSA 加密使用
- 跨域处理
- nodemon 开发环境检测文件改动自动重新启动使用
- ...
