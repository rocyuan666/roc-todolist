import React, { PureComponent } from "react";
import classnames from "classnames";

import { TypeML } from "../../../../store/reducer";
import { actionChangeMatterList, actionChangeDoneMatterList } from "../../../../store/actions";
import { StyledMyAwaitHandleWrap, StyledMatterWrap, StyledDelPopWrap } from "./styled";

import { Modal } from "antd";
import { FormOutlined, DeleteOutlined, CheckOutlined, ExclamationCircleOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import CpnRocCreateMatterCont from "./c-cpns/create-matter-cont";
import CpmRocNonePage from "../../../../components/none-page";

import { add, list, del, edit } from "../../../../api/matter";

interface IProps {
  matterList: IMatterItem[];
  changeMatterList: (matterList: IMatterItem[]) => void;
  doneMatterList: IMatterItem[];
  changeDoneMatterList: (matterList: IMatterItem[]) => void;
  themeColor: string[];
  themeColorCurrentIndex: number;
}

export interface IMatterItem {
  status: number;
  level: number;
  name: string;
  addtime?: string;
}

interface IState {
  urgentColorList: string[];
  isPopShow: boolean;
  isDelete: boolean;
  popTile: string;
  name: string;
  level: number;
  urgentColor: string;
  currentEditIndex: number;
  delCurrentMatter: any;
  currentMatter: any;
}

class RocMyAwaitHandle extends PureComponent<IProps, IState, IMatterItem> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      urgentColorList: ["#389e0d", "#13c2c2", "#faad14", "#a8071a"],
      isPopShow: false,
      isDelete: false,
      popTile: "",
      name: "",
      level: 0,
      urgentColor: "",
      currentEditIndex: -1,
      delCurrentMatter: {},
      currentMatter: {},
    };
  }
  // 初始化列表数据
  dataInit() {
    this.getDataList();
    this.getDoneDataList();
  }
  // 获取待办事项
  async getDataList() {
    const res = await list({ status: 0 });
    const matterList = res.data;
    this.props.changeMatterList(matterList);
  }
  // 获取已办事项
  async getDoneDataList() {
    const res = await list({ status: 1 });
    const doneMatterList = res.data;
    this.props.changeDoneMatterList(doneMatterList);
  }
  async componentDidMount() {
    this.dataInit();
  }
  // 点击了确定
  async clickOk(matterItem: any, isEdit: boolean) {
    if (isEdit) {
      // 修改
      await edit(matterItem);
      this.dataInit();
    } else {
      // 新建
      const send = {
        name: matterItem.name,
        level: matterItem.level,
      };
      await add(send);
      this.dataInit();
    }
    this.setState({
      isPopShow: false,
    });
  }
  // 点击了取消
  clickCancel() {
    this.setState({
      isPopShow: false,
    });
  }
  // 新建事项
  cerateMatter() {
    this.setState({
      popTile: "新建待办事项",
      isPopShow: true,
      urgentColor: "",
      name: "",
      currentMatter: {},
    });
  }
  // 处理事项状态改变
  async handleMatterStateChange(matterItem: any) {
    await edit({
      ...matterItem,
      status: matterItem.status === 0 ? 1 : 0,
    });
    this.dataInit();
  }
  // 编辑事项
  handleEdit(matterItem: any) {
    this.setState({
      popTile: "修改待办事项",
      isPopShow: true,
      currentMatter: matterItem,
    });
  }
  // 事项列表渲染
  matterListRender(matterList: IMatterItem[]) {
    if (matterList.length) {
      return matterList.map((matterItem: IMatterItem, matterIndex: number) => {
        return (
          <div
            className={classnames({
              "matter-item": true,
              active: matterItem.status,
            })}
            key={matterIndex}
          >
            <div className="left-box">
              <span
                className="line"
                style={{
                  backgroundColor: this.state.urgentColorList[matterItem.level],
                }}
              >
                事项优先级标识
              </span>
              {/* 选项 */}
              <div className="option">
                <div
                  className={classnames({
                    "radio-box": true,
                    active: matterItem.status === 1,
                  })}
                  onClick={(e: unknown) => {
                    this.handleMatterStateChange(matterItem);
                  }}
                >
                  <CheckOutlined className="icon-yes" />
                </div>
              </div>
              {/* 事项 */}
              <p className="text">{matterItem.name}</p>
              {/* 添加时间 */}
              {/* <p>{matterItem.addtime}</p> */}
            </div>
            <div className="right-box">
              {!matterItem.status && (
                <FormOutlined
                  onClick={() => {
                    this.handleEdit(matterItem);
                  }}
                  className="icon-edit"
                />
              )}
              <DeleteOutlined
                onClick={() => {
                  this.handleDelete(matterItem);
                }}
                className="icon-delete"
              />
            </div>
          </div>
        );
      });
    } else {
      return <CpmRocNonePage height={200} />;
    }
  }
  // 删除事项
  handleDelete(matterItem: IMatterItem) {
    this.setState({
      isDelete: true,
      delCurrentMatter: matterItem,
    });
  }
  // 取消删除
  clickCancelDel() {
    this.setState({
      isDelete: false,
    });
  }
  // 确定删除
  async clickOkDel() {
    const { delCurrentMatter } = this.state;
    await del({ id: delCurrentMatter.id });
    this.dataInit();
    this.setState({
      isDelete: false,
    });
  }
  // 渲染
  render() {
    const { isPopShow, isDelete, popTile, name, urgentColor, urgentColorList, currentMatter } = this.state;
    const { matterList, doneMatterList, themeColor, themeColorCurrentIndex } = this.props;
    return (
      <StyledMyAwaitHandleWrap themeColor={themeColor[themeColorCurrentIndex]}>
        <div className="title-box">
          <h2>待办事项</h2>
          <span
            className="btn-create"
            onClick={(e: unknown) => {
              this.cerateMatter();
            }}
          >
            新建待办
          </span>
        </div>
        {/* 待办事项 */}
        <StyledMatterWrap themeColor={themeColor[themeColorCurrentIndex]}>
          {/* 每项事项 */}
          {this.matterListRender(matterList)}
        </StyledMatterWrap>
        <div className="title-box">
          <h2>已办事项</h2>
        </div>
        {/* 完成事项 */}
        <StyledMatterWrap themeColor={themeColor[themeColorCurrentIndex]}>
          {/* 每项事项 */}
          {this.matterListRender(doneMatterList)}
        </StyledMatterWrap>
        {/* 新建待办弹窗 */}
        <Modal
          title={popTile}
          visible={isPopShow}
          cancelText="取消"
          okText="创建"
          destroyOnClose={true}
          footer={null}
          onCancel={(_) => {
            this.clickCancel();
          }}
        >
          <CpnRocCreateMatterCont
            propClickCancel={() => {
              this.clickCancel();
            }}
            propClickOk={(matterItem: any, isEdit: boolean) => {
              this.clickOk(matterItem, isEdit);
            }}
            name={name}
            currentMatter={currentMatter}
            urgentColor={urgentColor}
            urgentColorList={urgentColorList}
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
          onCancel={(_) => {
            this.clickCancelDel();
          }}
          className="del-pop"
        >
          <StyledDelPopWrap themeColor={themeColor[themeColorCurrentIndex]}>
            <div className="del-pop-cont">
              <ExclamationCircleOutlined className="icon-del" />
              <p className="text">是否删除事项？</p>
            </div>
            <div className="btn-box">
              <span
                className="btn-del cancel"
                onClick={() => {
                  this.clickCancelDel();
                }}
              >
                取消
              </span>
              <span
                className="btn-del ok"
                onClick={() => {
                  this.clickOkDel();
                }}
              >
                删除
              </span>
            </div>
          </StyledDelPopWrap>
        </Modal>
      </StyledMyAwaitHandleWrap>
    );
  }
}

const mapStateToProps = (state: TypeML) => {
  return {
    matterList: state.matterList,
    doneMatterList: state.doneMatterList,
    themeColor: state.themeColor,
    themeColorCurrentIndex: state.themeColorCurrentIndex,
    userInfo: state.userInfo,
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    changeMatterList(matterList: IMatterItem[]): void {
      dispatch(actionChangeMatterList(matterList));
    },
    changeDoneMatterList(doneMatterList: IMatterItem[]): void {
      dispatch(actionChangeDoneMatterList(doneMatterList));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(RocMyAwaitHandle);
