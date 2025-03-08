"use client"
import { truncateAddress } from "~~/utils/format";
import { classes } from "./page.styles";
import { useAccount, useConnect } from "@starknet-react/core";
import { useCurrentTime } from "~~/hooks/useCurrentTime";
import { MenuButton } from "~~/components/MenuButtonComponent";
import { useState, useEffect } from "react";

const FOLDERS = [">Hack", ">Deck/s", ">Profile", ">Utils"] as const;
type FolderType = typeof FOLDERS[number];

const Home = () => {
  const { address } = useAccount();
  const { connector } = useConnect();
  const currentTime = useCurrentTime();
  const [selectedFolder, setSelectedFolder] = useState<FolderType>(">Deck/s");

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowUp" || e.key === "ArrowDown") {
        e.preventDefault();
        
        const currentIndex = FOLDERS.indexOf(selectedFolder as FolderType);
        let newIndex: number;
        
        if (e.key === "ArrowUp") {
          newIndex = currentIndex <= 0 ? FOLDERS.length - 1 : currentIndex - 1;
        } else {
          newIndex = currentIndex >= FOLDERS.length - 1 ? 0 : currentIndex + 1;
        }
        
        setSelectedFolder(FOLDERS[newIndex]);
      } else if (e.key === "Enter" && selectedFolder) {
        // Handle folder selection on Enter key
        console.log(`Folder selected: ${selectedFolder}`);
        // Additional logic for changing content based on selection
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedFolder]);

  return (
    <div className={classes.container}>
      <div className="w-60 h-[70%] absolute top-16 left-[1.125rem] flex flex-col gap-y-4">
        <p className="text-[#24DC8F] font-medium">Folders</p>
        <div className="flex flex-col gap-y-4">
          {FOLDERS.map((folder) => (
            <MenuButton
              key={folder}
              label={folder}
              onClick={() => setSelectedFolder(folder)}
              isActive={selectedFolder === folder}
              className="w-full h-[9.6rem]" 
            />
          ))}
        </div>
      </div>

      <div className={classes.header}>
        <p>
          Hacker &gt;&gt;&gt; NaN0ck | ADDRESS &gt;&gt;&gt; {truncateAddress(address as string)} | Wallet &gt;&gt;&gt;{" "}
          {connector?.name}{" "}
        </p>
        <p>{currentTime}</p>
      </div>

      <div className="flex font-medium text-[#24DC8F1A] items-baseline">
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