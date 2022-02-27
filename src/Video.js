import React, { useRef, useState } from "react";
import './Video.css';
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";

function Video({url, channel, caption, song, likes, comments, shares})
{
    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null);

    /*play is applied to the current reference */
    const onVideoPress = () => {
        if(playing) {
            videoRef.current.pause();
            setPlaying(false);
        }
        else {
            videoRef.current.play();
            setPlaying(true);
        }
    };

    return (
        <div className="video">
            <video
                className="video__player" loop
                onClick={onVideoPress}
                ref = {videoRef}  /*attach reference to videoRef*/
                src={url}
                width="100%" height="100%">
            </video>
            <VideoFooter  
                channel={channel} 
                caption={caption}
                song={song}
            />
            <VideoSidebar 
                likes={likes}
                comments={comments}
                shares={shares}
            />
        </div>
    );
}

export default Video;

