import React from "react";
import "./App.css";
import SubmitTweet from "./components/SubmitTweet";
import Tweets from "./components/Tweets";

function App() {
  return (
    <div className="App">
      <h1>Griffin, Nate, and Evan's Tweet of the Day</h1>
      <SubmitTweet></SubmitTweet>
      <Tweets></Tweets>
    </div>
  );
}

export default App;
