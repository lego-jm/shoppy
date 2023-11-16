import React from "react";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { CiShoppingCart } from "react-icons/ci";
import { BsHeart, BsPencilFill } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";
import NavBar from "./NavBar";
import { useAuthContext } from "../context/AuthContext";
import CartStatus from "./CartStatus";

export default function Navigation() {
  const { user, login, logout } = useAuthContext();
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col mx-52">
      <div className="flex justify-between py-5">
        <Link to="/" className="w-2/12">
          <img src="/svg/logo/brandi-logo.svg" alt="" />
        </Link>
        <div className="flex gap-x-16">
          <form onSubmit={handleSubmit} className="flex items-center">
            <div className="relative">
              <input
                className="w-80 py-2 border-b-2 outline-none border-black text-lg"
                type="text"
              />
              <button className="text-3xl absolute right-0 top-2">
                <BiSearch />
              </button>
            </div>
          </form>
          <nav className="flex items-center gap-6 text-4xl">
            <Link to="/carts" className="relative">
              <CiShoppingCart />
              <CartStatus />
            </Link>
            <Link to="/">
              <BsHeart className="text-3xl" />
            </Link>
            {user && (
              <button className="relative" onClick={() => logout()}>
                <IoPersonOutline />
                <span className="absolute -top-1 -right-1 text-xxs leading-4 text-white bg-point-color rounded-lg px-1">
                  ON
                </span>
              </button>
            )}
            {!user && (
              <button
                className="relative"
                onClick={() => login().then((user) => user)}
              >
                <IoPersonOutline />
                <span className="absolute -top-1 -right-1 text-xxs leading-4 text-white bg-gray-500 rounded-lg px-1">
                  OFF
                </span>
              </button>
            )}
            {user?.isAdmin && (
              <Link to="/products/new">
                <BsPencilFill className="text-2xl" />
              </Link>
            )}
          </nav>
        </div>
      </div>
      <NavBar />
    </div>
  );
}
