"use client";
import { useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAccount, useConnect } from "@starknet-react/core";
import { useReadLocalStorage } from "usehooks-ts";
import scaffoldConfig from "~~/scaffold.config";
import { burnerAccounts, BurnerConnector } from "@scaffold-stark/stark-burner";

const AuthenticatedLayout = ({ children }: { children: React.ReactNode }) => {
  const { account, status } = useAccount();
  const {
    connect,
    connectors,
    data: connectionData,
    isIdle,
    isPending,
    isSuccess,
    status: connectionStatus,
    connectAsync,
  } = useConnect();
  const router = useRouter();

  const savedConnector = useReadLocalStorage<{ id: string; ix?: number }>(
    "lastUsedConnector",
  );

  const autoConnect = useCallback(() => {
    if (scaffoldConfig.walletAutoConnect) {
      const connector = connectors.find(
        (conn) => conn.id == savedConnector?.id,
      );
      if (connector) {
        if (
          connector.id == "burner-wallet" &&
          savedConnector?.ix !== undefined &&
          connector instanceof BurnerConnector
        ) {
          connector.burnerAccount = burnerAccounts[savedConnector.ix];
        }
        connectAsync({ connector });
      }
    }
  }, [connectAsync, connectors, savedConnector]);

  if (!account && isIdle) {
    autoConnect();
  } else if (!account && isPending) {
    return null;
  } else if (!account && isSuccess) {
    router.push("/login");
    return null;
  }

  console.log(connectionStatus);

  return null;
};

export default AuthenticatedLayout;
