import { CheckCircle } from "@mui/icons-material";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./VideoCard.style.css";
const VideoCard = ({
	video: {
		id: { videoId },
		snippet,
	},
}) => {
	return (
		<Card
			sx={{
				boxShadow: "none",
				borderRadius: "0",
			}}>
			<Link to={`/video/${videoId}`}>
				<CardMedia
					image={snippet.thumbnails.high.url}
					alt={snippet.title}
					sx={{ width: "100%", height: 180 }}
				/>
				<CardContent sx={{ backgroundColor: "#1e1e1e", height: "106px" }}>
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
			</Link>
		</Card>
	);
};

export default VideoCard;
