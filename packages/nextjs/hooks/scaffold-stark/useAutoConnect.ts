import { useReadLocalStorage } from "usehooks-ts";
import { useEffect, useState } from "react";
import { useConnect } from "@starknet-react/core";
import scaffoldConfig from "~~/scaffold.config";
import { BurnerConnector, burnerAccounts } from "@scaffold-stark/stark-burner";
import { LAST_CONNECTED_TIME_LOCALSTORAGE_KEY } from "~~/utils/Constants";

/**
 * Automatically connect to a wallet/connector based on config and prior wallet
 */
export const useAutoConnect = () => {
  const [isAutoConnecting, setIsAutoConnecting] = useState(true);
  const savedConnector = useReadLocalStorage<{ id: string; ix?: number }>(
    "lastUsedConnector",
  );

  const lastConnectionTime = useReadLocalStorage<number>(
    LAST_CONNECTED_TIME_LOCALSTORAGE_KEY,
  );

  const connect = useConnect();
  useEffect(() => {
    if (scaffoldConfig.walletAutoConnect) {
      const connector = connect.connectors.find(
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
        connect.connect({ connector });
      }
      setIsAutoConnecting(false);
    }
  }, [connect.connect, connect.connectors, savedConnector]);
  return { isAutoConnecting };
};
