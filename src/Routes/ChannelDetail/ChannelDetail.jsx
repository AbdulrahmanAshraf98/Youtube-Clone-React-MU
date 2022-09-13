import React, { useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { Box, CircularProgress } from "@mui/material";
import Videos from "../../Components/Videos/Videos";
import ChannelCard from "../../Components/Videos/ChannelCard/ChannelCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchChannelDetails } from "../../Store/ChannelDetails/channelDetails.action";
import {
	channelDetailsDataSelector,
	selectChannelDetailsError,
	selectChannelDetailsISloading,
} from "../../Store/ChannelDetails/channelDetails.selector";
import Loading from "../../Components/Loading/Loading.jsx";
import Error from "../../Components/Error/Error";
const ChannelDetail = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const channelDetailData = useSelector(channelDetailsDataSelector);
	const { channelInfo, channelVideos } = channelDetailData;
	const isLoading = useSelector(selectChannelDetailsISloading);
	const error = useSelector(selectChannelDetailsError);
	useEffect(() => {
		dispatch(fetchChannelDetails(id));
	}, [id]);

	return (
		<>
			{isLoading && !error && <Loading />}
			{!isLoading && channelDetailData && !error && (
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
			{error && <Error error={error}></Error>}
		</>
	);
};

export default ChannelDetail;
