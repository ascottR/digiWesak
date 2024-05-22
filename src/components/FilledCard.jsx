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
    const $front2 = document.querySelector("#front2");
    const $back = document.querySelector("#back");
    const $letter = document.querySelector("#letter");
    const $button = document.querySelector("button");

    $opentop.beginElement();
    $top.style.zIndex = 2;

    $top.classList.add("animate");
    $front.classList.add("animate");
    $front2.classList.add("animate");
    $back.classList.add("animate");
    $button.classList.add("animate");
    $letter.classList.add("animate");

    setTimeout(() => {
      setMusicPlaying(true);
    }, 1000); // Start playing music after 1S seconds
  }

  return (
    <div className="relative flex items-center justify-center h-screen w-screen">
      <div className="topbtn absolute top-4 right-4">
        <a
          href="/"
          className="text-charcoal-blue px-4 py-2 cursor-pointer inline-flex items-center relative overflow-hidden"
        >
          <span>Make Your Own Digital Wesak Card</span>
          <span className="absolute top-0 right-0 bg-purple-500 w-3 h-3 rounded-full animate-ping"></span>
        </a>
      </div>
      <div id="envelope" className="relative">
        <div id="back">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="100%"
            width="100%"
            viewBox="0 0 800 500"
          >
            <polygon
              points="0,100 800,100 800,500 0,500"
              className="fill-current text-purple-950"
            />
          </svg>
        </div>
        <div id="front">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="100%"
            width="100%"
            viewBox="0 0 800 500"
          >
            <polygon
              points="0,100 400,300 800,100 800,500 0,500"
              className="fill-current text-purple-700"
            />
          </svg>
        </div>
        <div id="front2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="100%"
            width="100%"
            viewBox="0 0 800 500"
          >
            <polygon
              points="0,100 400,300 0,500"
              className="fill-current text-purple-800"
            />
          </svg>
        </div>
        <div id="top">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="100%"
            width="100%"
            viewBox="0 0 800 500"
          >
            <polygon
              points="0,100 400,300 800,100"
              className="fill-current text-purple-950"
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

          <div className="w-2/5 p-2  md:p-4 m-1 md:m-2 font-mono text-xs md:text-lg  text-zinc-800 border-2 border-dashed hfull-minus-1rem-ccss border-purple-950">
            <p className="mb-1 sm:mb-4 ">
              <b>From: </b>
              {from}
            </p>
            <p className="mb-1 sm:mb-4">
              <b>TO: </b>
              {to}
            </p>
            <p className=" mb-1">
              <b>Message:</b>
              <br />
              {message}
            </p>
          </div>
        </div>
        <button
          onClick={openUp}
          className="rounded-full w-12 h-12 cursor-pointer transition-transform transition-colors duration-800 hover:bg-pink transform hover:scale-150 absolute top-4 right-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="text-white"
          >
            <path
              fillRule="evenodd"
              d="M10 3a7 7 0 100 14 7 7 0 000-14zM9 6a1 1 0 00-1 1v4.586L5.707 9.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l4-4a1 1 0 00-1.414-1.414L10 11.586V7a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
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
