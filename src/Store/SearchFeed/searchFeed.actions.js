import { createActions } from "../../Utils/Reducer/reducer.utilis";
import { SEARCH_FEED_ACTIONS } from "./searchFeed.types";

export const setSearchVideosResult = (searchResults) =>
	createActions(SEARCH_FEED_ACTIONS.SET_SEARCH_FEED_RESULT, searchResults);
