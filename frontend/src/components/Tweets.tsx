import React, { useEffect } from "react";
import { TwitterTweetEmbed } from "react-twitter-embed";
//import axios from "axios";
import db from "../firebaseHelper";
import { collection, getDocs } from "firebase/firestore";

export interface Tweet {
  tweetId: string;
  date: number;
}

const Tweets = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [totalTweets, setTotalTweets] = React.useState(0);
  const [tweets, setTweets] = React.useState<Tweet[]>([]);

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

      loadedTweets.sort((a, b) => b.date - a.date);

      setTweets(loadedTweets);
      setTotalTweets(loadedTweets.length);
      setIsLoading(false);
    };

    fetchTweets();
  }, []);

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const nth = function (d: number) {
    if (d > 3 && d < 21) return "th";
    switch (d % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  const getFormattedDate = function (seconds: number) {
    const jsDate = new Date(seconds * 1000);
    const dayName = dayNames[jsDate.getDay()];
    const month = monthNames[jsDate.getMonth()];
    const day = jsDate.getDate();
    const dayEnding = nth(day);
    const getFullYear = jsDate.getFullYear();

    return dayName + ", " + month + " " + day + dayEnding + ", " + getFullYear;
  };

  return (
    <>
      <div>{isLoading && <h2>Loading tweets....</h2>}</div>
      <div>
        {tweets.map((tweet) => (
          <>
            <h2>{getFormattedDate(tweet.date)}</h2>
            <TwitterTweetEmbed
              tweetId={tweet.tweetId} //{tweet.tweetId}
              options={{ width: 550, align: "center" }}
              key={tweet.tweetId}
              placeholder={"Loading"}
              onLoad={() => {
                console.log(new Date(tweet.date * 1000));
                setTotalTweets((prevState) => prevState - 1);
                console.log(totalTweets);
              }}
            />
          </>
        ))}
      </div>
    </>
  );
};

export default Tweets;
