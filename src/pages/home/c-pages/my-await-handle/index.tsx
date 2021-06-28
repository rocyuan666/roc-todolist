import React, { PureComponent } from 'react'
import { FormOutlined, DeleteOutlined, CheckOutlined } from "@ant-design/icons"

import { StyledMyAwaitHandleWrap, StyledMatterWrap } from "./styled"

interface IProps {
	[props: string]: string
}

interface IMatterItem {
	urgentState: number,
	state: boolean,
	text: string
}

interface IState {
	matterList: IMatterItem[]
}

export default class RocMyAwaitHandle extends PureComponent<IProps, IState, IMatterItem> {
	constructor(props: IProps) {
		super(props)
		this.state = {
			matterList: [
				{ urgentState: 0, state: false, text: "我是事项" },
				{ urgentState: 0, state: false, text: "我是事项我是事项" },
				{ urgentState: 0, state: false, text: "我是事项我是事项我是事项" },
				{ urgentState: 0, state: false, text: "我是事项我是事项我是事项我是事项" },
			]
		}
	}
	handleOptionChange(index: number, state: boolean) {
		const newMatterList: IMatterItem[] = [...this.state.matterList];
		console.log(newMatterList)
		console.log("改变状态")
	}
	render() {
		return (
			<StyledMyAwaitHandleWrap>
				<div className="title-box">
					<h2>我的待办</h2>
					<span className="btn-create">新建待办</span>
				</div>
				{/* 事项 */}
				<StyledMatterWrap>
					{/* 每项事项 */}
					{
						this.state.matterList.map((matterItem: IMatterItem, matterIndex) => {
							return (
								<div className="matter-item" key={matterIndex}>
									<div className="left-box">
										<span className="line">红线</span>
										{/* 选项 */}
										<div className="option">
											<div className="radio-box" onClick={e => { this.handleOptionChange(matterIndex, matterItem.state) }}>
												<CheckOutlined className="icon-yes" />
											</div>
										</div>
										<p className="text">{matterItem.text}</p>
									</div>
									<div className="right-box">
										<FormOutlined className="icon-edit" />
										<DeleteOutlined className="icon-delete" />
									</div>
								</div>
							)
						})
					}
				</StyledMatterWrap>
			</StyledMyAwaitHandleWrap>
		)
	}
}
