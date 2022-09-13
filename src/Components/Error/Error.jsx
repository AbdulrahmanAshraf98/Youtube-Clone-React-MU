import { ErrorOutlined } from "@mui/icons-material";
import { Box } from "@mui/material";
import React from "react";

const Error = ({ error }) => {
	return (
		<Box
			sx={{
				height: "92vh",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				color: "red",
			}}>
			{error.message}
			<ErrorOutlined />
		</Box>
	);
};

export default Error;
