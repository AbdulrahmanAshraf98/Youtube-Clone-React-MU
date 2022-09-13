import React from "react";
import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import LoadingPage from "./Components/LoadingPage/LoadingPage";
const Navbar = React.lazy(() => import("./Components/Navbar/Navbar"));
const Feed = React.lazy(() => import("./Routes/Feed/Feed"));
const SearchFeed = React.lazy(() => import("./Routes/SearchFeed/SearchFeed"));
const VideoDetail = React.lazy(() =>
	import("./Routes/VideoDetail/VideoDetail"),
);
const ChannelDetail = React.lazy(() =>
	import("./Routes/ChannelDetail/ChannelDetail"),
);
function App() {
	return (
		<Box sx={{ backgroundColor: "#000", height: "100%", color: "white" }}>
			<React.Suspense fallback={<LoadingPage />}>
				<Navbar />
				<Routes>
					<Route index path="/" element={<Feed />} />
					<Route path="/video/:id" element={<VideoDetail />} />
					<Route path="/channel/:id" element={<ChannelDetail />} />
					<Route path="/search/:searchTerm" element={<SearchFeed />} />
				</Routes>
			</React.Suspense>
		</Box>
	);
}

export default App;
