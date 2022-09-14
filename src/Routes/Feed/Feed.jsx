import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Error from "../../Components/Error/Error";
import Loading from "../../Components/Loading/Loading";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Videos from "../../Components/Videos/Videos";
import { fetchFeedVideos } from "../../Store/FeedVideos/feedVideos.actions";
import {
	feedVideosSelector,
	selectFeedVideosError,
	selectFeedVideosLoading,
} from "../../Store/FeedVideos/feedVideos.selector";

const Feed = () => {
	const dispatch = useDispatch();
	const [selectedCategory, setSelectedCategory] = useState("New");
	const videos = useSelector(feedVideosSelector);
	const isLoading = useSelector(selectFeedVideosLoading);
	const error = useSelector(selectFeedVideosError);
	useEffect(() => {
		dispatch(fetchFeedVideos(selectedCategory));
	}, [selectedCategory]);
	return (
		<Stack sx={{ flexDirection: { xs: "column", md: "row" } }}>
			<Stack>
				<Box
					sx={{
						height: { xs: "auto", md: "92vh" },
						borderRight: "1px solid #3d3d3d",
						px: { xs: 0, md: 2 },
					}}>
					<Sidebar
						selectedCategory={selectedCategory}
						setSelectedCategory={setSelectedCategory}
					/>
					<Typography
						variant="body2"
						sx={{
							display: { xs: "none", md: "block" },
							mt: 1.5,
							color: "#fff",
						}}>
						CopyRight 2022
					</Typography>
				</Box>
			</Stack>
			<Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
				<Typography
					variant="h4"
					fontWeight="bold"
					mb={2}
					sx={{ color: "#fff" }}>
					{selectedCategory} <span style={{ color: "#F31503" }}>Videos</span>
				</Typography>
				{isLoading && !error && <Loading />}
				{!isLoading && videos.length !== 0 && !error && (
					<Videos
						videos={videos}
						videoItemWidth={{
							xs: "100%",
							sm: "47%",
							md: "30%",
							lg: "350px",
							xl: "320px",
						}}
					/>
				)}
				{error && <Error error={error}></Error>}
			</Box>
		</Stack>
	);
};

export default Feed;
