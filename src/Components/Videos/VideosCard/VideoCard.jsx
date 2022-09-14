import { CheckCircle } from "@mui/icons-material";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./VideoCard.style.css";
const VideoCard = ({
	video: {
		id: { videoId },
		snippet,
	},
}) => {
	const navigate = useNavigate();

	return (
		<Card
			sx={{
				borderRadius: "0",
				backgroundColor: "#1e1e1e",
			}}>
			<Card sx={{ cursor: "pointer", backgroundColor: "transparent" }}>
				<CardMedia
					image={snippet.thumbnails.high.url}
					alt={snippet.title}
					sx={{ width: { xs: "130%", sm: "400px" }, height: 180 }}
					onClick={() => navigate(`/video/${videoId}`)}
				/>
				<CardContent
					sx={{
						height: "106px",
						borderRadius: "0",
					}}>
					<Link to={`/video/${videoId}`}>
						<Typography variant="subtitle1" color="#fff" fontWeight="bold">
							{snippet.title.slice(0, 60)}
						</Typography>
					</Link>
					<Link to={`/channel/${snippet.channelId}`}>
						<Typography variant="subtitle1" color="gray" fontWeight="bold">
							{snippet.channelTitle.slice(0, 60)}
							<CheckCircle
								sx={{ fontSize: "12px", color: "grey", ml: "5px" }}
							/>
						</Typography>
					</Link>
				</CardContent>
			</Card>
		</Card>
	);
};

export default VideoCard;
