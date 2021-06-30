import React, { PureComponent } from 'react';
import { connect } from "react-redux";

import { StyledNonePageWrap } from "./styled";

import { FileSearchOutlined } from "@ant-design/icons";

import { TypeML } from "../../store/reducer";

interface IProps {
	height: number,
	themeColor: string[],
	themeColorCurrentIndex: number
}

class CpnRocNonePage extends PureComponent<IProps> {
	render() {
		const {themeColor, themeColorCurrentIndex} = this.props;
		return (
			<StyledNonePageWrap height={this.props.height} themeColor={themeColor[themeColorCurrentIndex]}>
				<FileSearchOutlined className="icon-none" />
			</StyledNonePageWrap>
		)
	}
}

const mapStateToProps = (state: TypeML) => {
	return {
		themeColor: state.themeColor,
		themeColorCurrentIndex: state.themeColorCurrentIndex
	}
}

export default connect(mapStateToProps)(CpnRocNonePage)