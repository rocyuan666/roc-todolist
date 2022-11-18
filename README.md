# roc-todolist

## 介绍

roc-todolist，前端是基于 ts + react 技术栈开发，后端是基于 js + koa2 + mysql 技术栈开发。
因为本人恰饭的技术栈一直是 vue 相关，于是有空了就学一学别的技术，本项目则是将学习到的知识串起来玩一玩。
由于时间原因，虽然做的非常简单，主要以学习为主，但是“麻雀虽小五脏俱全”。

## 预览

预览地址：[http://todolist.rocyuan.top/](http://todolist.rocyuan.top/)

<image width="100%" src="https://cdn.nlark.com/yuque/0/2022/png/2779910/1668759626804-4f97beea-4743-4067-9550-fb07d34def0c.png"></image>

<image width="100%" src="https://cdn.nlark.com/yuque/0/2022/png/2779910/1668759639057-6a76e981-3159-45e6-aef6-63313053f791.png"></image>

<image width="100%" src="https://cdn.nlark.com/yuque/0/2022/png/2779910/1668501391351-f65da5bb-1725-48c1-916a-abae2e417b85.png"></image>

<image width="100%" src="https://cdn.nlark.com/yuque/0/2022/png/2779910/1668501391390-6f9b3f9b-7fee-4b3b-b316-37a6cc749b1f.png"></image>

<image width="100%" src="https://cdn.nlark.com/yuque/0/2022/png/2779910/1668501391395-dc01150a-76fe-4cae-973d-3cf03b9d58a1.png"></image>

## 环境

- Node 14
- MySQL 5.7
- Redis 7

## 前端

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

## 后端

后端根目录在 web-koa

### 主要技术

- 对于 koa2 项目自行封装项目结构 简单分为四层 router（路由层）、controller（控制层）、service（业务处理层）、middleware（中间件层）
- koa 框架使用
- koa-bodyparser body 数据解析使用
- koa-static 静态资源访问使用
- @koa/multer multer 文件上传使用
- @koa/router 路由使用
- mysql2 mysql 使用
- redis 使用
- captchapng 图片验证码使用
- crypto-js 密码 MD5 加密使用
- jsonwebtoken（JWT）生成、效验 token 使用
- RSA 加密使用
- 跨域处理
- nodemon 开发环境检测文件改动自动重新启动使用
- ...
