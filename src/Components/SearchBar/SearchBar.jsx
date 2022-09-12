import React, { useCallback, useState } from "react";
import { IconButton, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Search } from "@mui/icons-material";

const SearchBar = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const navigate = useNavigate();
	const handleFormSubmit = (event) => {
		event.preventDefault();
		if (!searchTerm) return;
		navigate(`/search/${searchTerm}`);
		setSearchTerm("");
	};
	const onChangeHandler = useCallback((event) => {
		setSearchTerm(event.target.value);
	}, []);

	return (
		<Paper
			component="form"
			onSubmit={handleFormSubmit}
			sx={{
				borderRadius: 20,
				border: "1px solid #e3e3e3",
				pl: 2,
				boxShadow: "none",
				mr: { sm: 5 },
			}}>
			<input
				className="search-bar"
				placeholder="Search...."
				value={searchTerm}
				onChange={onChangeHandler}
			/>
			<IconButton type="submit" sx={{ p: "10px", color: "red" }}>
				<Search />
			</IconButton>
		</Paper>
	);
};

export default SearchBar;
