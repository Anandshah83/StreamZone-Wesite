import { useState, useEffect } from "react";
import { Typography, Box } from "@mui/material";
import { useParams } from "react-router-dom";

import { fetchFromAPI } from "../utils/FetchFromAPI";
import Videos from "./Videos";


const SearchFeed = () => {
  const [videos, setVideos] = useState(null);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
  }, [searchTerm]);

  return (
    <Box>
      <Typography variant="h4" alignItems={"center"} fontWeight={900} color="black" mb={3} ml={{ sm: "100px" }}>
         Results for <span style={{ color: "DodgerBlue" }}>{searchTerm}</span> videos
      </Typography>

  
        <Videos videos={videos} />

    </Box>
  );
};

export default SearchFeed;

