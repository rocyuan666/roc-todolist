import styled from "styled-components";

// 最外层
export const StyledSiderMenuWrap = styled.div`
  box-sizing: border-box;
  position: fixed;
  left: 0;
  top: 0;
  width: 260px;
  height: 100%;
  background-color: #fff;
  padding: 50px 30px;
`;
// 头部信息样式
export const StyledHeaderInfoWrap = styled.div`
  margin-bottom: 30px;
  .logo {
    font-size: 20px;
    margin-bottom: 50px;
  }
  .user-info-box {
    display: flex;
    align-items: center;
    .user-info-main {
      display: flex;
      align-items: center;
      cursor: pointer;
      .img-logo {
        display: block;
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }
      .user-name {
        width: 112px;
        display: block;
        font-size: 16px;
        margin-bottom: 0;
        margin-left: 10px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
    .roc-logout {
      color: #666;
      margin-left: 10px;
      font-size: 16px;
      cursor: pointer;
    }
  }
`;
// 按钮nav样式
export const StyledNavWrap = styled.div`
  overflow: hidden;
  .btn-nav {
    display: flex;
    align-items: center;
    height: 50px;
    line-height: 50px;
    padding-left: 20px;
    margin: 20px 0;
    background: #fff;
    border-radius: 10px;
    color: #000;
    transition: all 0.3s;
    .btn-icon {
      font-size: 20px;
      margin-right: 10px;
    }
    &:hover {
      color: ${(props: { themeColor: string }) => props.themeColor};
      background: #f1f2f6;
    }
    &.active {
      color: ${(props: { themeColor: string }) => props.themeColor};
      background: #f1f2f6;
    }
    &:active {
      transform: scale(0.92);
    }
  }
`;
