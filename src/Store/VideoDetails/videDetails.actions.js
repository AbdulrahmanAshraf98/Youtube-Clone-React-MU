import { createActions } from "../../Utils/Reducer/reducer.utilis";
import { VIDEO_Details_ACTIONS } from "./videoDetails.types";

export const setVideoDetails = (payload) =>
	createActions(VIDEO_Details_ACTIONS.SET_VIDEO_Details, payload);
