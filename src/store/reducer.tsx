
import { IMatterItem } from "../pages/home/c-pages/my-await-handle";
export type TypeML = {
	matterList: IMatterItem[]
}
let defaultState: TypeML
defaultState = {
	matterList: [
		{ urgentState: "#ffccc7", state: false, text: "我是事项" },
		{ urgentState: "#ff7875", state: false, text: "我是事项我是事项" },
		{ urgentState: "#f5222d", state: false, text: "我是事项我是事项我是事项" },
		{ urgentState: "#a8071a", state: false, text: "我是事项我是事项我是事项我是事项" },
	]
}

function reducer(state = defaultState, action: { type: string, [propName: string]: any }): TypeML {
	switch (action.type) {
		case "CHANGR_MATTER_LIST":
			return { ...state, matterList: action.matterList };
		default:
			return state;
	}
}

export default reducer;