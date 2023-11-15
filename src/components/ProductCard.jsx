import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ product }) {
  const navigate = useNavigate();
  return (
    <li
      className="cursor-pointer mb-2"
      onClick={() => navigate(`/products/${product.id}`)}
    >
      <div className="overflow-hidden">
        <img
          className="hover:scale-105 hover:transition-all duration-500"
          src={product.imageUrl}
          alt="product-img"
        />
      </div>
      <div className="mt-2">
        <p className="text-xs opacity-75">{product.company}</p>
        <h3 className="line-clamp-1">{product.title}</h3>
        <p className="text-lg font-bold">{`${product.price.toLocaleString()}원`}</p>
      </div>
    </li>
  );
}
