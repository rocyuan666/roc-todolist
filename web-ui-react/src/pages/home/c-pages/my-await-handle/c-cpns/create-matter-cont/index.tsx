import React, { PureComponent } from "react";
import classNames from "classnames";

import { StyledCreateMatterContWrap } from "./styled";

import { message } from "antd";

interface Istate {
  matterItem: any;
  isEdit: boolean;
}

interface Iprops {
  propClickCancel: () => void;
  propClickOk: (matterItem: any, isEdit: boolean) => void;
  urgentColor: string;
  urgentColorList: string[];
  name: string;
  themeColor: string;
  currentMatter: any;
}

export default class CpnRocCreateMatterCont extends PureComponent<Iprops, Istate> {
  constructor(props: Iprops) {
    super(props);
    this.state = {
      isEdit: false,
      matterItem: {
        name: "",
        level: 0,
      },
    };
  }
  componentDidMount() {
    if (this.props.currentMatter.id) {
      // 有id 是修改 回显
      this.setState({
        isEdit: true,
        matterItem: this.props.currentMatter,
      });
    }
  }
  // 处理点击取消
  handleClickCancel() {
    this.props.propClickCancel();
  }
  // 处理点击创建 | 修改
  handleClickOk() {
    const { matterItem, isEdit } = this.state;
    if (matterItem.name.trim() === "") return message.error("事项名称不能为空！");
    this.props.propClickOk(matterItem, isEdit);
  }
  // 处理修改优先级改变
  changeUrgentIndex(index: number) {
    this.setState({
      matterItem: { ...this.state.matterItem, level: index },
    });
  }
  // 修改事项内容
  changeMatterCont(e: any) {
    this.setState({
      matterItem: { ...this.state.matterItem, name: e.target.value },
    });
  }
  render() {
    const { matterItem, isEdit } = this.state;
    const { urgentColorList } = this.props;
    return (
      <StyledCreateMatterContWrap themeColor={this.props.themeColor}>
        <div className="inpt-box">
          <label className="name" htmlFor="matter-name">
            事项名称:
          </label>
          <input
            className="value"
            onChange={(e) => {
              this.changeMatterCont(e);
            }}
            value={matterItem.name}
            id="matter-name"
            type="text"
          />
        </div>
        <div className="inpt-box">
          <label className="name" htmlFor="matter-urgent">
            事项优先级:
          </label>
          <div className="value-box">
            {urgentColorList.map((item: string, index: number) => {
              return (
                <span
                  key={index}
                  onClick={() => {
                    this.changeUrgentIndex(index);
                  }}
                  className={classNames({
                    active: index === matterItem.level,
                  })}
                  style={{ backgroundColor: item }}
                >
                  <em></em>
                </span>
              );
            })}
          </div>
        </div>
        <div className="btn-box">
          <span
            className="cancel"
            onClick={() => {
              this.handleClickCancel();
            }}
          >
            取消
          </span>
          <span
            className="ok"
            onClick={() => {
              this.handleClickOk();
            }}
          >
            {isEdit ? "修改" : "新建"}
          </span>
        </div>
      </StyledCreateMatterContWrap>
    );
  }
}
