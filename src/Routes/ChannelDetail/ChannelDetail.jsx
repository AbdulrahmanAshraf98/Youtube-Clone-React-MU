import React, { useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import Videos from "../../Components/Videos/Videos";
import ChannelCard from "../../Components/Videos/ChannelCard/ChannelCard";
import { fetchDataFromApi } from "../../Utils/fetchFromApi";
import { useDispatch, useSelector } from "react-redux";
import { fetchChannelDetails } from "../../Store/ChannelDetails/channelDetails.action";
import {
	channelDetailsDataSelector,
	selectChannelDetailsISloading,
} from "../../Store/ChannelDetails/channelDetails.selector";
const ChannelDetail = () => {
	const { id } = useParams();
	let isLoading = useSelector(selectChannelDetailsISloading);
	const channelDetailData = useSelector(channelDetailsDataSelector);
	const { channelInfo, channelVideos } = channelDetailData;
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchChannelDetails(id));
	}, [id]);

	return (
		<>
			{isLoading && <Box xs={{ color: "#fff" }}>Loading</Box>}
			{!isLoading && channelDetailData && (
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
							videoItemWidth={{
								xs: "100%",
								sm: "45%",
								md: "30%",
								lg: "320px",
							}}
						/>
					</Box>
				</Box>
			)}
		</>
	);
};

export default ChannelDetail;
