import { IMatterItem } from "../pages/home/c-pages/my-await-handle";

export type TuserInfo = {
  id: number;
  nickname: string;
  headimg: string;
  username: string;
  addtime: string;
  edittime: string;
};

export type TypeML = {
  matterList: IMatterItem[];
  doneMatterList: IMatterItem[];
  themeColor: string[];
  themeColorCurrentIndex: number;
  userInfo: TuserInfo;
};
let defaultState: TypeML;
defaultState = {
  matterList: [],
  doneMatterList: [],
  themeColor: ["#f5222d", "#ffbb96", "#bae637", "#08979c", "#096dd9", "#c41d7f"],
  themeColorCurrentIndex: Number(localStorage.getItem("themeColorCurrentIndex")) || 0,
  userInfo: {
    id: 0,
    nickname: "",
    headimg: "",
    username: "",
    addtime: "",
    edittime: "",
  },
};

function reducer(state = defaultState, action: { type: string; [propName: string]: any }): TypeML {
  switch (action.type) {
    case "CHANGR_MATTER_LIST":
      return { ...state, matterList: action.matterList };
    case "CHANGR_DONE_MATTER_LIST":
      return { ...state, doneMatterList: action.doneMatterList };
    case "CHANGR_THEME_INDEX":
      localStorage.setItem("themeColorCurrentIndex", action.index);
      return { ...state, themeColorCurrentIndex: action.index };
    case "CHANGE_USER_INFO":
      return { ...state, userInfo: action.userInfo };
    default:
      return state;
  }
}

export default reducer;
