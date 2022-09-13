import { combineReducers } from "redux";
import { channelDetailsReducer } from "./ChannelDetails/channelDetails.reducer";
import { feedVideosReducer } from "./FeedVideos/feedVideos.reducer";
import { searchFeedReducer } from "./SearchFeed/searchFeed.reducer";
import { videoDetailsReducer } from "./VideoDetails/VideoDetails.reducer";

export const rootReducer = combineReducers({
	feedVideos: feedVideosReducer,
	channelDetails: channelDetailsReducer,
	searchVideos: searchFeedReducer,
	videoDetails: videoDetailsReducer,
});
