import React, { PureComponent, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { Modal, Upload, Input, message, Avatar } from "antd";
import { ImportOutlined, LoadingOutlined, PlusOutlined, UserOutlined } from "@ant-design/icons";
import type { RcFile, UploadFile, UploadProps } from "antd/es/upload/interface";
import type { UploadChangeParam } from "antd/es/upload";

import { actionSetUserInfo } from "../../../../store/actions";

import cfg from "../../../../common/config";
import { TuserInfo, TypeML } from "../../../../store/reducer";
import { editUserInfo } from "../../../../api/user";

import { StyledSiderMenuWrap, StyledHeaderInfoWrap, StyledNavWrap } from "./styled";

import { CopyOutlined, SettingOutlined, InfoCircleOutlined } from "@ant-design/icons";

function HeaderInfoBox(props: any) {
  // 头像上传
  const baseURL = process.env.NODE_ENV === "development" ? cfg.devBaseUrl : cfg.proBaseUrl;
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>(props.userInfo.headimg);
  useEffect(() => {
    setImageUrl(props.userInfo.headimg);
  }, [props.userInfo.headimg]);
  const beforeUpload = (file: RcFile) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("您只能上传JPG/PNG文件！");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("图像必须小于2MB！");
    }
    return isJpgOrPng && isLt2M;
  };
  const handleChange: UploadProps["onChange"] = (info: UploadChangeParam<UploadFile>) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      setLoading(false);
      setImageUrl(info.file.response.data);
    }
  };
  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );
  type Theaders = {
    token: any;
  };
  const headers: Theaders = {
    token: localStorage.getItem("token"),
  };
  function HeadImg(): any {
    if (props.userInfo.headimg) {
      return <Avatar src={props.userInfo.headimg} />;
    } else {
      return <Avatar style={{ color: "#f56a00", backgroundColor: "#fde3cf" }}>{props.userInfo.nickname.substring(0, 1).toUpperCase()}</Avatar>;
    }
  }
  // 修改用户信息
  const [nickname, setNickname] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    setNickname(props.userInfo.nickname);
  }, [props.userInfo.nickname]);
  function changeNickname(value: string) {
    setNickname(value);
  }
  function handleEditUserInfo() {
    setIsModalOpen(true);
  }
  async function handleOk() {
    const sendObj: { nickname: string; headimg: string } = {
      nickname: nickname,
      headimg: imageUrl,
    };
    await editUserInfo(sendObj);
    props.setUserInfo();
    setIsModalOpen(false);
  }
  function handleCancel() {
    setIsModalOpen(false);
  }
  // 退出
  function handleLogout() {
    Modal.confirm({
      title: "你确定要退出吗?",
      closable: true,
      okText: "确定",
      cancelText: "取消",
      onOk() {
        localStorage.removeItem("token");
        window.location.href = "#/login";
      },
    });
  }
  return (
    <StyledHeaderInfoWrap>
      <p className="logo">roc-todoList</p>
      <div className="user-info-box">
        <div className="user-info-main" onClick={handleEditUserInfo}>
          <HeadImg></HeadImg>
          <p className="user-name">{props.userInfo.nickname}</p>
        </div>
        <ImportOutlined onClick={handleLogout} className="roc-logout" />
      </div>
      {/* 修改用户信息 */}
      <Modal title="修改个人信息" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} okText="提交" cancelText="取消">
        <div style={{ marginBottom: "10px" }}>
          <p style={{ marginBottom: "6px" }}>上传头像</p>
          <Upload
            name="file"
            listType="picture-card"
            className="avatar-uploader"
            showUploadList={false}
            action={`${baseURL}/upload`}
            headers={headers}
            beforeUpload={beforeUpload}
            onChange={handleChange}
          >
            {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: "100%" }} /> : uploadButton}
          </Upload>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <p style={{ marginBottom: "6px" }}>昵称</p>
          <Input
            placeholder="请输入昵称"
            value={nickname}
            onChange={(e) => {
              changeNickname(e.target.value);
            }}
            prefix={<UserOutlined />}
          />
        </div>
      </Modal>
    </StyledHeaderInfoWrap>
  );
}

interface IProps {
  themeColor: string[];
  themeColorCurrentIndex: number;
  userInfo: TuserInfo;
  setUserInfo: any;
}

class CpnRocSiderMenu extends PureComponent<IProps> {
  componentDidMount() {
    this.props.setUserInfo();
  }
  render() {
    const { themeColor, themeColorCurrentIndex } = this.props;
    return (
      <StyledSiderMenuWrap>
        <HeaderInfoBox userInfo={this.props.userInfo} setUserInfo={this.props.setUserInfo}></HeaderInfoBox>
        <StyledNavWrap themeColor={themeColor[themeColorCurrentIndex]}>
          <NavLink className="btn-nav" to="/home/my-await-handle">
            <CopyOutlined className="btn-icon" />
            <span>我的事项</span>
          </NavLink>
          {/* 预留 */}
          {/* <NavLink className="btn-nav" to="/home/data-charts">
						<ProjectOutlined className="btn-icon" />
						<span>数据统计</span>
					</NavLink> */}
          <NavLink className="btn-nav" to="/home/setup">
            <SettingOutlined className="btn-icon" />
            <span>设置</span>
          </NavLink>
          <NavLink className="btn-nav" to="/home/about">
            <InfoCircleOutlined className="btn-icon" />
            <span>关于</span>
          </NavLink>
        </StyledNavWrap>
      </StyledSiderMenuWrap>
    );
  }
}
const mapStateToProps = (state: TypeML) => {
  return {
    themeColor: state.themeColor,
    themeColorCurrentIndex: state.themeColorCurrentIndex,
    userInfo: state.userInfo,
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    setUserInfo: () => {
      dispatch(actionSetUserInfo());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CpnRocSiderMenu);
