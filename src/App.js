import './App.css';
// import * as cheerio from 'cheerio';
import { useState } from 'react';

/*
Create a web app with React that allows for users to generate and download memes using the https://memegen.link/ website.
It should allow the user to:
enter text for the top and bottom of the meme
change the meme photo
download the meme though one

Steps:

Step 1:
Use https://memegen.link/images/[id of the array]/text1/text2 (taken from the webside) and display it inside a div as an image?
Id of the array random or chosen by the user?
Let the user chose between a limmited number of ids? Ex. buzz, dodge, grumpycat, etc.? Or can I find a way to make him use the full list of ids?
Need a function that runs the webpage? Or do I need a useState variable?

Step 2: assign it to a constant, a state variable? +
Step 3: create a div that contains the rest of the task +
Step 4: call that variable once a user uses an input field and update the variable / link path https://memegen.link/images/[id of the array]/text1/text2?
What if the user only wants to fill in the first input field but not the second?
Step 5: show the generated meme
Step 6: button with onClick to let the user downloads his custom meme - where? new folder for that?
// try it first with a fixed meme an bottom and top
find a way to show the image on the same wbpage without somehow leaaving it --- use img tag with src
Could use dropdown menu to chose id, or go left or right to go through the ids, but for the beginning I should jsut use random

*/

function App() {
  const [memePath, setMemePath] = useState(
    `https://api.memegen.link/images/buzz/memes/memes_everywhere.png`, // '' would also work
  );
  console.log(memePath);

  return (
    <div /* is the root and I cant assign the App-styles to it therefore */>
      <div className="app">
        <h3> This is my Meme-Generator in React. </h3>
        {/* <img src={} className="App-logo2" alt="logo" /> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
         Learn React
        </a> */}
        <img
          className="Image"
          src={`${memePath}`}
          alt="Hardcoded Buzz." /* I am in JSX => one curly brackets says that I swqitch back to JS, backticks allow JS expression, $ searches for something inside the curly brackets following it */
        />
      </div>
    </div>
  );
}

export default App;
