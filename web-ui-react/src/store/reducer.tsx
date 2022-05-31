
import { IMatterItem } from "../pages/home/c-pages/my-await-handle";
export type TypeML = {
	matterList: IMatterItem[],
	doneMatterList: IMatterItem[],
	themeColor: string[],
	themeColorCurrentIndex: number
}
let defaultState: TypeML
defaultState = {
	matterList: [],
	doneMatterList: [],
	themeColor: ["#f5222d", "#ffbb96", "#bae637", "#08979c", "#096dd9", "#c41d7f"],
	themeColorCurrentIndex: 0
}

function reducer(state = defaultState, action: { type: string, [propName: string]: any }): TypeML {
	switch (action.type) {
		case "CHANGR_MATTER_LIST":
			return { ...state, matterList: action.matterList };
		case "CHANGR_DONE_MATTER_LIST":
			return { ...state, doneMatterList: action.doneMatterList };
		case "CHANGR_THEME_INDEX":
			return { ...state, themeColorCurrentIndex: action.index };
		default:
			return state;
	}
}

export default reducer;