"use client";
import { useState } from "react";

export default function AddSeller() {
  const [customerWallet, setCustomerWallet] = useState("");
  return (
    <div className="mt-24">
      <div className="font-regular text-xl mt-5 tracking-wider">
        Seller's Wallet Address
      </div>
      <div className="w-96 mt-4 flex flex-row items-center mb-14">
        <input
          onChange={(e) => {
            setCustomerWallet(e.target.value);
          }}
          placeholder="Wallet address"
          className="placeholder:text-neutral-500 bg-transparent  rounded-md w-64 h-14 border-2 focus:ring-2 focus:outline-none text-neutral-500 font-regular text-md p-2"
        ></input>
        <div
          //   style={{ color: "#f2efce" }}
          className="font-thin pr-3 pl-3 cursor-pointer pt-2 pb-2 rounded-md text-md text-white bg-cyan-900 ml-5"
        >
          Add Seller
        </div>
      </div>
    </div>
  );
}
