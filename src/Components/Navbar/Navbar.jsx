import React from "react";
import { Box, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../../Utils/constant/constant";
import SearchBar from "../SearchBar/SearchBar";
const Navbar = () => {
	return (
		<Box sx={{ backgroundColor: "#000" }}>
			<Stack
				direction="row"
				alignItems="center"
				p={2}
				sx={{
					position: "sticky",
					top: "0",
					justifyContent: "space-between",
				}}>
				<Link to="/" style={{ display: "flex", alignItems: "center" }}>
					<img src={logo} alt="logo" height={45} />
				</Link>
				<SearchBar />
			</Stack>
		</Box>
	);
};

export default Navbar;
