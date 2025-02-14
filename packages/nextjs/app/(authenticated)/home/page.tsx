"use client";
import { useDisconnect } from "@starknet-react/core";
import { classes } from "./page.styles";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();
  const { disconnect } = useDisconnect();

  const handleDisconnection = () => {
    disconnect();
    router.push("/login");
  };

  return (
    <div className={classes.container}>
      <div className="px-5">
        <h1 className="text-center">
          <span className={classes.title} onClick={handleDisconnection}>
            Netstrike Home
          </span>
        </h1>
      </div>
    </div>
  );
};

export default Home;
