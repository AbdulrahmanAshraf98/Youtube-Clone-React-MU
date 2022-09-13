import { SEARCH_FEED_ACTIONS } from "./searchFeed.types";

const initialState = {
	searchResultVideos: [],
};
export const searchFeedReducer = (state = initialState, action) => {
	switch (action.type) {
		case SEARCH_FEED_ACTIONS.SET_SEARCH_FEED_RESULT:
			return { ...state, searchResultVideos: action.payload };
		default:
			return state;
	}
};
