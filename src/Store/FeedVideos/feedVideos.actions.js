import { fetchDataFromApi } from "../../Utils/fetchFromApi";
import { createActions } from "../../Utils/Reducer/reducer.utilis";
import { FEED_VIDEOS_ACTIONS } from "./feedVideos.types";
export const fetchFeedVideosStart = () =>
	createActions(FEED_VIDEOS_ACTIONS.FETCH_FEED_VIDEOS_START, null);
export const fetchFeedVideosSuccess = (channelData) =>
	createActions(FEED_VIDEOS_ACTIONS.FETCH_FEED_VIDEOS_SUCCESS, channelData);
export const fetchFeedVideosFailed = (error) =>
	createActions(FEED_VIDEOS_ACTIONS.FETCH_FEED_VIDEOS_FAILED, error);
export const fetchFeedVideos = (selectedCategory) => async (dispatch) => {
	dispatch(fetchFeedVideosStart());
	try {
		const data = await fetchDataFromApi(
			`search?q=${selectedCategory}&part=snippet`,
		);
		dispatch(fetchFeedVideosSuccess(data.items));
	} catch (error) {
		dispatch(fetchFeedVideosFailed(error));
	}
};
