import React from 'react';
import VideoList from './VideoList';
/*
동영상은 소스 URL을 VideoPlayer 컴포넌트의 iframe 태그로 전달하여 재생됩니다. 
각각의 동영상은 고유 ID를 가지며, https://www.youtube.com/embed/고유ID와 같은 URL로 재생됩니다. 
이것은 또한 stateless 컴포넌트이므로 예제 데이터를 사용하여 빌드할 수 있습니다.

fakeData를 불러온 후, 하나를 선택해서 VideoPlayer로 전달하세요.
전달한 비디오를 재생하고 제목과 설명을 표시할 VideoPlayer를 업데이트하세요.
VideoPlayer에 대한 테스트가 통과하는지 확인하고, fakeData를 걷어냅니다.
*/
const VideoPlayer = ({ video }) => {
  if (!video) {
    return <div>비디오를 선택하세요</div>
  }

  return (
    <div className="video-player">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item"
          src={`https://www.youtube.com/embed/${video.id.videoId}`} allowFullScreen></iframe>
      </div>
      {/* <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item"
          src={`https://www.youtube.com/embed/${video.id.videoId}`} ></iframe>
      </div> */}
      <div className="video-player-details">
        <h3>{video.snippet.title}</h3>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  )
}
/*
<div className="video-player-details">
  <h3>Video Title</h3>
  <div>Video Description</div>
</div>
*/
export default VideoPlayer;
