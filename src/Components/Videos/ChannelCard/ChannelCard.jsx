import { CheckCircle } from "@mui/icons-material";
import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const ChannelCard = ({ channelDetail }) => {
	return (
		<Box
			sx={{
				boxShadow: "none",
				borderRadius: "20px",
				display: "flex ",
				alignItems: "center",
				justifyContent: "center",
				width: { xs: "350px", md: "320px" },
				height: "360px",
				margin: "auto",
			}}>
			<Link to={`channel/${channelDetail.id.channelId}`}>
				<CardContent
					sx={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
						color: "#fff",
					}}>
					<CardMedia
						image={channelDetail.snippet.thumbnails.high.url}
						alt={channelDetail.snippet.title}
						sx={{
							borderRadius: "50%",
							width: "180px",
							height: "180px",
							mb: 2,
							border: "1px solid #e3e3e3",
						}}
					/>
					<Typography variant="h6">
						{channelDetail.snippet.title}
						<CheckCircle sx={{ fontSize: "14px", color: "gray", ml: "5px" }} />
					</Typography>
				</CardContent>
			</Link>
		</Box>
	);
};

export default ChannelCard;