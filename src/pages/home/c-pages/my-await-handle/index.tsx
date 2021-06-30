import React, { PureComponent } from 'react';
import classnames from "classnames";

import { TypeML } from "../../../../store/reducer";
import { actionChangeMatterList, actionChangeDoneMatterList } from "../../../../store/actions";

import { StyledMyAwaitHandleWrap, StyledMatterWrap, StyledDelPopWrap } from "./styled";

import { Modal } from "antd";
import { FormOutlined, DeleteOutlined, CheckOutlined, ExclamationCircleOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import CpnRocCreateMatterCont from "./c-cpns/create-matter-cont";
import CpmRocNonePage from "../../../../components/none-page";

interface IProps {
	matterList: IMatterItem[],
	changeMatterList: (matterList: IMatterItem[]) => void,
	doneMatterList: IMatterItem[],
	changeDoneMatterList: (matterList: IMatterItem[]) => void,
	themeColor: string[],
	themeColorCurrentIndex: number
}

export interface IMatterItem {
	urgentState: string,
	state: boolean,
	text: string
}

interface IState {
	matterList: IMatterItem[],
	isPopShow: boolean,
	isDelete: boolean,
	popTile: string,
	matterName: string,
	urgentColor: string,
	currentEditIndex: number,
	delCurrentIndex: number,
	delCurrentMatter: IMatterItem
}

class RocMyAwaitHandle extends PureComponent<IProps, IState, IMatterItem> {
	constructor(props: IProps) {
		super(props)
		this.state = {
			matterList: [],
			isPopShow: false,
			isDelete: false,
			popTile: "",
			matterName: "",
			urgentColor: "",
			currentEditIndex: -1,
			delCurrentIndex: -1,
			delCurrentMatter: {
				urgentState: "",
				state: false,
				text: ""
			}
		}
	}
	// 点击了确定
	clickOk(urgentState: string, text: string, isEdit: boolean) {
		const newMatterItem: IMatterItem = {
			urgentState,
			state: false,
			text
		}
		const newMatterList: IMatterItem[] = [...this.props.matterList];
		if (isEdit) {
			// 修改
			newMatterList.splice(this.state.currentEditIndex, 1, newMatterItem)
			this.props.changeMatterList(newMatterList)
		} else {
			// 新建
			newMatterList.unshift(newMatterItem)
			this.props.changeMatterList(newMatterList)
		}
		this.setState({
			isPopShow: false
		})
	}
	// 点击了取消
	clickCancel() {
		this.setState({
			isPopShow: false
		})
	}
	// 新建事项
	cerateMatter() {
		this.setState({
			popTile: "新建待办事项",
			isPopShow: true,
			urgentColor: "",
			matterName: ""
		})
	}
	// 处理事项状态改变
	handleMatterStateChange(index: number, state: boolean): void {
		const { matterList, changeMatterList, doneMatterList, changeDoneMatterList } = this.props;
		if (state) {
			// 完成的改变为未完成的
			const newDoneMatterList: IMatterItem[] = [...matterList];
			const newMatterList: IMatterItem[] = [...doneMatterList];
			doneMatterList.forEach((mItem: IMatterItem, mIndex: number) => {
				if (index === mIndex) {
					mItem.state = !mItem.state
					// 判断未完成事项里是否有事项
					if (matterList.length !== 0) {
						for (let i = 0; i < matterList.length; i++) {
							if (matterList[i].text === mItem.text) {
								newDoneMatterList.splice(i, 1, mItem)
							} else {
								newDoneMatterList.push(mItem)
								// 必须终止内部循环，否则内部循环会多次push
								break;
							}
						}
					} else {
						newDoneMatterList.push(mItem)
					}
					// 删除未完成数组项
					newMatterList.splice(mIndex, 1)
				}
			})
			changeMatterList(newDoneMatterList);
			changeDoneMatterList(newMatterList);
		} else {
			// 未完成的改变为完成的
			const newMatterList: IMatterItem[] = [...matterList];
			const newDoneMatterList: IMatterItem[] = [...doneMatterList];
			matterList.forEach((mItem: IMatterItem, mIndex: number) => {
				if (index === mIndex) {
					mItem.state = !mItem.state
					// 判断完成事项里是否有事项
					if (doneMatterList.length !== 0) {
						for (let i = 0; i < doneMatterList.length; i++) {
							if (doneMatterList[i].text === mItem.text) {
								newDoneMatterList.splice(i, 1, mItem)
							} else {
								newDoneMatterList.push(mItem)
								// 必须终止内部循环，否则内部循环会多次push
								break;
							}
						}
					} else {
						newDoneMatterList.push(mItem)
					}
					// 删除未完成数组项
					newMatterList.splice(mIndex, 1)
				}
			})
			changeMatterList(newMatterList);
			changeDoneMatterList(newDoneMatterList);
		}
	}
	// 编辑事项
	handleEdit(index: number) {
		this.setState({
			popTile: "修改待办事项",
			isPopShow: true,
			currentEditIndex: index,
			urgentColor: this.props.matterList[index].urgentState,
			matterName: this.props.matterList[index].text
		})
	}
	// 删除事项
	handleDelete(index: number, matterItem: IMatterItem) {
		// const that = this;
		this.setState({
			isDelete: true,
			delCurrentIndex: index,
			delCurrentMatter: matterItem
		})
	}
	// 事项列表渲染
	matterListRender(matterList: IMatterItem[]) {
		if (matterList.length) {
			return (
				matterList.map((matterItem: IMatterItem, matterIndex: number) => {
					return (
						<div
							className={
								classnames({
									'matter-item': true,
									'active': matterItem.state
								})
							}
							key={matterIndex}
						>
							<div className="left-box">
								<span
									className="line"
									style={{
										backgroundColor: matterItem.urgentState
									}}
								>红线</span>
								{/* 选项 */}
								<div className="option">
									<div
										className={
											classnames({
												'radio-box': true,
												'active': matterItem.state
											})
										}
										onClick={(e: unknown) => { this.handleMatterStateChange(matterIndex, matterItem.state) }}
									>
										<CheckOutlined className="icon-yes" />
									</div>
								</div>
								<p className="text">{matterItem.text}</p>
							</div>
							<div className="right-box">
								{
									!matterItem.state &&
									<FormOutlined onClick={() => { this.handleEdit(matterIndex) }} className="icon-edit" />
								}
								<DeleteOutlined onClick={() => { this.handleDelete(matterIndex, matterItem) }} className="icon-delete" />
							</div>
						</div>
					)
				})
			)
		} else {
			return <CpmRocNonePage height={200} />
		}
	}
	// 取消删除
	clickCancelDel() {
		this.setState({
			isDelete: false
		})
	}
	// 确定删除
	clickOkDel() {
		const { delCurrentMatter, delCurrentIndex } = this.state;
		let newMatterList: IMatterItem[] = [];
		if (delCurrentMatter.state) {
			// 删除的已办事项
			newMatterList = [...this.props.doneMatterList]
			newMatterList.splice(delCurrentIndex, 1)
			this.props.changeDoneMatterList(newMatterList)
		} else {
			// 删除的未办事项
			newMatterList = [...this.props.matterList]
			newMatterList.splice(delCurrentIndex, 1)
			this.props.changeMatterList(newMatterList)
		}
		this.setState({
			isDelete: false
		})
	}
	// 渲染
	render() {
		const { isPopShow, isDelete, popTile, matterName, urgentColor } = this.state;
		const { matterList, doneMatterList, themeColor, themeColorCurrentIndex } = this.props;
		return (
			<StyledMyAwaitHandleWrap themeColor={themeColor[themeColorCurrentIndex]}>
				<div className="title-box">
					<h2>待办事项</h2>
					<span className="btn-create" onClick={(e: unknown) => { this.cerateMatter() }}>新建待办</span>
				</div>
				{/* 待办事项 */}
				<StyledMatterWrap themeColor={themeColor[themeColorCurrentIndex]}>
					{/* 每项事项 */}
					{
						this.matterListRender(matterList)
					}
				</StyledMatterWrap>
				<div className="title-box">
					<h2>已办事项</h2>
				</div>
				{/* 完成事项 */}
				<StyledMatterWrap themeColor={themeColor[themeColorCurrentIndex]}>
					{/* 每项事项 */}
					{
						this.matterListRender(doneMatterList)
					}
				</StyledMatterWrap>
				{/* 新建待办弹窗 */}
				<Modal
					title={popTile}
					visible={isPopShow}
					cancelText="取消"
					okText="创建"
					destroyOnClose={true}
					footer={null}
					onCancel={_ => { this.clickCancel() }}
				>
					<CpnRocCreateMatterCont
						propClickCancel={() => { this.clickCancel() }}
						propClickOk={(urgentState: string, text: string, isEdit: boolean) => { this.clickOk(urgentState, text, isEdit) }}
						matterName={matterName}
						urgentColor={urgentColor}
						matterList={this.props.matterList}
						doneMatterList={this.props.doneMatterList}
						currentEditIndex={this.state.currentEditIndex}
						themeColor={themeColor[themeColorCurrentIndex]}
					/>
				</Modal>
				<Modal
					title={"删除"}
					visible={isDelete}
					cancelText="取消"
					okText="确定"
					width={400}
					footer={null}
					onCancel={_ => { this.clickCancelDel() }}
					className="del-pop"
				>
					<StyledDelPopWrap themeColor={themeColor[themeColorCurrentIndex]}>
						<div className="del-pop-cont">
							<ExclamationCircleOutlined className="icon-del" />
							<p className="text">是否删除事项？</p>
						</div>
						<div className="btn-box">
							<span className="btn-del cancel" onClick={() => { this.clickCancelDel() }}>取消</span>
							<span className="btn-del ok" onClick={() => { this.clickOkDel() }}>删除</span>
						</div>
					</StyledDelPopWrap>
				</Modal>
			</StyledMyAwaitHandleWrap>
		)
	}
}

const mapStateToProps = (state: TypeML) => {
	return {
		matterList: state.matterList,
		doneMatterList: state.doneMatterList,
		themeColor: state.themeColor,
		themeColorCurrentIndex: state.themeColorCurrentIndex
	}
}
const mapDispatchToProps = (dispatch: any) => {
	return {
		changeMatterList(matterList: IMatterItem[]): void {
			dispatch(actionChangeMatterList(matterList))
		},
		changeDoneMatterList(doneMatterList: IMatterItem[]): void {
			dispatch(actionChangeDoneMatterList(doneMatterList))
		}
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(RocMyAwaitHandle)