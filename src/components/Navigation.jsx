import React from "react";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { CiShoppingCart } from "react-icons/ci";
import { BsHeart } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";

export default function Navigation() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex justify-between py-5">
      <Link to="/" className="w-2/12">
        <img src="/svg/logo/brandi-logo.svg" alt="" />
      </Link>
      <div className="w-6/12 flex justify-between">
        <form onSubmit={handleSubmit} className="flex items-center">
          <div className="relative">
            <input
              className="w-80 py-3 border-b-2 outline-none border-black"
              type="text"
            />
            <button className="text-3xl absolute right-0 top-2">
              <BiSearch />
            </button>
          </div>
        </form>
        <nav className="flex items-center gap-x-5 text-4xl">
          <Link to="/carts">
            <CiShoppingCart />
          </Link>
          <Link to="/products/new">
            <BsHeart />
          </Link>
          <button>
            <IoPersonOutline />
          </button>
        </nav>
      </div>
    </div>
  );
}
