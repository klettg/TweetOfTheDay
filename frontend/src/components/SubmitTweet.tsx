import { Button, TextField } from "@mui/material";
import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import db from "../firebaseHelper";
import { addDoc, collection } from "firebase/firestore";
import { Timestamp } from "firebase/firestore";

const SubmitTweet = () => {
  const [tweet, setTweet] = React.useState("");

  const handleSubmit = async (e: any) => {
    const match = /(?<=\/status\/)(?:(?!\?).)*/.exec(tweet);
    e.preventDefault();
    setTweet("");
    //submit tweet
    if (match !== null) {
      const tweet = {
        tweetId: match[0],
        date: Timestamp.now(),
      };
      const query = collection(db, "tweets");
      addDoc(query, tweet).then(() => {
        window.location.reload();
      });
    }
  };

  const handleChange = (e: any) => {
    const val = e.target.value.trim();

    console.log(val);
    setTweet(val);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <TextField
          id="outlined-basic"
          variant="outlined"
          margin="normal"
          value={tweet}
          placeholder="Paste tweet link here"
          sx={{
            width: 550,
          }}
          onChange={handleChange}
        />
      </div>
      <div>
        <Button
          type="submit"
          variant="contained"
          sx={{
            width: 550,
          }}
          endIcon={<TwitterIcon />}
        >
          Send
        </Button>
      </div>
    </form>
  );
};

export default SubmitTweet;
