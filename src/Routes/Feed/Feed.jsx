import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Videos from "../../Components/Videos/Videos";
import { setFeedVideos } from "../../Store/FeedVideos/FeedVideos.actions";
import { feedVideosSelector } from "../../Store/FeedVideos/FeedVideos.selector";
import { fetchDataFromApi } from "../../Utils/fetchFromApi";

const Feed = () => {
	const dispatch = useDispatch();
	const [selectedCategory, setSelectedCategory] = useState("New");
	const videos = useSelector(feedVideosSelector);
	const getVideosData = async () => {
		try {
			const data = await fetchDataFromApi(
				`search?q=${selectedCategory}&part=snippet`,
			);
			dispatch(setFeedVideos(data.items));
		} catch (error) {
			console.log(error.message);
		}
	};
	useEffect(() => {
		getVideosData();
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
				{videos.length && <Videos videos={videos} />}
			</Box>
		</Stack>
	);
};

export default Feed;
