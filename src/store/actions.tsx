
import { IMatterItem } from "../pages/home/c-pages/my-await-handle";

export const actionChangeMatterList: (matterList: IMatterItem[]) => { type: string, [propName: string]: any }
	= (matterList) => {
		return {
			type: "CHANGR_MATTER_LIST",
			matterList
		}
	}