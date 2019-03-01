import React, { useState, useEffect } from "react";
import Ticker from "./Ticker";
import shuffle from "lodash.shuffle";
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
  "this asshole over here",
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
  "rat bastard",
  "emergency contact",
  "bucko",
  "shitstain",
];


const App = props => {
  const list = shuffle([...ALTERNATIVES]);
  const [index, setIndex] = useState(0);

  const currentText = list[(index + list.length) % list.length];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex(index + 1);
    }, 1500);

    return () => window.clearInterval(timer);
  }, [index]);

  return (
    <div className="App">
      <h1>STOP CALLING YOUR HUSBANDS HUBBY</h1>
      <h3>HOLY FUCK</h3>

      <h2>HERE'S WHAT YOU CAN CALL HIM INSTEAD:</h2>
      <h1>
        <Ticker text={ currentText } />
      </h1>

      <h3>NO YOU CAN'T CALL HIM DADDY EITHER</h3>
      <small style={{ fontSize: "9px" }}>
        Made with hate by <a href="https://github.com/roddds">@roddds</a> with
        contributions from <a href="https://github.com/jessapp">@jessapp</a> and
        { ' ' }<a href="https://github.com/norasf">@norasf</a>.
      </small>
    </div>
  );
};

export default App;
