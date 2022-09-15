import React from "react";
import "./App.css";
import { TwitterTweetEmbed } from "react-twitter-embed";

function App() {
  return (
    <div className="App">
      <h1>Griffin, Nate, and Evan's Tweet of the Day</h1>
      <h2>Wednesday, September 15th:</h2>
      <TwitterTweetEmbed
        tweetId={"933354946111705097"}
        options={{ width: 550, align: "center" }}
      />
      <h2>Tuesday, September 14th:</h2>
      <TwitterTweetEmbed
        tweetId={"1570042112347099137"}
        options={{ width: 550, align: "center" }}
      />
    </div>
  );
}

export default App;
