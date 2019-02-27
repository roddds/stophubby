import React, { useState, useEffect } from "react";
import Ticker from "./Ticker";
import sample from "lodash.sample";
import "./App.css";

const ALTERNATIVES = [
  "bro",
  "dude",
  "pal",
  "mate",
  "sir",
  "husbando",
  "person who I have married",
  "buddy",
  "friendo",
  "cunt",
  "this asshole over here",
  "motherfucker",
  "the impreginator",
  "my boyfriend",
  "Princess Jasmine",
  "his mother's name",
  "Benedict Cumberbatch",
  "Big Mac",
  "Poop emoji",
  "old man",
  "his name",
  "names"
];

const App = props => {
  let options = [...ALTERNATIVES];

  const [text, setText] = useState(sample(options));

  useEffect(() => {
    const timer = window.setInterval(() => {
      if (!options.length) {
        options = [...ALTERNATIVES];
      }

      setText(sample(options));
    }, 3000);

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
    </div>
  );
};

export default App;
