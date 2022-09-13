import { createSelector } from "reselect";

const selectFeedVideosReducer = (state) => state.feedVideos;
export const feedVideosSelector = createSelector(
	[selectFeedVideosReducer],
	(feedVideos) => feedVideos.feedVideosData,
);
export const selectFeedVideosLoading = createSelector(
	[selectFeedVideosReducer],
	(feedVideos) => feedVideos.isLoading,
);
export const selectFeedVideosError = createSelector(
	[selectFeedVideosReducer],
	(feedVideos) => feedVideos.error,
);