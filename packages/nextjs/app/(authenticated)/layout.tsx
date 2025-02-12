"use client";
import { useAccount } from "@starknet-react/core";
import LoadingOverlay from "~~/components/LoadingOverlay/LoadingOverlay";
import { useAutoConnect } from "~~/hooks/useAutoConnect";

const AuthenticatedLayout = ({ children }: { children: React.ReactNode }) => {
  const { account } = useAccount();
  useAutoConnect();
  if (account) {
    return children;
  }
  return <LoadingOverlay />;
};

export default AuthenticatedLayout;
