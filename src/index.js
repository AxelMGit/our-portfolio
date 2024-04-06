import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Linkees, { CHANNEL_TYPES } from "linkees";

import ".//normalize.css";

const items = [
  {
    title: "Erwan's portfolio",
    subtitle: "Look at his work!",
    type: CHANNEL_TYPES.WEBSITE,
    link: "https://ci3l.github.io/", //your personal website or portfolio  link
  },
  {
    title: "Erwan's GitHub",
    subtitle: "Erwan /@Ci3l 's open-source projects",
    type: CHANNEL_TYPES.GITHUB,
    link: "https://github.com/Ci3l", //Github Profile link
  },
  {
    title: "Erwan's LinkedIn",
    subtitle: "Know more about him",
    type: CHANNEL_TYPES.LINKEDIN,
    link: "https://www.linkedin.com/in/erwan-poir%C3%A9/", // linkedin
  },
  {
    title: "My portfolio",
    subtitle: "Look at my work!",
    type: CHANNEL_TYPES.WEBSITE,
    link: "https://ci3l.github.io/", //your personal website or portfolio  link
  },
  {
    title: "My GitHub",
    subtitle: "My / @AxelMGit open-source projects",
    type: CHANNEL_TYPES.GITHUB,
    link: "https://github.com/AxelMGit", //Github Profile link
  },
  {
    title: "My LinkedIn",
    subtitle: "Know more about me",
    type: CHANNEL_TYPES.LINKEDIN,
    link: "https://www.linkedin.com/in/axel-morillion/", // linkedin
  },
  /*{
    title: "Instagram",
    subtitle: "@heysagnik |  Shots of my life 🙂",
    type: CHANNEL_TYPES.INSTAGRAM,
    link: "https://instagram.com/heysagnik", //instagram profile link
  },
  {
    title: "Twitter",
    subtitle: "@heysagnik | 😉",
    type: CHANNEL_TYPES.TWITTER,
    link: "https://twitter.com/heysagnik", // twitter profile link
  },
  {
    title: "LinkedIn",
    subtitle: "Know more about my profession 👨‍💼",
    type: CHANNEL_TYPES.LINKEDIN,
    link: "https://www.linkedin.com/in/heysagnik/", // linkedin
  },
  {
    title: "YouTube",
    subtitle: "CODER SAGNIK | Official channel of mine",
    type: CHANNEL_TYPES.YOUTUBE,
    link: "https://www.youtube.com/channel/UCOUa9hvd4sJWQWQRIQctbSg", //youtube channel link
  },

  {
    title: "Dribbble",
    subtitle: "@virtuonic | shots of dezigns ",
    type: CHANNEL_TYPES.DRIBBLE,
    link: "https://dribbble.com/virtuonic", // Dribbble profile link
  },
  {
    title: "Telegram",
    subtitle: "@heysagnik | Chat with me instantly ",
    type: CHANNEL_TYPES.TELEGRAM,
    link: "https://telegram.me/heysagnik", //Telegram Pofile
  },*/
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Linkees cardItems={items} name={"AxelM."} />{" "}
    
  </React.StrictMode>
);

//<App /> <Linkees cardItems={items} name={"."} />{" "}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
