import HomeIcon from '@mui/icons-material/Home';


export const categories = [
  { name: 'Popular', icon: <HomeIcon />, },
  { name: 'ReactJS', icon: <HomeIcon />, },
  { name: 'NextJS', icon: <HomeIcon />, },
  { name: 'Angular', icon: <HomeIcon />, },
  { name: 'Flutter', icon: <HomeIcon />, },
  { name: 'Vue', icon: <HomeIcon />, },
  { name: 'JQuery', icon: <HomeIcon />, },
  { name: 'OpenUI5', icon: <HomeIcon />, },
  { name: 'Bootstrap', icon: <HomeIcon />, },
  { name: 'Express JS', icon: <HomeIcon />, },
  { name: 'Django', icon: <HomeIcon />, },
  { name: 'Python', icon: <HomeIcon />, },
  { name: 'Golang', icon: <HomeIcon />, },
  { name: 'DevOps', icon: <HomeIcon /> },
];

export const demoThumbnailUrl = 'https://images.template.net/wp-content/uploads/2016/04/27133811/Youtube-Thumbnail1.jpg';
export const demoChannelUrl = '/channel/UCmXmlB4-HJytD7wek0Uo97A';
export const demoVideoUrl = '/video/GDa8kZLNhJ4';
export const demoChannelTitle = 'Lorem ipsum dolor';
export const demoVideoTitle = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ';
export const demoProfilePicture = 'http://dergipark.org.tr/assets/app/images/buddy_sample.png';

// Demo video items (used when the API fails or cannot be called)
export const demoVideoItems = [
  {
    id: { videoId: 'cV2gBU6hKfY' },
    snippet: {
      title: demoVideoTitle,
      channelTitle: demoChannelTitle,
      thumbnails: { high: { url: demoThumbnailUrl } },
    },
  },
  {
    id: { videoId: 'dQw4w9WgXcQ' },
    snippet: {
      title: `${demoVideoTitle} (demo 2)`,
      channelTitle: demoChannelTitle,
      thumbnails: { high: { url: demoThumbnailUrl } },
    },
  },
  {
    id: { videoId: 'M7FIvfx5J10' },
    snippet: {
      title: `${demoVideoTitle} (demo 3)`,
      channelTitle: demoChannelTitle,
      thumbnails: { high: { url: demoThumbnailUrl } },
    },
  },
];