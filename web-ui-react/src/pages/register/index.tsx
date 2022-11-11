import React, { PureComponent } from "react";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Input, message } from "antd";

import { register } from "../../api/register";

import { LoginWrapBox } from "./styled";

interface Istate {
  username: string;
  password: string;
  againPassword: string;
}
interface Iprops {}

export default class RocLogin extends PureComponent<Iprops, Istate> {
  constructor(props: Iprops) {
    super(props);
    this.state = {
      username: "",
      password: "",
      againPassword: "",
    };
  }
  changeUsername(value: string) {
    this.setState({
      username: value,
    });
  }
  changePassword(value: string) {
    this.setState({
      password: value,
    });
  }
  changeAgainPassword(value: string) {
    this.setState({
      againPassword: value,
    });
  }
  async handleRegister() {
    console.log(this.state);
    if (!this.state.username || !this.state.password || !this.state.againPassword) {
      return message.error("用户名或密码不能为空");
    } else if (this.state.password.trim() !== this.state.againPassword) {
      return message.error("两次密码输入不一致，请检查");
    }
    const sendObj = {
      username: this.state.username.trim(),
      password: this.state.password.trim(),
    };
    await register(sendObj);
    message.success("注册成功，快去登录吧~");
  }
  render() {
    return (
      <LoginWrapBox>
        <div className="login-box">
          <h1>roc-todolist - 注册账号</h1>
          <Input
            className="username"
            value={this.state.username}
            onChange={(e) => {
              this.changeUsername(e.target.value);
            }}
            size="large"
            placeholder="请输入用户名"
            prefix={<UserOutlined />}
          />
          <Input.Password
            size="large"
            value={this.state.password}
            onChange={(e) => {
              this.changePassword(e.target.value);
            }}
            placeholder="请输入密码"
            prefix={<LockOutlined />}
          />
          <Input.Password
            className="againPassword"
            size="large"
            value={this.state.againPassword}
            onChange={(e) => {
              this.changeAgainPassword(e.target.value);
            }}
            placeholder="请再次输入密码"
            prefix={<LockOutlined />}
          />
          <div className="btn-box">
            <span
              className="btn-submit bgc"
              onClick={() => {
                window.location.href = "#/login";
              }}
            >
              去登录
            </span>
            <span
              className="btn-submit"
              onClick={() => {
                this.handleRegister();
              }}
            >
              注册
            </span>
          </div>
        </div>
      </LoginWrapBox>
    );
  }
}
