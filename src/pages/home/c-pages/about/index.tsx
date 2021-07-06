import React, { PureComponent } from 'react';

import { StyledAboutWrap } from "./styled";

export default class RocAbout extends PureComponent {
	render() {
		return (
			<StyledAboutWrap>
				<div className="title-box">
					<h2>设置</h2>
				</div>
				<div className="cont-box">
					<h2>RocYuan-TodoList</h2>
					<p>此项目是本人初学TypeScript写的一个小demo</p>
					
					<h2>相关技术</h2>
					<p>typescript</p>
					<p>react</p>
					<p>react-router-dom</p>
					<p>redux</p>
					<p>react-redux</p>
					<p>styled-components</p>
					<p>classnames</p>
					<p>antd</p>
				</div>
			</StyledAboutWrap>
		)
	}
}
