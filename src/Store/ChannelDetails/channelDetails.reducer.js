import { SET_CHANNEL_DETAILS } from "./channelDetails.types";

const initialState = {
	channelDetailsData: {
		channelInfo: null,
		channelVideos: [],
	},
};
export const channelDetailsReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_CHANNEL_DETAILS.SET_CHANNEL_DETAILS:
			return { ...state, channelDetailsData: action.payload };
		default:
			return state;
	}
};
