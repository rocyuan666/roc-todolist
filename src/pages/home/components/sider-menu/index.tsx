import React, { PureComponent } from 'react';
import { NavLink } from "react-router-dom";
import { CopyOutlined, SettingOutlined, ProjectOutlined, InfoCircleOutlined } from "@ant-design/icons";

import { StyledSiderMenuWrap, StyledHeaderInfoWrap, StyledNavWrap } from "./styled";

function HeaderInfoBox() {
	return (
		<StyledHeaderInfoWrap>
			<p className="logo">TodoList</p>
			<div className="user-info-box">
				<img className="img-logo" src={require("../../../../assets/images/rocyuan.jpg").default} alt="" />
				<p className="user-name">RocYuan</p>
			</div>
		</StyledHeaderInfoWrap>
	)
}

export default class CpnRocSiderMenu extends PureComponent {
	render() {
		return (
			<StyledSiderMenuWrap>
				{HeaderInfoBox()}
				<StyledNavWrap>
					<NavLink className="btn-nav" to="/home/my-await-handle">
						<CopyOutlined className="btn-icon" />
						<span>我的待办</span>
					</NavLink>
					<NavLink className="btn-nav" to="/home/data-charts">
						<ProjectOutlined className="btn-icon" />
						<span>数据统计</span>
					</NavLink>
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
		)
	}
}
