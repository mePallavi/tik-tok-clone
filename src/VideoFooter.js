import React from "react";
import './VideoFooter.css';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Ticker from 'react-ticker';

function VideoFooter({channel, caption, song})
{
    return (
        <div className="videoFooter">

            <div className="videoFooter__text">
                <h3>@{channel}</h3>
                <p>{caption}</p>

                <div className="videoFooter__ticker">
                    <MusicNoteIcon className="videoFooter__icon"/>
                    {/*render props */}
                    <Ticker mode="smooth">
                        {({index}) => (
                            <>
                            <p>{song}</p>
                            </>
                        )}
                    </Ticker>
                </div>                
            </div>

            <img className="videoFooter__record" src="https://static.thenounproject.com/png/934821-200.png" alt=""></img>
        </div>
    )
}

export default VideoFooter;