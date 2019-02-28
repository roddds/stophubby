import React, { useState, useEffect } from "react";
import Ticker from "./Ticker";
import sample from "lodash.sample";
import "./App.css";

const ALTERNATIVES = [
  // DON'T BOTHER WITH TITLE CASE
  // EVERYTHING WILL BE DISPLAYED AS UPPERCASE
  "bro",
  "dude",
  "pal",
  "mate",
  "sir",
  "husbando",
  "person who i have married",
  "buddy",
  "friendo",
  "cunt",
  "this asshole over here",
  "motherfucker",
  "the impreginator",
  "my boyfriend",
  "princess jasmine",
  "his mother's name",
  "benedict cumberbatch",
  "big mac",
  "poop emoji",
  "old man",
  "his name",
  "names",
  "githubby",
  "hey dumbass",
  "fuckhead",
  "mother hubbard",
  "prime minister",
  "my future late husband",
];


const App = props => {
  const [text, setText] = useState(sample(ALTERNATIVES));

  useEffect(() => {
    const timer = window.setInterval(() => {
      setText(sample(ALTERNATIVES));
    }, 1500);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="App">
      <h1>STOP CALLING YOUR HUSBANDS HUBBY</h1>
      <h3>HOLY FUCK</h3>

      <h2>HERE'S WHAT YOU CAN CALL HIM INSTEAD:</h2>
      <h1>
        <Ticker text={text} />
      </h1>

      <h3>NO YOU CAN'T CALL HIM DADDY EITHER</h3>
      <small style={{ fontSize: "9px" }}>
        Made with hate by <a href="https://github.com/roddds">@roddds</a> with
        contributions from <a href="https://github.com/jessapp">@jessapp</a>
      </small>
    </div>
  );
};

export default App;
