import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Select from "../components/ui/Select";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { addOrUpdateCart } from "../api/firebase";
import Button from "../components/ui/Button";
import { useAuthContext } from "../context/AuthContext";

export default function ProductDetail() {
  const { user } = useAuthContext();
  const {
    state: { product },
  } = useLocation();
  const [option, setOption] = useState();
  const handleAddCart = () => {
    addOrUpdateCart(user.uid, {
      ...product,
      color: option.color,
      option: option.size,
      count: 1,
    });
  };

  return (
    <div className="flex gap-14 mt-20">
      <div className="basis-1/2">
        <img src={product.imageUrl} alt="" />
        <p className="mt-5 text-center">{product.description}</p>
      </div>
      <div className="basis-1/2">
        <p className="text-gray-500 mb-3">{product.company}</p>
        <h2 className="text-2xl mb-5">{product.title}</h2>
        <p className="text-3xl font-bold">{`${product.price.toLocaleString()}원`}</p>
        <div className="flex flex-col gap-3 mt-10">
          <Select
            text="[컬러]를 선택하세요"
            setOption={setOption}
            options={product.color}
            name="color"
          />
          <Select
            text="[사이즈]를 선택하세요"
            setOption={setOption}
            options={product.option}
            name="size"
          />
        </div>
        <div className="flex gap-3 mt-3">
          <Button text="구매하기" />
          <button
            onClick={handleAddCart}
            className="border border-gray-500 p-3 rounded-lg text-2xl"
          >
            <AiOutlineShoppingCart />
          </button>
        </div>
      </div>
    </div>
  );
}
