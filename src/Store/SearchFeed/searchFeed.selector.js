import { createSelector } from "reselect";

const selectSearchFeedVideoReducer = (state) => state.searchVideos;
export const searchFeedVideosSelector = createSelector(
	[selectSearchFeedVideoReducer],
	(searchVideos) => searchVideos.searchResultVideos,
);
export const selectSearchFeedVideosLoading = createSelector(
	[selectSearchFeedVideoReducer],
	(searchVideos) => searchVideos.isLoading,
);
export const selectSearchFeedVideosError = createSelector(
	[selectSearchFeedVideoReducer],
	(searchVideos) => searchVideos.error,
);