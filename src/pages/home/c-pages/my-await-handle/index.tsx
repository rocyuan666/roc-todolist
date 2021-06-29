import React, { PureComponent } from 'react';
import classnames from "classnames";

import { TypeML } from "../../../../store/reducer";
import { actionChangeMatterList } from "../../../../store/actions";

import { StyledMyAwaitHandleWrap, StyledMatterWrap } from "./styled";

import { Modal } from "antd";
import { FormOutlined, DeleteOutlined, CheckOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import CpnRocCreateMatterCont from "./c-cpns/create-matter-cont";

interface IProps {
	matterList: IMatterItem[],
	changeMatterList: (matterList: IMatterItem[]) => void,
	[props: string]: any
}

export interface IMatterItem {
	urgentState: string,
	state: boolean,
	text: string
}

interface IState {
	matterList: IMatterItem[],
	isPopShow: boolean
}

class RocMyAwaitHandle extends PureComponent<IProps, IState, IMatterItem> {
	constructor(props: IProps) {
		super(props)
		this.state = {
			matterList: [],
			isPopShow: false
		}
	}
	// 点击了确定
	clickOk(urgentState: string, text: string) {
		const newMatterItem: IMatterItem = {
			urgentState,
			state: false,
			text
		}
		const newMatterList: IMatterItem[] = [...this.props.matterList];
		newMatterList.unshift(newMatterItem)
		this.props.changeMatterList(newMatterList)
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
			isPopShow: true
		})
	}
	// 处理事项状态改变
	handleMatterStateChange(index: number, state: boolean): void {
		const newMatterList: IMatterItem[] = [...this.props.matterList];
		const editMatterList: IMatterItem[] = newMatterList.map((mItem: IMatterItem, mIndex: number) => {
			if (index === mIndex) {
				mItem.state = !state
				return mItem
			} else {
				return mItem
			}
		})
		this.props.changeMatterList(editMatterList);
	}
	render() {
		const { isPopShow } = this.state;
		const { matterList } = this.props;
		return (
			<StyledMyAwaitHandleWrap>
				<div className="title-box">
					<h2>我的待办</h2>
					<span className="btn-create" onClick={(e: unknown) => { this.cerateMatter() }}>新建待办</span>
				</div>
				{/* 新建待办弹窗 */}
				<Modal
					title="新建待办事项"
					visible={isPopShow}
					cancelText="取消"
					okText="创建"
					destroyOnClose={true}
					footer={null}
					onCancel={_ => { this.clickCancel() }}
				>
					<CpnRocCreateMatterCont
						propClickCancel={() => { this.clickCancel() }}
						propClickOk={(urgentState: string, text: string) => { this.clickOk(urgentState, text) }}
					/>
				</Modal>
				{/* 事项 */}
				<StyledMatterWrap>
					{/* 每项事项 */}
					{
						matterList.map((matterItem: IMatterItem, matterIndex) => {
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

const mapStateToProps = (state: TypeML) => {
	return {
		matterList: state.matterList
	}
}
const mapDispatchToProps = (dispatch: any) => {
	return {
		changeMatterList(matterList: IMatterItem[]): void {
			dispatch(actionChangeMatterList(matterList))
		}
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(RocMyAwaitHandle)