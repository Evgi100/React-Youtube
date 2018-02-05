import React from 'react'

const VideoListItem = ({ video,onVideoClick}) => {
    // {video} is a es6 deconstructing same as const video=props.video
    const videoImg = video.snippet.thumbnails.default.url;
    return (
        <li onClick={()=>onVideoClick(video)} className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={videoImg} />
                </div>

                <div className="media-body">
                    <div className="media-heading">{video.snippet.title}</div>
                </div>
            </div>
        </li>
    );
};

export default VideoListItem