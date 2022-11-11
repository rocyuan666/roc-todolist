import styled from "styled-components";
import loginBg from "../../assets/images/login-bg-2.jpg";

export const LoginWrapBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: url(${loginBg}) no-repeat;
  background-size: cover;
  background-position: center center;
  .login-box {
    width: 500px;
    height: 360px;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    padding: 0 80px;
    h1 {
      font-size: 26px;
      color: #333;
      line-height: 3;
      text-align: center;
    }
    .username {
      margin-bottom: 20px;
    }
    .againPassword {
      margin-top: 20px;
    }
    .btn-box {
      display: flex;
      justify-content: space-between;
      margin-top: 30px;
      .btn-submit {
        display: block;
        width: 150px;
        text-align: center;
        line-height: 2.6;
        font-size: 14px;
        border-radius: 10px;
        cursor: pointer;
        color: #fff;
        background-color: #40a9ff;
        border: 1px solid #40a9ff;
        transition: all 0.3s;
        &.bgc {
          background-color: #76c0fd;
          border: 1px solid #76c0fd;
        }
        &:hover {
          color: #40a9ff;
          background-color: transparent;
        }
      }
    }
  }
`;
