import { Box, Typography } from "@mui/material";
import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Videos from "../../Components/Videos/Videos";
import { setSearchVideosResult } from "../../Store/SearchFeed/searchFeed.actions";
import { searchFeedVideosSelector } from "../../Store/SearchFeed/searchFeed.selector";
import { fetchDataFromApi } from "../../Utils/fetchFromApi";

const SearchFeed = () => {
	const videos = useSelector(searchFeedVideosSelector);
	const { searchTerm } = useParams();
	const dispatch = useDispatch();
	const getVideosData = useCallback(async () => {
		try {
			const data = await fetchDataFromApi(
				`search?q=${searchTerm}&part=snippet`,
			);

			dispatch(setSearchVideosResult(data.items));
		} catch (error) {
			console.log(error.message);
		}
	}, [searchTerm]);
	useEffect(() => {
		getVideosData();
	}, [getVideosData]);
	return (
		<Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
			<Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "#fff" }}>
				Search results for{" "}
				<span style={{ color: "#F31503" }}>{searchTerm}</span>Videos
			</Typography>
			<Videos videos={videos} />
		</Box>
	);
};

export default SearchFeed;
