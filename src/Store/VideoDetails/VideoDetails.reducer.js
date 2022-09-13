import { VIDEO_Details_ACTIONS } from "./videoDetails.types";

const initialState = {
	videoDetailsData: {
		videoDetailsInfo: null,
		recommendedVideos: [],
	},
};
export const videoDetailsReducer = (state = initialState, action) => {
	switch (action.type) {
		case VIDEO_Details_ACTIONS.SET_VIDEO_Details:
			return { ...state, videoDetailsData: action.payload };
		default:
			return state;
	}
};
