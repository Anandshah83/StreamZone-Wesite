import { Stack, Box } from "@mui/material";

import ChannelCard from "./ChannelCard";
import VideoCard from "./VideoCard";


const Videos = ({ videos, error }) => {
  if (!videos) return <div style={{ padding: 16 }}>Loading videos…</div>;

  const renderErrorBanner = () => {
    if (!error) return null;
    return (
      <div style={{ padding: 16, background: '#ffeaea', border: '1px solid #ffb3b3', marginBottom: 16 }}>
        <strong>Unable to fetch videos from the API.</strong>
        <div>Status: {error.status}</div>
        <div>Message: {error.message}</div>
        <div>Common causes: missing/invalid API key, request limit exceeded, or wrong host.</div>
      </div>
    );
  };

  if (videos.length === 0) return <div style={{ padding: 16 }}>No videos found. Check your API key and the console for errors.</div>;

  return (
    <>
      {renderErrorBanner()}
      <Stack style={{ padding: '30px' }} direction="row" flexWrap="wrap" justifyContent="start" alignItems="start" gap={2}>
        {videos.map((item, idx) => (
          <Box key={idx}>
            {item.id.videoId && <VideoCard video={item} />}
            {item.id.channelId && <ChannelCard channelDetail={item} />}
          </Box>
        ))}
      </Stack>
    </>
  );
};

export default Videos