import React from "react";

export default function ErrorPage() {
  return (
    <div className="flex flex-col justify-center items-center text-center mt-20">
      <div className="flex flex-col items-center gap-3">
        <img className="w-14 rounded-full" src="/img/brandi-logo.png" alt="" />
        <h3 className="text-xl font-bold">잠시 이용이 어려워요.</h3>
        <p className="text-sm">
          불편을 드려 죄송합니다.
          <br /> 문제를 해결하기 위해 열심히 노력하고 있어요.
          <br />
          잠시 후 다시 시도해 주세요.
        </p>
        <button className="w-6/12 text-xs border border-gray-300 p-2 rounded-lg">
          다시 시도하기
        </button>
      </div>
      <p className="text-xs mt-10">
        <span className="font-bold">
          저희에게 알려주시면 빠르게 도와드릴게요.
        </span>
        <br />
        👉 <span className="text-sm underline">bug@test.co.kr</span>
      </p>
    </div>
  );
}
