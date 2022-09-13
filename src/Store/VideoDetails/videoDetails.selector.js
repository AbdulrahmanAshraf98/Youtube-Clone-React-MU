import { createSelector } from "reselect";

const selectVideoDetailsReducer = (state) => state.videoDetails;
export const videoDetailsSelector = createSelector(
	[selectVideoDetailsReducer],
	(videoDetails) => videoDetails.videoDetailsData,
);
