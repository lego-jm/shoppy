import React from "react";

const categorys = [
  "홈",
  "카테고리",
  "하루배송",
  "혜택존",
  "베스트",
  "신상",
  "세일",
  "스토어",
];

export default function NavBar() {
  return (
    <nav className="w-full flex justify-between bg-white font-bold mt-3 border-b">
      {categorys.map((category, index) => (
        <button
          className={`p-1 ${index === 0 ? "border-b-2 border-black " : ""}`}
          key={index}
        >
          {category}
        </button>
      ))}
    </nav>
  );
}
