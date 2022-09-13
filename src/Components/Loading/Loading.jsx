import { Box, CircularProgress } from "@mui/material";
import React from "react";

const Loading = () => {
	return (
		<Box
			sx={{
				height: "92vh",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}>
			<CircularProgress color="secondary" />
		</Box>
	);
};

export default Loading;
