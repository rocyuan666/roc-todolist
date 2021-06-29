
import { IMatterItem } from "../pages/home/c-pages/my-await-handle";
export type TypeML = {
	matterList: IMatterItem[]
}
let defaultState: TypeML
defaultState = {
	matterList: []
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