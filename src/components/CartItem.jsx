import React from "react";
import CartCount from "./CartCount";
import { IoClose } from "react-icons/io5";
import useCart from "../hooks/useCart";
import { Store } from "react-notifications-component";

export default function CartItem({ product }) {
  const { removeCartItem } = useCart();
  const handleRemoveItem = () => {
    removeCartItem.mutate(product.id, {
      onSuccess: () => {
        Store.addNotification({
          title: "",
          message: "해당 상품을 장바구니에서 지웠습니다.",
          type: "success",
          insert: "top-left",
          container: "top-left",
          animationIn: ["animate__animated animate__backInDown"],
          animationOut: ["animate__animated animate__backOutUp"],
          dismiss: {
            duration: 2000,
          },
        });
      },
    });
  };

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
          onClick={handleRemoveItem}
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
