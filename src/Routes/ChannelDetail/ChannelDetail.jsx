import React, { useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import Videos from "../../Components/Videos/Videos";
import ChannelCard from "../../Components/Videos/ChannelCard/ChannelCard";
import { fetchDataFromApi } from "../../Utils/fetchFromApi";
import { useDispatch, useSelector } from "react-redux";
import { setChannelData } from "../../Store/ChannelDetails/channelDetails.action";
import { channelDetailsDataSelector } from "../../Store/ChannelDetails/channelDetails.selector";
const ChannelDetail = () => {
	const { id } = useParams();
	const channelDetailData = useSelector(channelDetailsDataSelector);

	const { channelInfo, channelVideos } = channelDetailData;
	console.log(channelDetailData);
	const dispatch = useDispatch();
	const getChannel = useCallback(async () => {
		const channelData = await fetchDataFromApi(
			`channels?part=snippet&id=${id}`,
		);
		const VideosData = await fetchDataFromApi(
			`search?channelId=${id}&part=snippet&order=date`,
		);
		dispatch(
			setChannelData({
				channelInfo: channelData.items[0],
				channelVideos: VideosData.items,
			}),
		);
	}, []);
	useEffect(() => {
		getChannel();
	}, [id]);

	return (
		channelInfo &&
		channelVideos && (
			<Box minHeight="95vh">
				<Box>
					<div
						style={{
							backgroundColor: "red",
							zIndex: 10,
							height: "300px",
						}}></div>
					{channelInfo && (
						<ChannelCard channelDetail={channelInfo} marginTop="-110px" />
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
		)
	);
};

export default ChannelDetail;
