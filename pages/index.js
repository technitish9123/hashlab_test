import Head from "next/head";
import React, { useState } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import logo from "../assets/logo.svg";
import hello from "../assets/sayhello.svg";
import image from "../assets/image.svg";
import carousel from "../assets/carousel indicator.svg";
import { FaTelegramPlane } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import signup from "../assets/signup.png";

import { FaWallet } from "react-icons/fa";
import { useWeb3React } from "@web3-react/core";
import { injected } from "../components/wallet/Connectors";
import { Web3ReactProvider } from "@web3-react/core";
// import Web3 from "web3";


export default function Home() {
  const [showDisconnect, setShowDisconnect] = useState(false);
  const { active, account, library, connector, activate, deactivate } =
    useWeb3React();

  async function connect() {
    try {
      await activate(injected);
      console.log(active);
      console.log(account);
      console.log(library);
    } catch (ex) {
      console.log(ex);
    }
  }

  async function disconnect() {
    try {
      deactivate();
      window.localStorage.clear();
   
    } catch (ex) {
      console.log(ex);
    }
  }

  return (
    <div className="grid grid-cols-5 h-[110vh] grid-flow-col hover:grid-flow-row">
      <div className="bg-red-100 col-span-3 pl-24 leftBody">
        <div className="flex justify-between text-center mb-12 mt-8 ">
          <div className="  ">
            <Image src={logo} />
          </div>
          <div className="btn">
            {" "}
            <button className="bg-transparent hover:bg-[#DE6658] text-black font-semibold hover:text-white py-2 px-4 border border-[#DE6658] hover:border-transparent mr-6">
              about us
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 justify-center  font-light subpixel-antialiased">
          <div>
            <Image src={hello} />
          </div>
          <div className="text-2xl">
            to your personal<span className="font-semibold"> web3 mailbox</span>
          </div>
        </div>

        <div className="bg-red-100">
          <Image
            src={image}
            alt="landind page image"
            width={560}
            height={375}
          />
          <div>
            {" "}
            <p className="text-2xl">
              <span className="font-semibold">unified web3 inbox</span> for all
              your wallet addresses
            </p>
            <p className="text-xl">
              send and receive mails simply with your wallet address access
              messages across wallets in one unified inbox
            </p>
          </div>
          <div className="mt-5">
            <Image src={carousel} alt="" />
          </div>
        </div>
        <footer className="pt-10 flex flex-rows justify-between">
          <p>copyright © 2022 hashlabs inc</p>
          <div className="flex space-x-6 mr-16">
            <h3>
              {" "}
              <FaTelegramPlane size={28} color="#D95141" />{" "}
            </h3>
            <h3>
              {" "}
              <FaTwitter size={28} color="#D95141" />{" "}
            </h3>
          </div>
        </footer>
      </div>

      <div className="bg-[#1e2128] col-span-2 pl-16">
        <div className="mt-8 ">
          <Image src={signup} alt="signup logo" />
        </div>
        <div className=" mt-12">

          {active ? (
            <button
              onClick={connect}
              className="pr-8 bg-transparent flex justify-between hover:bg-[#DE6658] w-48 text-white lg:text-2xl md:text-xl sm:text-lg lg:w-[450px] md:w-72 sm:w-56 font-semibold hover:text-white py-2 px-4 border border-[#DE6658] hover:border-transparent mr-6"
            >
              <FaWallet size={28} color="#D95141" /> wallet connected
            </button>
          ) : (
            <button
              onClick={connect}
              className="bg-transparent flex justify-between hover:bg-[#DE6658] text-white text-2xl w-48 lg:w-[450px] md:w-72 sm:w-56 font-semibold hover:text-white py-2 px-4 border border-[#DE6658] hover:border-transparent mr-6"
            >
              <FaWallet size={28} color="#D95141" /> connect your wallet and try
              now
            </button>
          )}
{
  active?(<button
    onClick={disconnect} className="text-white" >
    disconnect
  </button>):(null)
}
          <div>
            
            <span className="text-white"> wallet address is : {account}</span>
           
          </div>
        </div>
        <div className="mt-24">
          <h1 className="text-[#959CB3] text-xl loginHead pr-5 py-12">
            or login using your hash id
          </h1>

          <input
            className="bg-[#282B33] flex justify-center  text-[#5D6170] text-2xl lg:w-[450px] md:w-72 sm:w-56 font-semibold w-48 py-2 px-4  my-10 mr-6"
            placeholder="your hash id"
          />

          <input
            className="bg-[#282B33] flex justify-center  text-[#5D6170] text-2xl lg:w-[450px] md:w-72 sm:w-56 font-semibold w-48 py-2 px-4  my-10 mr-6"
            placeholder="enter your password"
          />
          <button className="bg-transparent flex justify-center hover:bg-[#DE6658] text-white text-2xl lg:w-[450px] md:w-72 sm:w-56 w-48 font-semibold hover:text-white py-2 px-4 border border-[#DE6658] hover:border-transparent mr-6">
            login
          </button>
        </div>
      </div>
    </div>
  );
}
