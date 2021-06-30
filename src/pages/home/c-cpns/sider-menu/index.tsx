import React, { PureComponent } from 'react';
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import { TypeML } from "../../../../store/reducer";

import { StyledSiderMenuWrap, StyledHeaderInfoWrap, StyledNavWrap } from "./styled";

import { CopyOutlined, SettingOutlined, ProjectOutlined, InfoCircleOutlined } from "@ant-design/icons";

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

interface IProps {
	themeColor: string[],
	themeColorCurrentIndex: number
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
const mapStateToProps = (state: TypeML) => {
	return {
		themeColor: state.themeColor,
		themeColorCurrentIndex: state.themeColorCurrentIndex
	}
}

export default connect(mapStateToProps)(CpnRocSiderMenu)