import React from "react";
import { FaPlus } from "react-icons/fa6";

export default function SumPriceBox({ products }) {
  const DELEVERY_PRICE = 3000;
  const sumPrice = products.reduce((prev, current) => {
    return prev + current.price * current.count;
  }, 0);

  return (
    <div className="flex justify-between mt-20 border-y py-5 border-black">
      <div className="flex justify-center items-center gap-10 basis-4/6 p-3">
        <div className="flex flex-col items-center">
          <span className="text-sm opacity-70">총 상품금액</span>
          <p className="text-xl font-bold">{`${sumPrice.toLocaleString()}원`}</p>
        </div>
        <FaPlus className="opacity-20" />
        <div className="flex flex-col items-center">
          <span className="text-sm opacity-70">배송비</span>
          <p className="text-xl font-bold">{`${DELEVERY_PRICE.toLocaleString()}원`}</p>
        </div>
      </div>
      <div className="flex flex-col items-center basis-2/6 border-l p-3">
        <span className="text-sm opacity-70">총 결제금액</span>
        <p className="text-xl font-bold">{`${(
          sumPrice + DELEVERY_PRICE
        ).toLocaleString()}원`}</p>
      </div>
    </div>
  );
}
