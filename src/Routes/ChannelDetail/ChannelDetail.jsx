import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import Videos from "../../Components/Videos/Videos";
import ChannelCard from "../../Components/Videos/ChannelCard/ChannelCard";
import { fetchDataFromApi } from "../../Utils/fetchFromApi";
const ChannelDetail = () => {
	const { id } = useParams();
	const [channelDetail, setChannelDetail] = useState(null);
	const [channelVideos, setChannelVideos] = useState([]);
	const getChannel = useCallback(async () => {
		const channelData = await fetchDataFromApi(
			`channels?part=snippet&id=${id}`,
		);
		const VideosData = await fetchDataFromApi(
			`search?channelId=${id}&part=snippet&order=date`,
		);
		setChannelDetail(channelData.items[0]);
		setChannelVideos(VideosData.items);
	}, []);
	useEffect(() => {
		getChannel();
	}, [id]);

	return (
		<Box minHeight="95vh">
			<Box>
				<div
					style={{ backgroundColor: "red", zIndex: 10, height: "300px" }}></div>
				{channelDetail && (
					<ChannelCard channelDetail={channelDetail} marginTop="-110px" />
				)}
			</Box>
			<Box display="flex" p="2">
				<Videos
					videos={channelVideos}
					justifyContent={{ xs: "center" }}
					videoItemWidth={{ xs: "100%", sm: "45%", md: "30%", lg: "320px" }}
				/>
			</Box>
		</Box>
	);
};

export default ChannelDetail;
