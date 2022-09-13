import { createSelector } from "reselect";

const selectChannelDetailsReducer = (state) => state.channelDetails;
export const channelDetailsDataSelector = createSelector(
	[selectChannelDetailsReducer],
	(channelDetailsSelector) => channelDetailsSelector.channelDetailsData,
);
export const selectChannelDetailsISloading = createSelector(
	[selectChannelDetailsReducer],
	(channelDetailsSelector) => channelDetailsSelector.isLoading,
);
export const selectChannelDetailsError = createSelector(
	[selectChannelDetailsReducer],
	(channelDetailsSelector) => channelDetailsSelector.error,
);