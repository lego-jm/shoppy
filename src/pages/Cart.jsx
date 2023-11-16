import React from "react";
import Loading from "../components/Loading";
import CartItem from "../components/CartItem";
import SumPriceBox from "../components/SumPriceBox";
import Button from "../components/ui/Button";
import ErrorPage from "../pages/ErrorPage";
import useCart from "../hooks/useCart";
import { Link } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";

export default function Cart() {
  const {
    cartQuery: { isLoading, error, data: products },
  } = useCart();

  if (isLoading) return <Loading />;
  if (error) return <ErrorPage />;

  return (
    <>
      <h3 className="my-16 text-3xl font-bold">장바구니</h3>
      {!products && (
        <div className="flex flex-col items-center gap-3 border-y py-48 text-gray-300">
          <CiShoppingCart className="text-7xl" />
          <h3 className="text-black font-normal">
            장바구니에 상품을 담아보세요.
          </h3>
          <Link
            to="/"
            className="w-2/12 text-xs border border-gray-300 p-2 rounded-lg text-black font-bold text-center py-3"
          >
            쇼핑 계속하기
          </Link>
        </div>
      )}
      {products && (
        <div>
          <ul>
            <li className="w-full flex justify-between text-center border-y py-4 text-sm font-bold">
              <h5 className="basis-7/12">상품정보</h5>
              <h5 className="basis-4/12">옵션</h5>
              <h5 className="basis-2/12">상품금액</h5>
            </li>
            {products &&
              products.map((product) => (
                <CartItem key={product.id} product={product} />
              ))}
          </ul>
          <div className="flex flex-col gap-10">
            <SumPriceBox products={products} />
            <Button text="주문하기" />
          </div>
        </div>
      )}
    </>
  );
}
