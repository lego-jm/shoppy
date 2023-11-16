import React from "react";
import useCart from "../hooks/useCart";

export default function CartStatus() {
  const {
    cartQuery: { data: products },
  } = useCart();

  return (
    <span className="absolute flex justify-center w-3 -top-1 -right-1 text-xxs leading-4 text-white bg-point-color rounded-lg px-2">
      {products?.length}
    </span>
  );
}
