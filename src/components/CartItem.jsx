import React from "react";
import CartCount from "./CartCount";
import { IoClose } from "react-icons/io5";
import { removeItem } from "../api/firebase";
import { useAuthContext } from "../context/AuthContext";

export default function CartItem({ product }) {
  const { user } = useAuthContext();

  return (
    <li className="flex justify-between border-b">
      <div className="flex gap-4 basis-7/12 p-5">
        <img className="w-2/12" src={product.imageUrl} alt="product-img" />
        <div className="flex flex-col gap-2 text-sm">
          <p className="opacity-75">{product.company}</p>
          <h3 className="font-bold">{product.title}</h3>
          <p className="text-base font-bold">{`${product.price.toLocaleString()}원`}</p>
        </div>
        <IoClose
          className="text-3xl cursor-pointer"
          onClick={() => removeItem(user.uid, product.id)}
        />
      </div>
      <div className="basis-4/12 p-5 border-x">
        <p className="border-b pb-3 text-sm">
          {product.color} / {product.option}
        </p>
        <CartCount product={product} />
      </div>
      <div className="flex justify-center items-center basis-2/12 p-5">
        <p className="text-xl font-bold">{`${(
          product.price * product.count
        ).toLocaleString()}원`}</p>
      </div>
    </li>
  );
}
