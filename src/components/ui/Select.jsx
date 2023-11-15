import React from "react";

export default function Select({ text, options, setOption, name }) {
  const optionArr = options.split(",");
  return (
    <select
      name={name}
      className="border border-black p-2"
      onChange={(e) =>
        setOption((prev) => ({ ...prev, [name]: e.target.value }))
      }
    >
      <option disabled value="">
        {text}
      </option>
      {optionArr.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}
