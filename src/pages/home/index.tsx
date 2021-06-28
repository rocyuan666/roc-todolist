import React, { PureComponent } from 'react';

import CpnRocSiderMenu from './components/sider-menu';

import { StyledHomeWrap } from "./styled";

export default class RocHome extends PureComponent {
	render() {
		return (
			<StyledHomeWrap>
				<CpnRocSiderMenu></CpnRocSiderMenu>
			</StyledHomeWrap>
		)
	}
}
