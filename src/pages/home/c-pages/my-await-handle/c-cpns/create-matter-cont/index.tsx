import React, { PureComponent } from 'react';
import classNames from 'classnames';

import { StyledCreateMatterContWrap } from "./styled";

import { message } from "antd";

interface Istate {
	urgantColorList: string[],
	urgentActiveIndex: number,
	matterCont: string
}

interface Iprops {
	propClickCancel: () => void,
	propClickOk: (urgentState: string, text: string) => void
}

export default class CpnRocCreateMatterCont extends PureComponent<Iprops, Istate> {
	constructor(props: Iprops) {
		super(props)
		this.state = {
			urgantColorList: ["#a8071a", "#f5222d", "#ff7875", "#ffccc7"],
			urgentActiveIndex: 0,
			matterCont: ""
		}
	}
	// 处理点击取消
	handleClickCancel() {
		this.props.propClickCancel()
	}
	// 处理点击创建
	handleClickOk() {
		const { urgantColorList, urgentActiveIndex, matterCont } = this.state;
		if (matterCont.trim() === "") return message.error("事项名称不能为空！")
		this.props.propClickOk(urgantColorList[urgentActiveIndex], matterCont)
	}
	// 处理修改优先级改变
	changeUrgentIndex(index: number) {
		this.setState({
			urgentActiveIndex: index
		})
	}
	// 修改事项内容
	changeMatterCont(e: any) {
		this.setState({
			matterCont: e.target.value
		})
	}
	render() {
		const { urgantColorList, urgentActiveIndex, matterCont } = this.state;
		return (
			<StyledCreateMatterContWrap>
				<div className="inpt-box">
					<label className="name" htmlFor="matter-name">事项名称:</label>
					<input
						className="value"
						onChange={e => { this.changeMatterCont(e) }}
						value={matterCont} id="matter-name"
						type="text"
					/>
				</div>
				<div className="inpt-box">
					<label className="name" htmlFor="matter-urgent">事项优先级:</label>
					<div className="value-box">
						{
							urgantColorList.map((item: string, index: number) => {
								return (
									<span
										key={index}
										onClick={() => { this.changeUrgentIndex(index) }}
										className={classNames({
											'active': index === urgentActiveIndex
										})}
										style={{ backgroundColor: item }}
									>
										<em></em>
									</span>
								)
							})
						}
					</div>
				</div>
				<div className="btn-box">
					<span className="cancel" onClick={() => { this.handleClickCancel() }}>取消</span>
					<span className="ok" onClick={() => { this.handleClickOk() }}>创建</span>
				</div>
			</StyledCreateMatterContWrap>
		)
	}
}
