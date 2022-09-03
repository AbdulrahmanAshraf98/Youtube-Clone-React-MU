import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import ChannelDetail from "./Routes/ChannelDetail/ChannelDetail";
import Feed from "./Routes/Feed/Feed";
import SearchFeed from "./Routes/SearchFeed/SearchFeed";
import VideoDetail from "./Routes/VideoDetail/VideoDetail";

function App() {
	return (
		<Box sx={{ backgroundColor: "#000", height: "100vh", color: "white" }}>
			<Navbar />
			<Routes>
				<Route index path="/" element={<Feed />} />
				<Route index path="/video/:id" element={<VideoDetail />} />
				<Route index path="/channel/:id" element={<ChannelDetail />} />
				<Route index path="/search/:searchTerm" element={<SearchFeed />} />
			</Routes>
		</Box>
	);
}

export default App;
