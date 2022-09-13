import { createSelector } from "reselect";

const selectChannelDetailsReducer = (state) => state.channelDetails;
export const channelDetailsDataSelector = createSelector(
	[selectChannelDetailsReducer],
	(channelDetailsSelector) => channelDetailsSelector.channelDetailsData,
);
