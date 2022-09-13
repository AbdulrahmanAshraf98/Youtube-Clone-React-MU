import { SET_CHANNEL_DETAILS } from "./channelDetails.types";

const initialState = {
	channelDetailsData: {
		channelInfo: null,
		channelVideos: [],
	},
	isLoading: false,
	error: null,
};
export const channelDetailsReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_CHANNEL_DETAILS.FETCH_CHANNEL_DETAILS_START:
			return { ...state, isLoading: true };
		case SET_CHANNEL_DETAILS.FETCH_CHANNEL_DETAILS_SUCCESS:
			return { ...state, channelDetailsData: action.payload, isLoading: false };
		case SET_CHANNEL_DETAILS.FETCH_CHANNEL_DETAILS_FAILED:
			return {
				...state,
				isLoading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};
