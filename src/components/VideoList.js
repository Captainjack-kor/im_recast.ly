import React from 'react';
import VideoListEntry from './VideoListEntry';

// 부모 컴포넌트로부터 list를 전달받으면 fakeData는 더이상 필요하지 않습니다
//import { fakeData } from './__test__/fakeData';
//console.log(fakeData)

const VideoList = ({ videos, handleClickEntry }) => {
  if (videos.length === 0) {
    return '비디오 목록이 없습니다'
  }

  return (
    <div className="video-list media">
      {videos.map(video =>
        <VideoListEntry video={video} key={video.etag} handleClick={handleClickEntry} />
      )}
    </div>
  )
};

// {props.videos.map((e) => 
//   <VideoListEntry video = {e} key = {e.id.videoId} />
// )}
export default VideoList;
