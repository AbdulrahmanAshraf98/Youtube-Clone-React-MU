import { fetchDataFromApi } from "../../Utils/fetchFromApi";
import { createActions } from "../../Utils/Reducer/reducer.utilis";
import { SET_CHANNEL_DETAILS } from "./channelDetails.types";

export const fetchChannelDetailsStart = () =>
	createActions(SET_CHANNEL_DETAILS.FETCH_CHANNEL_DETAILS_START, null);
export const fetchChannelDetailsSuccess = (channelData) =>
	createActions(SET_CHANNEL_DETAILS.FETCH_CHANNEL_DETAILS_SUCCESS, channelData);
export const fetchChannelDetailsFailed = (error) =>
	createActions(SET_CHANNEL_DETAILS.FETCH_CHANNEL_DETAILS_FAILED, error);
export const fetchChannelDetails = (id) => async (dispatch) => {
	dispatch(fetchChannelDetailsStart());
	try {
		const channelData = await fetchDataFromApi(
			`channels?part=snippet&id=${id}`,
		);
		const VideosData = await fetchDataFromApi(
			`search?channelId=${id}&part=snippet&order=date`,
		);
		dispatch(
			fetchChannelDetailsSuccess({
				channelInfo: channelData.items[0],
				channelVideos: VideosData.items,
			}),
		);
	} catch (error) {
		dispatch(fetchChannelDetailsFailed(error));
	}
};
