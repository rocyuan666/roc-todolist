import React, { PureComponent } from "react";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Input, message } from "antd";

import { register } from "../../api/register";
import { captcha } from "../../api/login";

import { LoginWrapBox } from "./styled";

interface Istate {
  nickname: string;
  username: string;
  password: string;
  againPassword: string;
  uuid: string;
  captcha: string;
  captchaBase64Img: string;
}
interface Iprops {}

export default class RocLogin extends PureComponent<Iprops, Istate> {
  constructor(props: Iprops) {
    super(props);
    this.state = {
      nickname: "",
      username: "",
      password: "",
      againPassword: "",
      uuid: "",
      captcha: "",
      captchaBase64Img: "",
    };
  }
  componentDidMount() {
    this.getCaptcha();
  }
  async getCaptcha() {
    const res = await captcha();
    this.setState({
      uuid: res.data.uuid,
      captchaBase64Img: res.data.captcha,
    });
  }
  changeNickname(value: string) {
    this.setState({
      nickname: value,
    });
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
  changeCaptcha(value: string) {
    this.setState({
      captcha: value,
    });
  }
  async handleRegister() {
    if (!this.state.nickname.trim()) {
      return message.error("请输入昵称");
    } else if (!this.state.username.trim() || !this.state.password.trim()) {
      return message.error("用户名或密码不能为空");
    } else if (!/^[0-9a-zA-Z]+$/.test(this.state.username)) {
      return message.error("用户名格式错误，仅可包含大小写英文字母、数字");
    } else if (this.state.password.trim() !== this.state.againPassword.trim()) {
      return message.error("两次密码输入不一致，请检查");
    } else if (!this.state.captcha.trim()) {
      return message.error("验证码不能为空");
    }
    const sendObj = {
      nickname: this.state.nickname.trim(),
      username: this.state.username.trim(),
      password: this.state.password.trim(),
      uuid: this.state.uuid,
      captcha: this.state.captcha.trim(),
    };
    register(sendObj)
      .then(() => {
        message.success("注册成功，快登录吧~");
        setTimeout(() => {
          window.location.href = "#/login";
        }, 1000);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <LoginWrapBox>
        <div className="login-box">
          <h1>roc-todolist - 注册账号</h1>
          <Input
            className="username"
            value={this.state.nickname}
            onChange={(e) => {
              this.changeNickname(e.target.value);
            }}
            size="large"
            placeholder="请输入昵称"
            maxLength={10}
            prefix={<UserOutlined />}
          />
          <Input
            className="username"
            value={this.state.username}
            onChange={(e) => {
              this.changeUsername(e.target.value);
            }}
            size="large"
            placeholder="请输入用户名"
            maxLength={20}
            prefix={<UserOutlined />}
          />
          <Input.Password
            size="large"
            value={this.state.password}
            onChange={(e) => {
              this.changePassword(e.target.value);
            }}
            placeholder="请输入密码"
            maxLength={20}
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
          <div className="captcha-box">
            <Input
              className="captcha"
              value={this.state.captcha}
              onChange={(e) => {
                this.changeCaptcha(e.target.value);
              }}
              size="large"
              maxLength={4}
              placeholder="请输入验证码"
              prefix={<UserOutlined />}
            />
            <img
              className="captcha-img"
              src={this.state.captchaBase64Img}
              alt="验证码"
              onClick={() => {
                this.getCaptcha();
              }}
            />
          </div>
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
