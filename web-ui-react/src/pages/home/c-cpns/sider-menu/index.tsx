import React, { PureComponent } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { Modal } from "antd";
import { ImportOutlined } from "@ant-design/icons";

import { TypeML } from "../../../../store/reducer";

import { StyledSiderMenuWrap, StyledHeaderInfoWrap, StyledNavWrap } from "./styled";

import {
  CopyOutlined,
  SettingOutlined,
  // ProjectOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";

function HeaderInfoBox() {
  // 退出
  function handleLogout() {
    Modal.confirm({
      title: "你确定要退出吗?",
      closable: true,
      okText: "确定",
      cancelText: "取消",
      onOk() {
        localStorage.removeItem("token");
        window.location.href = "#/login";
      },
    });
  }
  return (
    <StyledHeaderInfoWrap>
      <p className="logo">TodoList</p>
      <div className="user-info-box">
        <img className="img-logo" src={require("../../../../assets/images/rocyuan.jpg").default} alt="" />
        <p className="user-name">RocYuan</p>
        <ImportOutlined onClick={handleLogout} className="roc-logout" />
      </div>
    </StyledHeaderInfoWrap>
  );
}

interface IProps {
  themeColor: string[];
  themeColorCurrentIndex: number;
}

class CpnRocSiderMenu extends PureComponent<IProps> {
  render() {
    const { themeColor, themeColorCurrentIndex } = this.props;
    return (
      <StyledSiderMenuWrap>
        {HeaderInfoBox()}
        <StyledNavWrap themeColor={themeColor[themeColorCurrentIndex]}>
          <NavLink className="btn-nav" to="/home/my-await-handle">
            <CopyOutlined className="btn-icon" />
            <span>我的事项</span>
          </NavLink>
          {/* 预留 */}
          {/* <NavLink className="btn-nav" to="/home/data-charts">
						<ProjectOutlined className="btn-icon" />
						<span>数据统计</span>
					</NavLink> */}
          <NavLink className="btn-nav" to="/home/setup">
            <SettingOutlined className="btn-icon" />
            <span>设置</span>
          </NavLink>
          <NavLink className="btn-nav" to="/home/about">
            <InfoCircleOutlined className="btn-icon" />
            <span>关于</span>
          </NavLink>
        </StyledNavWrap>
      </StyledSiderMenuWrap>
    );
  }
}
const mapStateToProps = (state: TypeML) => {
  return {
    themeColor: state.themeColor,
    themeColorCurrentIndex: state.themeColorCurrentIndex,
  };
};

export default connect(mapStateToProps)(CpnRocSiderMenu);
