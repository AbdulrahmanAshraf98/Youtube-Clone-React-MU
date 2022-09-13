import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Error from "../../Components/Error/Error";
import Loading from "../../Components/Loading/Loading";
import Videos from "../../Components/Videos/Videos";
import { fetchSearchFeed } from "../../Store/SearchFeed/searchFeed.actions";
import {
	searchFeedVideosSelector,
	selectSearchFeedVideosLoading,
	selectSearchFeedVideosError,
} from "../../Store/SearchFeed/searchFeed.selector";

const SearchFeed = () => {
	const { searchTerm } = useParams();
	const videos = useSelector(searchFeedVideosSelector);
	const loading = useSelector(selectSearchFeedVideosLoading);
	const error = useSelector(selectSearchFeedVideosError);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchSearchFeed(searchTerm));
	}, [searchTerm]);
	return (
		<Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
			<Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "#fff" }}>
				Search results for{" "}
				<span style={{ color: "#F31503" }}>{searchTerm}</span>Videos
			</Typography>
			{loading && !error && <Loading />}
			{!loading && videos && !error && <Videos videos={videos} />}
			{error && <Error error={error} />}
		</Box>
	);
};

export default SearchFeed;
