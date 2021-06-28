import React, { PureComponent } from 'react';
import { Switch, Route, Redirect } from "react-router-dom"

import CpnRocSiderMenu from './c-cpns/sider-menu';
import CpnRocHeaderBar from './c-cpns/header-bar';
import RocMyAwaitHandle from './c-pages/my-await-handle';
import RocDataCharts from './c-pages/data-charts';
import RocSetup from './c-pages/setup';
import RocAbout from './c-pages/about';

import { StyledHomeWrap } from "./styled";

export default class RocHome extends PureComponent {
	render() {
		return (
			<StyledHomeWrap>
				<CpnRocSiderMenu></CpnRocSiderMenu>
				<div className="left-box">
					<CpnRocHeaderBar></CpnRocHeaderBar>
					{/* 内容 */}
					<Switch>
						<Route exact path="/home">
							<Redirect to="/home/my-await-handle" />
						</Route>
						<Route path="/home/my-await-handle">
							<RocMyAwaitHandle />
						</Route>
						<Route path="/home/data-charts">
							<RocDataCharts />
						</Route>
						<Route path="/home/setup">
							<RocSetup />
						</Route>
						<Route path="/home/about">
							<RocAbout />
						</Route>
					</Switch>
				</div>
			</StyledHomeWrap>
		)
	}
}
