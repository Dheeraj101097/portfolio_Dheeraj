import React from "react";

const Card = () => {
  return (
    <div className="w-60 h-80 bg-neutral-800 rounded-3xl text-neutral-300 p-4 flex flex-col items-start justify-center gap-3 hover:bg-gray-900 hover:shadow-2xl hover:shadow-sky-400 transition-shadow">
      <div className="w-52 h-40 bg-sky-300 rounded-2xl" />
      <div className>
        <p className="font-extrabold">Card title</p>
        <p className>4 popular types of cards in UI design.</p>
      </div>
      <button className="bg-sky-700 font-extrabold p-2 px-6 rounded-xl hover:bg-sky-500 transition-colors">
        See more
      </button>
    </div>
  );
};

export default Card;
