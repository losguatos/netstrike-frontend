import { useReadLocalStorage } from "usehooks-ts";
import { useCallback, useEffect, useMemo } from "react";
import { Connector, useConnect } from "@starknet-react/core";
import { BurnerConnector, burnerAccounts } from "@scaffold-stark/stark-burner";
import { useRouter, usePathname } from "next/navigation";

export const useAutoConnect = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { connect, connectors } = useConnect();
  // load the last used connector from local storage
  const savedConnector = useReadLocalStorage<{ id: string; ix?: number }>(
    "lastUsedConnector",
  );
  const connector: Connector | undefined = useMemo(() => {
    return connectors.find((conn) => conn.id == savedConnector?.id);
  }, [connectors, savedConnector]);

  // auto connect to the last used connector
  const autoConnect = useCallback(() => {
    if (connector) {
      if (
        connector.id == "burner-wallet" &&
        savedConnector?.ix !== undefined &&
        connector instanceof BurnerConnector
      ) {
        connector.burnerAccount = burnerAccounts[savedConnector.ix];
      }
      connect({ connector });
    }
  }, [connect]);

  // auto connect on mount
  // if no connector is found, redirect to login
  useEffect(() => {
    if (!connector && pathname !== "/login") {
      setTimeout(() => {
        router.push("/login");
      }, 2000);
    } else {
      setTimeout(autoConnect, 2000);
    }
  }, [connector, router]);
};
