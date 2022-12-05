import React from "react";
import { searchMovie } from "../api";

function SearchButton() {
  const search = async (q) => {
    const searchMov = await searchMovie(q);
    setPopularMovies(q.results);
    console.log(search);
  };

  return (
    <>
      <label className="relative block">
        <span className="sr-only">Search</span>
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 h-4 text-slate-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </span>
        <input
          className="placeholder:italic text-neutral-200 placeholder:text-neutral-400 block bg-neutral-700 w-full border border-neutral-600 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-neutral-600 focus:ring-neutral-600 focus:ring-1 sm:text-sm"
          placeholder="Search for anything..."
          type="text"
          name="search"
          onChange={({ target }) => search(target.value)}
        />
      </label>
    </>
  );
}

export default SearchButton;
