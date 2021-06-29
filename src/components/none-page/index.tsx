import React, { PureComponent } from 'react';

import { StyledNonePageWrap } from "./styled";

import { FileSearchOutlined } from "@ant-design/icons";

export default class CpnRocNonePage extends PureComponent {
	render() {
		return (
			<StyledNonePageWrap height={500}>
				<FileSearchOutlined className="icon-none" />
			</StyledNonePageWrap>
		)
	}
}
