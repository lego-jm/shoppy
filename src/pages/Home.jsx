import React from "react";
import Products from "../pages/Products";
import HomeBanner from "../components/HomeBanner";

export default function Home() {
  return (
    <div>
      <HomeBanner />
      <Products />
    </div>
  );
}
