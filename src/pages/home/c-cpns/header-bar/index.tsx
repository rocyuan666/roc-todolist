import React, { PureComponent } from 'react'

import { HeaderBarWrap } from "./styled"

export default class CpnRocHeaderBar extends PureComponent {
	render() {
		return (
			<HeaderBarWrap>
				<span>RocYuan - TodoList</span>
				<span>Roc邮箱：rocyuan666@163.com</span>
				<span>RocWX：rocyuan666</span>
				<span>个人网站：<a href="https://luojing.top" target="_blank" rel="noreferrer">https://luojing.top</a></span>
			</HeaderBarWrap>
		)
	}
}
