import React from "react";

function TempCard(props) {
  return (
    <div className="max-w-sm mt-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img
          className="rounded-t-lg w-full h-96 "
          src={props.img}
          alt={props.title}
        />
      </a>
      <div className="p-5">
        <a href={props.attribution}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {props.title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {props.description}
        </p>
        <button
          onClick={props.onSelect}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-purple-800 rounded-lg hover:bg-purple-950 focus:ring-4 focus:outline-none focus:ring-purple-300 dark:bg-purple-700 dark:hover:bg-purple-950 dark:focus:ring-purple-950"
        >
          Choose
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default TempCard;
