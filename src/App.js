import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [meaning, setMeaning] = useState("");

  const emojiDict = {
    "😃": "Grinning Face",
    "🧨": "Cracker",
    "❤": "Love",
    "😂": "Laugh",
    "": ""
  };

  const onlyEmojiKeys = Object.keys(emojiDict);

  function changeHandler(event) {
    var meaningEmoji = event.target.value;
    if (emojiDict[meaningEmoji] === undefined) {
      return "Sorry not able to find meaning";
    }
    setMeaning(emojiDict[meaningEmoji]);
  }

  function emojiClickHandler(emoji) {
    setMeaning(emojiDict[emoji]);
  }

  return (
    <div className="App">
      <h1>Emoji Translator</h1>
      <input onChange={changeHandler}></input>
      <h2>Meaning! {meaning} </h2>
      <div>
        {onlyEmojiKeys.map((emoji) => {
          return (
            <span
              onClick={() => emojiClickHandler(emoji)}
              style={{
                fontSize: "2rem",

                margin: "0.5rem",
                cursor: "pointer"
              }}
              key={emoji}
            >
              {emoji}
            </span>
          );
        })}
      </div>
    </div>
  );
}
