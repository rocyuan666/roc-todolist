import React, { PureComponent } from 'react';
import classNames from 'classnames';

import { IMatterItem } from "../../index"

import { StyledCreateMatterContWrap } from "./styled";

import { message } from "antd";

interface Istate {
	urgentColorList: string[],
	urgentActiveIndex: number,
	matterCont: string,
	isEdit: boolean
}

interface Iprops {
	propClickCancel: () => void,
	propClickOk: (urgentState: string, text: string, isEdit: boolean) => void,
	urgentColor: string,
	matterName: string,
	matterList: IMatterItem[],
	doneMatterList: IMatterItem[],
	currentEditIndex: number,
	themeColor: string
}

export default class CpnRocCreateMatterCont extends PureComponent<Iprops, Istate> {
	constructor(props: Iprops) {
		super(props)
		this.state = {
			urgentColorList: ["#a8071a", "#faad14", "#13c2c2", "#389e0d"],
			urgentActiveIndex: 0,
			matterCont: "",
			isEdit: false
		}
	}
	componentDidMount() {
		let newUrgentActiveIndex: number = 0;
		this.state.urgentColorList.forEach((item: string, index: number) => {
			if (this.props.urgentColor === item) {
				newUrgentActiveIndex = index
			}
		})
		if (this.props.matterName) {
			this.setState({
				isEdit: true
			})
		}
		this.setState({
			matterCont: this.props.matterName,
			urgentActiveIndex: newUrgentActiveIndex
		})
	}
	// 处理点击取消
	handleClickCancel() {
		this.props.propClickCancel()
	}
	// 处理点击创建 | 修改
	handleClickOk() {
		const { urgentColorList, urgentActiveIndex, matterCont, isEdit } = this.state;
		const { matterList, doneMatterList, currentEditIndex } = this.props;
		if (matterCont.trim() === "")
			return message.error("事项名称不能为空！")
		let isYes: boolean = false;
		if (!isEdit) {
			// 不是编辑
			for (let i in matterList) {
				if (matterList[i].text === matterCont.trim()) {
					isYes = true
					break;
				}
			}
		} else {
			// 是编辑
			let newMatterList = [...matterList]
			newMatterList.splice(currentEditIndex, 1)
			for (let i in newMatterList) {
				if (newMatterList[i].text === matterCont.trim()) {
					isYes = true
					break;
				}
			}
		}
		if (!isYes) {
			for (let i in doneMatterList) {
				if (doneMatterList[i].text === matterCont.trim()) {
					isYes = true
					break;
				}
			}
		}
		if (isYes)
			return message.error("此事项已经添加，请重新添加！")
		this.props.propClickOk(urgentColorList[urgentActiveIndex], matterCont, isEdit)
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
		const { urgentColorList, urgentActiveIndex, matterCont, isEdit } = this.state;
		return (
			<StyledCreateMatterContWrap themeColor={this.props.themeColor}>
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
							urgentColorList.map((item: string, index: number) => {
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
					<span className="ok" onClick={() => { this.handleClickOk() }}>{isEdit ? "修改" : "新建"}</span>
				</div>
			</StyledCreateMatterContWrap>
		)
	}
}
