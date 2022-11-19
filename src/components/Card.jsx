import React from "react";

function Card(props) {
  return (
    <>
      <div className=" bg-neutral-800 w-72 text-neutral-200 rounded-lg">
        <div className="overflow-hidden">
          <div className="absolute flex items-center gap-2 text-yellow-400 my-8 mx-8 px-3 py-1 rounded-sm ring-2 ring-neutral-700 bg-neutral-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              />
            </svg>
            <p>{props.rate}</p>
          </div>
          <img className="p-5 rounded-lg" src={props.image} alt="image" />
        </div>
        <div className="h-20 pl-5 font-bold text-lg">{props.title}</div>
      </div>
    </>
  );
}

export default Card;
