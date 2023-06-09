import React from "react";
import Image from "next/image";
import logo from 'public/logo.png';

export default function Header(){
    return(
        <header className="inset-x-0 top-0 z-50 left-0 bg-header-green text-gray-700 body-font border-b border-gray-200">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <div
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <Image alt="logo" src={logo} className="w-8 h-8 -mr-1" />
            <span className="ml-5 font-bold text-2xl">HouseU</span>
          </div>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <div className="mr-20 font-normal text-cp-purple hover:text-gray-900">
            <a href="./rent">Rent</a>
            </div>
            <div className="mr-20 text-cp-purple hover:text-gray-900">
              <a href="./lease">Lease</a>
            </div>
            <div className="mr-20 text-cp-purple hover:text-gray-900">
            <a href="./generalfeed">General Feed</a>
            </div>
            <button className="mr-5 text-cp-purple hover:text-gray-900 font-medium bg-cp-green py-2 px-4 rounded-lg">
              <a href="./login">Login</a>
            </button>
            <button className="mr-5 text-cp-green hover:text-gray-900 font-medium bg-cp-purple py-2 px-4 rounded-lg">
              <a href="./signin">Sign in</a>
            </button>
          </nav>
        </div>
      </header>
    );
}