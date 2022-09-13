import { createSelector } from "reselect";

const selectFeedVideosReducer = (state) => state.feedVideos;
export const feedVideosSelector = createSelector(
	[selectFeedVideosReducer],
	(feedVideos) => feedVideos.feedVideosData,
);
