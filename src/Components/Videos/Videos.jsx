import { Box, Stack } from "@mui/material";
import React from "react";
import ChannelCard from "./ChannelCard/ChannelCard";
import VideoCard from "./VideosCard/VideoCard";

const Videos = ({ videos }) => {
	return (
		<Stack
			direction={"row"}
			flexWrap="wrap"
			gap={4}
			sx={{ justifyContent: { xs: "space-between", md: "flex-start" } }}>
			{videos.map(
				(item, index) =>
					item.id.videoId && (
						<Box
							key={index}
							sx={{ width: { xs: "100%", sm: "45%", md: "30%", xl: "320px" } }}>
							{item.id.videoId && <VideoCard video={item} />}
							{item.id.channelId && <ChannelCard channelDetail={item} />}
						</Box>
					),
			)}
		</Stack>
	);
};

export default Videos;
