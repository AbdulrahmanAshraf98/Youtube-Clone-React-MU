import { Stack } from "@mui/material";
import React from "react";
import { categories } from "../../Utils/constant/constant";
const selectedCategory = "New";
const Sidebar = () => {
	return (
		<Stack
			direction="row"
			sx={{
				overflowY: "auto",
				height: { xs: "auto", md: "95%" },
				flexDirection: { md: "column" },
			}}>
			{categories.map((category) => (
				<button
					key={category.name}
					className="category-btn"
					style={{
						background: category.name === selectedCategory && "#FC1503",
						color: "#fff",
					}}>
					<span
						style={{
							color: category.name === selectedCategory ? "#fff" : "red",
							paddingRight: "15px",
						}}>
						{category.icon}
					</span>
					<span
						style={{
							opacity: category.name === selectedCategory ? "1" : "0.8",
						}}>
						{category.name}
					</span>
				</button>
			))}
		</Stack>
	);
};

export default Sidebar;
