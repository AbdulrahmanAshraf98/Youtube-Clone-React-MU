import { Box, Stack } from "@mui/material";
import React from "react";
import ChannelCard from "./ChannelCard/ChannelCard";
import VideoCard from "./VideosCard/VideoCard";

const Videos = ({
	videos,
	justifyContent = { xs: "space-between", md: "flex-start" },
	videoItemWidth = { xs: "100%", sm: "45%", lg: "320px" },
}) => {
	return (
		<Stack direction={"row"} flexWrap="wrap" gap={4} sx={{ justifyContent }}>
			{videos.map(
				(item, index) =>
					(item.id.videoId || item.id.channelId) && (
						<Box key={index} sx={{ width: videoItemWidth }}>
							{item.id.videoId && <VideoCard video={item} />}
							{item.id.channelId && <ChannelCard channelDetail={item} />}
						</Box>
					),
			)}
		</Stack>
	);
};

export default Videos;
