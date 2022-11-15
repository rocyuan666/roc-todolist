import React, { PureComponent } from "react";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Input, message } from "antd";
import { connect } from "react-redux";

import { actionSetUserInfo } from "../../store/actions";
import { login } from "../../api/login";

import { LoginWrapBox } from "./styled";

interface Istate {
  username: string;
  password: string;
}

class RocLogin extends PureComponent<any, Istate> {
  constructor(props: any) {
    super(props);
    this.state = {
      username: "",
      password: "",
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
  async handleLogin() {
    if (!this.state.username || !this.state.password) {
      return message.error("用户名或密码不能为空");
    }
    const sendObj = {
      username: this.state.username.trim(),
      password: this.state.password.trim(),
    };
    const res = await login(sendObj);
    localStorage.setItem("token", res.data.token);
    this.props.setUserInfo();
    window.location.href = "#/";
  }
  render() {
    return (
      <LoginWrapBox>
        <div className="login-box">
          <h1>roc-todolist - 登录</h1>
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
          <div className="btn-box">
            <span
              className="btn-submit bgc"
              onClick={() => {
                window.location.href = "#/register";
              }}
            >
              去注册
            </span>
            <span
              className="btn-submit"
              onClick={() => {
                this.handleLogin();
              }}
            >
              登录
            </span>
          </div>
        </div>
      </LoginWrapBox>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {};
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    setUserInfo: () => {
      dispatch(actionSetUserInfo());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RocLogin);
