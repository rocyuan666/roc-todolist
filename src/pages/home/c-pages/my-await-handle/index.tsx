import React, { PureComponent } from 'react';
import classnames from "classnames";

import { TypeML } from "../../../../store/reducer";
import { actionChangeMatterList } from "../../../../store/actions";

import { StyledMyAwaitHandleWrap, StyledMatterWrap } from "./styled";

import { Modal } from "antd";
import { FormOutlined, DeleteOutlined, CheckOutlined, ExclamationCircleOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import CpnRocCreateMatterCont from "./c-cpns/create-matter-cont";
import CpmRocNonePage from "../../../../components/none-page";

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
	isPopShow: boolean,
	popTile: string,
	matterName: string,
	urgentColor: string
}

class RocMyAwaitHandle extends PureComponent<IProps, IState, IMatterItem> {
	constructor(props: IProps) {
		super(props)
		this.state = {
			matterList: [],
			isPopShow: false,
			popTile: "",
			matterName: "",
			urgentColor: ""
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
			
		} else {
			// 新建
			newMatterList.unshift(newMatterItem)
			this.props.changeMatterList(newMatterList)
			this.setState({
				isPopShow: false
			})
		}
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
	// 编辑事项
	handleEdit(index: number) {
		this.setState({
			popTile: "修改待办事项",
			isPopShow: true,
			urgentColor: this.props.matterList[index].urgentState,
			matterName: this.props.matterList[index].text
		})
	}
	// 删除事项
	handleDelete(index: number) {
		const that = this;
		console.log("删除事项", index)
		Modal.confirm({
			title: '删除事项',
			icon: <ExclamationCircleOutlined />,
			content: '您确定要删除此事项？',
			okText: '确认',
			cancelText: '取消',
			onOk() {
				const newMatterList = [...that.props.matterList]
				newMatterList.splice(index, 1)
				that.props.changeMatterList(newMatterList)
			}
		});
	}
	// 事项列表渲染
	matterListRender(matterList: IMatterItem[]) {
		if (matterList.length) {
			return (
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
								{
									!matterItem.state &&
									<FormOutlined onClick={() => { this.handleEdit(matterIndex) }} className="icon-edit" />
								}
								<DeleteOutlined onClick={() => { this.handleDelete(matterIndex) }} className="icon-delete" />
							</div>
						</div>
					)
				})
			)
		} else {
			return <CpmRocNonePage />
		}
	}
	// 渲染
	render() {
		const { isPopShow, popTile, matterName, urgentColor } = this.state;
		const { matterList } = this.props;
		return (
			<StyledMyAwaitHandleWrap>
				<div className="title-box">
					<h2>我的待办</h2>
					<span className="btn-create" onClick={(e: unknown) => { this.cerateMatter() }}>新建待办</span>
				</div>
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
					/>
				</Modal>
				{/* 事项 */}
				<StyledMatterWrap>
					{/* 每项事项 */}
					{
						this.matterListRender(matterList)
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