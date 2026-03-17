import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";

import { fetchFromAPI } from "../utils/FetchFromAPI";
import Videos from "./Videos";
import Category from "./Category";
import ChannelDetail from "./ChannelDetail";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("Popular");
  const [videos, setVideos] = useState(null);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    setVideos(null);
    setFetchError(null);

    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => {
        setVideos(data.items);
        setFetchError(data.error);
      });
  }, [selectedCategory]);

  return (
    <>
      <Category selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />

      <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>

        <Box sx={{ height: { sx: "auto", md: "92vh" }, px: { sx: 0, md: 2 } }}>
          <div class="sm:ml-100">

          </div>
        </Box>
        <div className="align-center">

          <Videos videos={videos} error={fetchError} />

        </div>
      </Stack>
    </>
  );
};

export default Feed;