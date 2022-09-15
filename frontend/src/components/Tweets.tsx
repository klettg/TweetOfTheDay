import React, { useEffect } from "react";
import { TwitterTweetEmbed } from "react-twitter-embed";
import axios from "axios";

const Tweets = () => {
  const [data, setData] = React.useState([]);
  const sampleData = ["933354946111705097", "1570042112347099137"];

  useEffect(() => {
    axios.get("/api/TweetApi").then((res) => {
      console.log(res.data);
      setData(res.data);
      //  setData(res.data);
      console.log("hello!");
      console.log(data);
      //setData([])
    });
  });

  return (
    <>
      {sampleData.map((tweet) => (
        <>
          <h2>Tuesday, September 14th:</h2>
          <TwitterTweetEmbed
            tweetId={tweet}
            options={{ width: 550, align: "center" }}
          />
        </>
      ))}
    </>
  );
};

export default Tweets;
