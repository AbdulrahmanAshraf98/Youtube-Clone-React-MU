import { createActions } from "../../Utils/Reducer/reducer.utilis";
import { SET_CHANNEL_DETAILS } from "./channelDetails.types";

export const setChannelData = (channelData) =>
	createActions(SET_CHANNEL_DETAILS.SET_CHANNEL_DETAILS, channelData);
