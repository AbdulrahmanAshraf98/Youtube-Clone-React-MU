import { Box } from "@mui/material";
import React from "react";
import { logo } from "../../Utils/constant/constant";

const LoadingPage = () => {
	return (
		<Box
			sx={{
				height: "100vh",
				zIndex: 9999999,
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				backgroundColor: "#000",
			}}>
			<img src={logo} alt="logo" height={100} />
		</Box>
	);
};

export default LoadingPage;
