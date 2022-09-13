import { FEED_VIDEOS_ACTIONS } from "./feedVideos.types";

const initialState = {
	feedVideosData: [],
	isLoading: false,
	error: null,
};
export const feedVideosReducer = (state = initialState, action) => {
	switch (action.type) {
		case FEED_VIDEOS_ACTIONS.FETCH_FEED_VIDEOS_START:
			return { ...state, isLoading: true };
		case FEED_VIDEOS_ACTIONS.FETCH_FEED_VIDEOS_SUCCESS:
			return { ...state, feedVideosData: action.payload, isLoading: false };
		case FEED_VIDEOS_ACTIONS.FETCH_FEED_VIDEOS_FAILED:
			return {
				...state,
				isLoading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};
