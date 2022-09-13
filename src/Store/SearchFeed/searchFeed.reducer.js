import { SEARCH_FEED_ACTIONS } from "./searchFeed.types";

const initialState = {
	searchResultVideos: [],
};
export const searchFeedReducer = (state = initialState, action) => {
	switch (action.type) {
		case SEARCH_FEED_ACTIONS.FETCH_SEARCH_FEED_VIDEOS_START:
			return { ...state, isLoading: true };
		case SEARCH_FEED_ACTIONS.FETCH_SEARCH_FEED_VIDEOS_SUCCESS:
			return { ...state, searchResultVideos: action.payload, isLoading: false };
		case SEARCH_FEED_ACTIONS.FETCH_SEARCH_FEED_VIDEOS_FAILED:
			return {
				...state,
				isLoading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};

