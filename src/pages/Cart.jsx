import React from "react";
import { useQuery } from "react-query";
import { useAuthContext } from "../context/AuthContext";
import { getCarts } from "../api/firebase";
import Loading from "../components/Loading";
import CartItem from "../components/CartItem";
import SumPriceBox from "../components/SumPriceBox";
import Button from "../components/ui/Button";
import ErrorPage from "../pages/ErrorPage";

export default function Cart() {
  const { user } = useAuthContext();

  const {
    isLoading,
    error,
    data: products,
  } = useQuery(["carts"], () => {
    return getCarts(user.uid);
  });

  if (isLoading) return <Loading />;
  if (error) return <ErrorPage />;

  return (
    <div>
      <h3 className="my-16 text-3xl font-bold">장바구니</h3>
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
  );
}
