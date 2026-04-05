import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Videos from './Videos'
import ChannelCard from './ChannelCard'
import { fetchFromAPI } from "../utils/FetchFromAPI";

const ChannelDetail = () => {
  const [videos, setVideos] = useState(null);
  const [videoDetail, setVideoDetail] = useState(null);
  const [channelDetail, setChannelDetail] = useState();


  const { id } = useParams();

  useEffect(() => {
    const fetchResults = async () => {

      const data = await fetchFromAPI(`channels?part=snippet&id=${id}`);

      setChannelDetail(data?.items[0]);

      const videosData = await fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`);

      setVideos(videosData?.items);
    };

    fetchResults();
  }, [id]);


  return (
    <div>
      <div class="w-full bg-cover bg-center" style={{ height: "10rem" }}>
        <div class="flex items-center w-full justify-center h-full  bg-gray-900 bg-opacity-50" style={{ height: "10rem" }}>
          <img src={channelDetail?.brandingSettings?.image?.bannerExternalUrl} style={{ height: "10rem", width: "full" }} />
        </div>
      </div>


      <div class="mt-[-20px] ml-10 flex items-center space-x-4 ">
        <img class="border-4 border-white w-20 h-20 md:w-40 md:h-40 rounded-full" src={channelDetail?.snippet?.thumbnails?.high?.url} alt="" />
        <div class=" mt-4 font-medium text-3xl dark:text-white">
          <div>{channelDetail?.snippet?.title}</div>
          <div class="w-3/5 text-sm text-gray-500 dark:text-gray-400">{channelDetail?.snippet?.description}</div>

          <div className='flex items-center gap-x-3 my-5 sm:mb-0'>
            <div className='flex items-center bg-[#f2f2f2] px-3 py-2 rounded-[10px]'>

              <span className='text-[12.4px] sm:text-[14.4px] text-[#0f0f0f] font-medium tracking-wide'>{channelDetail?.statistics?.subscriberCount}{' Subscribers'}</span>
            </div>
            <span className='text-[12.4px] sm:text-[14.4px] text-[#0f0f0f] font-medium tracking-wide bg-[#f2f2f2] px-3 py-2 rounded-[10px]'>{channelDetail?.statistics?.viewCount}{" Views"}</span>
          </div>
        </div>

      </div>
      <Videos videos={videos} direction="column" />
    </div>

  )
}

export default ChannelDetail