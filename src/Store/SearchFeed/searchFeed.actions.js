import { fetchDataFromApi } from "../../Utils/fetchFromApi";
import { createActions } from "../../Utils/Reducer/reducer.utilis";
import { SEARCH_FEED_ACTIONS } from "./searchFeed.types";

export const fetchSearchFeedStart = () =>
	createActions(SEARCH_FEED_ACTIONS.FETCH_SEARCH_FEED_VIDEOS_START, null);
export const fetchSearchFeedSuccess = (channelData) =>
	createActions(
		SEARCH_FEED_ACTIONS.FETCH_SEARCH_FEED_VIDEOS_SUCCESS,
		channelData,
	);
export const fetchSearchFeedFailed = (error) =>
	createActions(SEARCH_FEED_ACTIONS.FETCH_SEARCH_FEED_VIDEOS_FAILED, error);
export const fetchSearchFeed = (searchTerm) => async (dispatch) => {
	dispatch(fetchSearchFeedStart());
	try {
		const data = await fetchDataFromApi(`search?q=${searchTerm}&part=snippet`);
		dispatch(fetchSearchFeedSuccess(data.items));
	} catch (error) {
		dispatch(fetchSearchFeedFailed(error));
	}
};
