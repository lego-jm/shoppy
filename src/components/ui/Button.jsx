import React from "react";

export default function Button({ text }) {
  return (
    <button className="w-full bg-point-color font-bold text-white rounded-lg p-3 hover:text-gray-800 transition-all">
      {text}
    </button>
  );
}
