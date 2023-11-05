"use client";

import { useState } from "react";

const TestPage = () => {
  const [showText, setShowText] = useState(false);
  return (
    <div>
      page
      <button>click me</button>
      <div>
        <label htmlFor="randomText">enter random text:</label>
        <input id="randomText" />
        <input placeholder="enter" />
      </div>
      <div>
        {showText && <span>hello world!!</span>}
        <button
          onClick={() => {
            setShowText(!showText);
          }}
        >
          show text
        </button>
      </div>
    </div>
  );
};

export default TestPage;
