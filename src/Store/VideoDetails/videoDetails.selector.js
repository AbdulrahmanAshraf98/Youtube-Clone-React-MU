import { createSelector } from "reselect";

const selectVideoDetailsReducer = (state) => state.videoDetails;
export const videoDetailsSelector = createSelector(
	[selectVideoDetailsReducer],
	(videoDetails) => videoDetails.videoDetailsData,
);

export const selectVideoDetailsLoading = createSelector(
	[selectVideoDetailsReducer],
	(videoDetails) => videoDetails.isLoading,
);
export const selectVideoDetailsError = createSelector(
	[selectVideoDetailsReducer],
	(videoDetails) => videoDetails.error,
);