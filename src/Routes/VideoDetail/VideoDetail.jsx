import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { fetchDataFromApi } from "../../Utils/fetchFromApi";
import Videos from "../../Components/Videos/Videos";

const VideoDetail = () => {
	const [videoDetail, setVideoDetail] = useState(null);
	const [recommendedVideos, setRecommendedVideos] = useState([]);
	const { id } = useParams();
	const getVideoData = async () => {
		const videoDetailData = await fetchDataFromApi(
			`videos?part=snippet,statistics&id=${id}`,
		);
		const recommendedVideosData = await fetchDataFromApi(
			`search?part=snippet&relatedToVideoId=${id}&type=video`,
		);
		setVideoDetail(videoDetailData.items[0]);
		setRecommendedVideos(recommendedVideosData.items);
	};
	useEffect(() => {
		getVideoData();
		console.log(recommendedVideos);
	}, [id]);

	return (
		<Box minHeight="95vh">
			<Stack direction={{ xs: "column", md: "row" }}>
				<Box flex={{ xs: 1, md: 3 }} px={{ md: 2 }}>
					<Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
						<ReactPlayer
							url={`https://www.youtube.com/watch?v=${id}`}
							className="react-player"
							controls
						/>
						{videoDetail && (
							<>
								<Typography color="#fff" variant="h5" fontWight="bold" p={2}>
									{videoDetail.snippet.title}
								</Typography>
								<Stack
									direction="row"
									justifyContent="space-between"
									sx={{ color: "#fff", py: 1, px: 2 }}>
									<Link to={`/channel/${videoDetail.snippet.channelId}`}>
										<Typography
											variant={{ sm: "subtitle1", md: "h6" }}
											color="#fff">
											{videoDetail.snippet.channelTitle}
											<CheckCircle
												sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
											/>
										</Typography>
									</Link>
									<Stack direction="row" gap={2} alignItems="center">
										<Typography variant="body1" sx={{ opacity: 0.7 }}>
											{(+videoDetail.statistics.viewCount).toLocaleString()}
											views
										</Typography>
										<Typography variant="body1" sx={{ opacity: 0.7 }}>
											{(+videoDetail.statistics.likeCount).toLocaleString()}
											Likes
										</Typography>
									</Stack>
								</Stack>
							</>
						)}
					</Box>
				</Box>
				<Box
					flex={{ xs: 1, md: 1 }}
					px={2}
					py={{ xs: 1, md: 5 }}
					justifyContent="center"
					alignItems="center">
					{recommendedVideos && (
						<Videos
							videos={recommendedVideos.slice(1, 10)}
							direction={{ xs: "row", md: "column" }}
							videoItemWidth={{ xs: "100%", sm: "320px" }}
						/>
					)}
				</Box>
			</Stack>
		</Box>
	);
};

export default VideoDetail;
