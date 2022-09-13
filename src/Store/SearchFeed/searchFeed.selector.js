import { createSelector } from "reselect";

const selectSearchFeedVideoReducer = (state) => state.searchVideos;
export const searchFeedVideosSelector = createSelector(
	[selectSearchFeedVideoReducer],
	(searchVideos) => searchVideos.searchResultVideos,
);
