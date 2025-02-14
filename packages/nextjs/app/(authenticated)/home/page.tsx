"use client"
import { formatLocalTime, truncateAddress } from "~~/utils/format";
import { classes } from "./page.styles";
import { useAccount, useConnect } from "@starknet-react/core";
import { useEffect, useState } from "react";


const Home = () => {
  const { address } = useAccount();
  const {connector } = useConnect(); 
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const formattedTime = formatLocalTime(now);
      setCurrentTime(formattedTime);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <p>Hacker &gt;&gt;&gt; NaN0ck |  ADDRESS &gt;&gt;&gt; {truncateAddress(address as string)} | Wallet &gt;&gt;&gt; {connector?.name} </p>
        <p>{currentTime}</p>
      </div>
    
    <div className="flex  font-medium text-[#24DC8F1A] items-baseline">
      <p className="text-8xl">NETSTRIKE</p>
      <p className="text-4xl">v1.0</p>
    </div>

      <div className="text-[#000000] absolute w-[95vw] bottom-[1.125rem] text-xl mx-auto bg-[#24DC8F] flex justify-center py-2 px-[1.8rem] items-center h-[3.75rem] font-medium">
        <p>HELP | 96008N1 8N1 | NOR | NS OS 0.1 | VT102 | Online | ttyACM0</p>
      </div>

    </div>
  );
};

export default Home;
