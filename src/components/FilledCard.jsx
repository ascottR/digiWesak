import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./stylesFilledCard.css";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function FilledCard() {
  const query = useQuery();
  const to = query.get("to");
  const from = query.get("from");
  const message = query.get("message");
  const image = query.get("image");

  const [musicPlaying, setMusicPlaying] = useState(false);

  function openUp() {
    const $opentop = document.querySelector("#opentop");
    const $top = document.querySelector("#top");
    const $front = document.querySelector("#front");
    const $back = document.querySelector("#back");
    const $letter = document.querySelector("#letter");
    const $button = document.querySelector("button");

    $opentop.beginElement();
    $top.style.zIndex = 2;

    $top.classList.add("animate");
    $front.classList.add("animate");
    $back.classList.add("animate");
    $button.classList.add("animate");
    $letter.classList.add("animate");

    setTimeout(() => {
      setMusicPlaying(true);
    }, 1500); // Start playing music after 0.5 seconds
  }

  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <div id="envelope">
        <div id="back">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            height="500"
            width="800"
          >
            <polygon
              points="0,100 800,100 800,500 0,500"
              className="fill-current text-gray-700 stroke-none"
            />
          </svg>
        </div>
        <div id="front">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            height="500"
            width="800"
          >
            <polygon
              points="0,100 400,200 800,100 800,500 0,500"
              className="fill-current text-gray-700 stroke-gray-700-200 stroke-3"
            />
          </svg>
        </div>
        <div id="top">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            height="400"
            width="800"
          >
            <polygon
              points="0,100 400,250 800,100"
              className="fill-current text-gray-700 stroke-purple-200 stroke-2"
            >
              <animate
                id="opentop"
                attributeName="points"
                dur="0.5s"
                fill="freeze"
                begin="indefinite"
                from="0,100 400,200 800,100"
                to="0,100 400,0 800,100"
              />
            </polygon>
          </svg>
        </div>
        <div id="letter" className="bg-white rounded-lg shadow">
          <div className="w-3/5">
            <img src={image} alt=" inset-0 w-full h-full object-cover" />
          </div>
          <div className="w-2/5 p-1">
            <p className="font-serif text-xl mb-4 text-zinc-800">
              To: <b>{to}</b>
            </p>
            <p className="font-serif text-xl mb-4 text-zinc-800">
              From: <b>{from}</b>
            </p>
            <p className="font-serif text-base mb-4 text-gray-800">
              Message: {message}
            </p>
          </div>
        </div>
        <button
          onClick={openUp}
          className="bg-gold rounded-full w-12 h-12 font-bold text-white text-center cursor-pointer transition-transform transition-colors duration-800 hover:bg-pink transform hover:scale-150"
        >
          Click Here
        </button>
        {musicPlaying && (
          <audio autoPlay>
            <source src="test.MP3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        )}
      </div>
    </div>
  );
}

export default FilledCard;
