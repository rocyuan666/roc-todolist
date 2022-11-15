import { IMatterItem } from "../pages/home/c-pages/my-await-handle";

import { getUserInfo } from "../api/user";

export const actionChangeMatterList: (matterList: IMatterItem[]) => { type: string; [propName: string]: any } = (matterList) => {
  return {
    type: "CHANGR_MATTER_LIST",
    matterList,
  };
};

export const actionChangeDoneMatterList: (doneMatterList: IMatterItem[]) => { type: string; [propName: string]: any } = (doneMatterList) => {
  return {
    type: "CHANGR_DONE_MATTER_LIST",
    doneMatterList,
  };
};

export const actionChangeThemeIndex: (index: number) => { type: string; [propName: string]: any } = (index) => {
  return {
    type: "CHANGR_THEME_INDEX",
    index,
  };
};

export const actionChangeUserInfo: (userInfo: any) => { type: string; userInfo: any } = (userInfo) => {
  return {
    type: "CHANGE_USER_INFO",
    userInfo,
  };
};

// redux-thunk 中间件
export const actionSetUserInfo = () => {
  return (dispatch: any) => {
    getUserInfo().then((res: any) => {
      dispatch(actionChangeUserInfo(res.data));
    });
  };
};
