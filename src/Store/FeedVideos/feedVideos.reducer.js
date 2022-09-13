import { FEED_VIDEOS_ACTIONS } from "./feedVideos.types";

const initialState = {
	feedVideosData: [],
};
export const feedVideosReducer = (state = initialState, action) => {
	switch (action.type) {
		case FEED_VIDEOS_ACTIONS.SET_VIDEOS:
			return { ...state, feedVideosData: action.payload };
		default:
			return state;
	}
};
