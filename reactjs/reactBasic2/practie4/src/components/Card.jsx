import React from "react";

const Card = ({ userName, imgUrl, role, description, onDelete }) => {
  return (
    <div className="w-72 bg-white text-black rounded-2xl shadow-lg p-6 text-center">
      <img
        src={imgUrl}
        alt={userName}
        className="w-24 h-24 mx-auto rounded-full object-cover border-4 border-indigo-500"
      />

      <h2 className="mt-4 text-xl font-semibold">{userName}</h2>
      <p className="text-indigo-600">{role}</p>
      <p className="mt-3 text-sm text-gray-600">{description}</p>

      <button
        onClick={onDelete}
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 active:scale-90 transition"
      >
        Remove
      </button>
    </div>
  );
};

export default Card;
