import React from "react";
import CartCount from "./CartCount";

export default function CartItem({ product }) {
  const sumPrice = product.price * product.count;

  return (
    <li className="flex justify-between border-b">
      <div className="flex gap-4 basis-7/12 p-5">
        <img className="w-2/12" src={product.imageUrl} alt="product-img" />
        <div className="flex flex-col gap-2 text-sm">
          <p className="opacity-75">{product.company}</p>
          <h3 className="font-bold">{product.title}</h3>
          <p className="text-base font-bold">{`${product.price.toLocaleString()}원`}</p>
        </div>
      </div>
      <div className="basis-4/12 p-5 border-x">
        <p className="border-b pb-3 text-sm">
          {product.color} / {product.option}
        </p>
        <CartCount product={product} />
      </div>
      <div className="flex justify-center items-center basis-2/12 p-5">
        <p className="text-xl font-bold">{`${sumPrice.toLocaleString()}원`}</p>
      </div>
    </li>
  );
}
