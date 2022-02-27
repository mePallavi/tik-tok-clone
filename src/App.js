import React from "react";
import Video from "./Video.js";
import "./App.css";
import video from "./videos/tayvideo.mp4";

function App() {
  return (
    //bem convention
    <div className="app">      
      <div className="app__videos">
        <Video 
          url="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
          channel="fluffmaster"
          caption="The fluff's revenge"
          song="The fluff audio"
          likes={661}
          comments={247}
          shares={85}
        />
        <Video 
          url={video}
          channel="fluffmaster"
          caption="The fluff's revenge"
          song="The fluff audio"
          likes={500}
          comments={250}
          shares={111}
        />
        <Video 
          url="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
          channel="fluffmaster"
          caption="The fluff's revenge"
          song="The fluff audio"
          likes={200}
          comments={97}
          shares={57}
        />
        <Video 
          url="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
          channel="fluffmaster"
          caption="The fluff's revenge"
          song="The fluff audio"
          likes={400}
          comments={120}
          shares={73}
        />
      </div>
    </div>
  );
}

export default App;
