import React from "react";
import { useQuery } from "react-query";
import { getAllProducts } from "../api/firebase";
import ProductCard from "../components/ProductCard";
import Loading from "../components/Loading";
import ErrorPage from "../pages/ErrorPage";

export default function Products() {
  const {
    isLoading,
    error,
    data: products,
  } = useQuery(["products"], () => {
    return getAllProducts();
  });

  if (isLoading) return <Loading />;
  if (error) return <ErrorPage />;

  return (
    <div className="pt-8">
      <h3 className="text-3xl font-bold my-10">오늘은 이 상품 어때요?</h3>
      <ul className="grid grid-cols-4 gap-5">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </ul>
    </div>
  );
}
