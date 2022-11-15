# roc-todolist

## 介绍

roc-todolist，前端是基于 ts + react 技术栈开发，后端是基于 js + koa2 + mysql 技术栈开发。
因为本人恰饭的技术栈一直是 vue 相关，于是有空了就学一学别的技术，本项目则是将学习到的知识串起来玩一玩。
由于时间原因，虽然做的非常简单，主要以学习为主，但是“麻雀虽小五脏俱全”。

## 预览

预览地址：[http://todolist.rocyuan.top/](http://todolist.rocyuan.top/)

验证码暂无时间引入，有时间补上 -。-

<image width="100%" src="https://cdn.nlark.com/yuque/0/2022/png/2779910/1668501391701-22be9eb5-7c44-498d-8f43-b0b227b0c75a.png"></image>

<image width="100%" src="https://cdn.nlark.com/yuque/0/2022/png/2779910/1668501391733-bb9c5d03-9588-4c5f-bc71-7dab226e3fc7.png?x-oss-process=image%2Fresize%2Cw_750%2Climit_0"></image>

<image width="100%" src="https://cdn.nlark.com/yuque/0/2022/png/2779910/1668501391351-f65da5bb-1725-48c1-916a-abae2e417b85.png"></image>

<image width="100%" src="https://cdn.nlark.com/yuque/0/2022/png/2779910/1668501391390-6f9b3f9b-7fee-4b3b-b316-37a6cc749b1f.png"></image>

<image width="100%" src="https://cdn.nlark.com/yuque/0/2022/png/2779910/1668501391395-dc01150a-76fe-4cae-973d-3cf03b9d58a1.png"></image>

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
