import { createActions } from "../../Utils/Reducer/reducer.utilis";
import { FEED_VIDEOS_ACTIONS } from "./FeedVideos.types";

export const setFeedVideos = (feedVideos) =>
	createActions(FEED_VIDEOS_ACTIONS.SET_VIDEOS, feedVideos);
