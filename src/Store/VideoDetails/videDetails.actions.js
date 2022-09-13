import { fetchDataFromApi } from "../../Utils/fetchFromApi";
import { createActions } from "../../Utils/Reducer/reducer.utilis";
import { VIDEO_Details_ACTIONS } from "./videoDetails.types";
export const fetchVideoDetailsStart = () =>
	createActions(VIDEO_Details_ACTIONS.FETCH_VIDEO_Details_START, null);
export const fetchVideoDetailsSuccess = (videoDetails) =>
	createActions(
		VIDEO_Details_ACTIONS.FETCH_VIDEO_Details_SUCCESS,
		videoDetails,
	);
export const fetchVideoDetailsFailed = (error) =>
	createActions(VIDEO_Details_ACTIONS.FETCH_VIDEO_Details_FAILED, error);
export const fetchSearchFeed = (id) => async (dispatch) => {
	dispatch(fetchVideoDetailsStart());
	try {
		const videoDetailData = await fetchDataFromApi(
			`videos?part=snippet,statistics&id=${id}`,
		);
		const recommendedVideosData = await fetchDataFromApi(
			`search?part=snippet&relatedToVideoId=${id}&type=video`,
		);
		dispatch(
			fetchVideoDetailsSuccess({
				videoDetailsInfo: videoDetailData.items[0],
				recommendedVideos: recommendedVideosData.items,
			}),
		);
	} catch (error) {
		dispatch(fetchVideoDetailsSuccess(error));
	}
};
