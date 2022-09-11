import { Box, Container } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import ChannelDetail from "./Routes/ChannelDetail/ChannelDetail";
import Feed from "./Routes/Feed/Feed";
import SearchFeed from "./Routes/SearchFeed/SearchFeed";
import VideoDetail from "./Routes/VideoDetail/VideoDetail";

function App() {
	return (
		<Box sx={{ backgroundColor: "#000", height: "100%", color: "white" }}>
			<Navbar />
			<Routes>
				<Route index path="/" element={<Feed />} />
				<Route path="/video/:id" element={<VideoDetail />} />
				<Route path="/channel/:id" element={<ChannelDetail />} />
				<Route path="/search/:searchTerm" element={<SearchFeed />} />
			</Routes>
		</Box>
	);
}

export default App;
