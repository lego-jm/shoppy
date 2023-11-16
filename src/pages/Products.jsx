import React from "react";
import ProductCard from "../components/ProductCard";
import Loading from "../components/Loading";
import ErrorPage from "../pages/ErrorPage";
import useProducts from "../hooks/useProducts";

export default function Products() {
  const {
    productQuery: { isLoading, error, data: products },
  } = useProducts();

  if (isLoading) return <Loading />;
  if (error) return <ErrorPage />;

  return (
    <div className="pt-8">
      <h3 className="text-3xl font-bold my-10">오늘은 이 상품 어때요?</h3>
      <ul className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {products &&
          products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
      </ul>
    </div>
  );
}
