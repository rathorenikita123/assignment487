/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import ShopItem from "./shopItem";

const Header = () => {
  return (
    <div className="navbar bg-base-100 p-4 relative sm:border-b sm:border-black lg:border-none md:border-none">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="font-normal text-2xl">
            SHOP
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1]  shadow bg-base-100  w-[100vw] absolute"
          >
            <li className="border-b border-t border-black p-2">
              <a>
                <ShopItem title="London Dry" description="British Gen" />
              </a>
            </li>
            <li className="border-b border-black p-2">
              <a>
                <ShopItem title="SPICED BLEND" description="Caribbean Rum" />
              </a>
            </li>
            <li className="border-b border-black p-2">
              <a>
                <ShopItem title="APERITIF" description="Heritage Botanicals" />
              </a>
            </li>
            <li className="border-b border-black p-2">
              <a>
                <ShopItem title="ATRIO" description="London Dry, Spiced Blend & Aperitif" />
              </a>
            </li>
          </ul>
        </div>
        <div className="ml-4">
          <a className="font-normal text-2xl">STORY</a>
        </div>
      </div>
      <div className="navbar-center">
        <a className="font-medium normal-case text-4xl">DECEM</a>
      </div>
      <div className="navbar-end">
        <div className="relative">
          <label
            htmlFor="basket-drawer"
            className="drawer-button font-normal text-2xl cursor-pointer"
          >
            BASKET (0)
          </label>
          <div className="drawer drawer-end">
            <input
              id="basket-drawer"
              type="checkbox"
              className="drawer-toggle"
            />
            <div className="drawer-side">
              <label
                htmlFor="basket-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>

              <div className="menu p-4 w-80 min-h-full bg-white text-base-content">
                <h1 className="font-normal text-2xl cursor-pointer border-b border-black pb-4">
                  BASKET (0)
                </h1>
                <p className="text-lg text-center pt-2">Your cart is empty</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
