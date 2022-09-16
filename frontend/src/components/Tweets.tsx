import React, { useEffect } from "react";
import { TwitterTweetEmbed } from "react-twitter-embed";
//import axios from "axios";
import db from "../firebaseHelper";
import { collection, getDocs } from "firebase/firestore";

interface Tweet {
  tweetId: string;
  date: string;
}

const Tweets = () => {
  const [data, setData] = React.useState<Tweet[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const sampleData = ["933354946111705097", "1570042112347099137"];

  useEffect(() => {
    setIsLoading(true);
    const fetchTweets = async () => {
      const query = collection(db, "tweets");
      const snapshot = await getDocs(query);
      const docs = snapshot.docs;
      const loadedTweets = docs.map((doc) => {
        const docData = doc.data();
        const tweet: Tweet = {
          tweetId: docData.tweetId,
          date: docData.date.seconds,
        };
        return tweet;
      });
      console.log(loadedTweets);
      setData(loadedTweets);
      setIsLoading(false);
    };

    fetchTweets();
  }, []);

  return (
    <>
      <div>{isLoading && <h2>Loading tweets....</h2>}</div>
      <div>
        {true &&
          data.map((tweet) => (
            <>
              <h2>Tuesday, September 14th:</h2>
              <TwitterTweetEmbed
                tweetId={"933354946111705097"} //{tweet.tweetId}
                options={{ width: 550, align: "center" }}
                key={tweet.tweetId}
              />
            </>
          ))}
        {true &&
          sampleData.map((id) => (
            <>
              <h2>Tuesday, September 14th:</h2>
              <TwitterTweetEmbed
                tweetId={"933354946111705097"} //{tweet.tweetId}
                options={{ width: 550, align: "center" }}
                key={id}
              />
            </>
          ))}
      </div>
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
    </>
  );
};

export default Tweets;
