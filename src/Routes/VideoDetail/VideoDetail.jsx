import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { fetchDataFromApi } from "../../Utils/fetchFromApi";
import Videos from "../../Components/Videos/Videos";
import { useDispatch, useSelector } from "react-redux";
import {
	fetchSearchFeed,
	setVideoDetails,
} from "../../Store/VideoDetails/videDetails.actions";
import {
	videoDetailsSelector,
	selectVideoDetailsLoading,
	selectVideoDetailsError,
} from "../../Store/VideoDetails/videoDetails.selector";
import Loading from "../../Components/Loading/Loading";
import Error from "../../Components/Error/Error";

const VideoDetail = () => {
	const dispatch = useDispatch();
	const { id } = useParams();
	const videoDetailsData = useSelector(videoDetailsSelector);
	const { videoDetailsInfo, recommendedVideos } = videoDetailsData;
	const loading = useSelector(selectVideoDetailsLoading);
	const error = useSelector(selectVideoDetailsError);
	useEffect(() => {
		dispatch(fetchSearchFeed(id));
	}, [id]);

	return (
		<>
			{loading && !error && <Loading />}
			{!loading && videoDetailsData && (
				<Box minHeight="95vh">
					<Stack direction={{ xs: "column", md: "row" }}>
						<Box flex={{ xs: 1, md: 3 }} px={{ md: 2 }}>
							<Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
								<ReactPlayer
									url={`https://www.youtube.com/watch?v=${id}`}
									className="react-player"
									controls
								/>
								{videoDetailsInfo && (
									<>
										<Typography
											color="#fff"
											variant="h5"
											fontWight="bold"
											p={2}>
											{videoDetailsInfo.snippet.title}
										</Typography>
										<Stack
											direction="row"
											justifyContent="space-between"
											sx={{ color: "#fff", py: 1, px: 2 }}>
											<Link
												to={`/channel/${videoDetailsInfo.snippet.channelId}`}>
												<Typography
													variant={{ sm: "subtitle1", md: "h6" }}
													color="#fff">
													{videoDetailsInfo.snippet.channelTitle}
													<CheckCircle
														sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
													/>
												</Typography>
											</Link>
											<Stack direction="row" gap={2} alignItems="center">
												<Typography variant="body1" sx={{ opacity: 0.7 }}>
													{(+videoDetailsInfo.statistics
														.viewCount).toLocaleString()}
													views
												</Typography>
												<Typography variant="body1" sx={{ opacity: 0.7 }}>
													{(+videoDetailsInfo.statistics
														.likeCount).toLocaleString()}
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
							px={{ xs: 0, md: 2 }}
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
			)}

			{error && <Error error={error}></Error>}
		</>
	);
};

export default VideoDetail;
