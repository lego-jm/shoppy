import React from "react";

export default function Loading() {
  return (
    <div className="flex flex-col justify-center items-center gap-3 fixed top-0 left-0 bg-black w-full h-full bg-opacity-70 z-50">
      <img className="w-14 rounded-full" src="/img/brandi-logo.png" alt="" />
      <p className="text-xl text-white font-bold">Loading...</p>
    </div>
  );
}
