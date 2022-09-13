import { VIDEO_Details_ACTIONS } from "./videoDetails.types";

const initialState = {
	videoDetailsData: {
		videoDetailsInfo: null,
		recommendedVideos: [],
	},
	isLoading: false,
	error: null,
};
export const videoDetailsReducer = (state = initialState, action) => {
	switch (action.type) {
		case VIDEO_Details_ACTIONS.FETCH_VIDEO_Details_START:
			return { ...state, isLoading: true };
		case VIDEO_Details_ACTIONS.FETCH_VIDEO_Details_SUCCESS:
			return { ...state, videoDetailsData: action.payload, isLoading: false };
		case VIDEO_Details_ACTIONS.FETCH_VIDEO_Details_FAILED:
			return {
				...state,
				isLoading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};

