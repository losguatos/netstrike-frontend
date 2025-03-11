"use client";
import { useAccount, useConnect } from "@starknet-react/core";
import { Footer } from "~~/components/Footer";
import { Header } from "~~/components/Header";
import LoadingOverlay from "~~/components/LoadingOverlay/LoadingOverlay";
import { useAutoConnect } from "~~/hooks/useAutoConnect";

const AuthenticatedLayout = ({ children }: { children: React.ReactNode }) => {
  const { address, account } = useAccount();
  const { connector } = useConnect();
  useAutoConnect();
  if (account) {
    return (
      <div className="flex items-center flex-col flex-grow relattive  px-[1.875rem] w-full h-full justify-center relative">
        <Header address={address ?? ""} connectorName={connector?.name ?? ""} />
        {children}
        <Footer />
      </div>
    );
  }
  return <LoadingOverlay />;
};

export default AuthenticatedLayout;
