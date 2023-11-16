import React from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import useCart from "../hooks/useCart";

export default function CartCount({ product }) {
  const { addOrUpdateItem } = useCart();
  const inCrement = () => {
    addOrUpdateItem.mutate({ ...product, count: product.count + 1 });
  };
  const deCrement = () => {
    if (product.count > 1) {
      addOrUpdateItem.mutate({ ...product, count: product.count - 1 });
    }
  };

  return (
    <div className="w-3/12 flex border rounded-lg mt-3">
      <button className="p-1" onClick={deCrement}>
        <FiMinus />
      </button>
      <p className="flex items-center border-x px-2 text-sm">{product.count}</p>
      <button className="p-1" onClick={inCrement}>
        <FiPlus />
      </button>
    </div>
  );
}
