import { Connector, useConnect } from "@starknet-react/core";
import { useRef, useState } from "react";
import { useLocalStorage } from "usehooks-ts";
import { BurnerConnector, burnerAccounts } from "@scaffold-stark/stark-burner";
import { useTheme } from "next-themes";
import { LAST_CONNECTED_TIME_LOCALSTORAGE_KEY } from "~~/utils/Constants";
import { GenericModal } from "../GenericModal";
import { BlockieAvatar } from "../../BlockieAvatar";
import { Wallet } from "../Wallet";
import { ConnectModalStyles } from "./ConnectModalStyles";

const loader = ({ src }: { src: string }) => {
  return src;
};

export const ConnectModal = () => {
  const modalRef = useRef<HTMLInputElement>(null);
  const [isBurnerWallet, setIsBurnerWallet] = useState(false);
  const { resolvedTheme } = useTheme();
  const isDarkMode = resolvedTheme === "dark";
  const { connectors, connect, error, status, ...props } = useConnect();
  const [_, setLastConnector] = useLocalStorage<{ id: string; ix?: number }>(
    "lastUsedConnector",
    { id: "" },
    {
      initializeWithValue: false,
    },
  );
  const [, setLastConnectionTime] = useLocalStorage<number>(
    LAST_CONNECTED_TIME_LOCALSTORAGE_KEY,
    0,
  );

  const handleCloseModal = () => {
    if (modalRef.current) {
      modalRef.current.checked = false;
    }
  };

  function handleConnectWallet(
    e: React.MouseEvent<HTMLButtonElement>,
    connector: Connector,
  ): void {
    if (connector.id === "burner-wallet") {
      setIsBurnerWallet(true);
      return;
    }
    connect({ connector });
    setLastConnector({ id: connector.id });
    setLastConnectionTime(Date.now());
    handleCloseModal();
  }

  function handleConnectBurner(
    e: React.MouseEvent<HTMLButtonElement>,
    ix: number,
  ) {
    const connector = connectors.find((it) => it.id == "burner-wallet");
    if (connector && connector instanceof BurnerConnector) {
      connector.burnerAccount = burnerAccounts[ix];
      connect({ connector });
      setLastConnector({ id: connector.id, ix });
      setLastConnectionTime(Date.now());
      handleCloseModal();
    }
  }

  return (
    <div className="w-full " >
      <label
        htmlFor="connect-modal"
        className={ConnectModalStyles.buttonLabel}
      >
        <span>Connect</span>
      </label>
      

      <input
        ref={modalRef}
        type="checkbox"
        id="connect-modal"
        className="modal-toggle"
      />
      <GenericModal modalId="connect-modal">
        
          <div className={ConnectModalStyles.headerDiv}>
            <h3 className={ConnectModalStyles.headerHeading}>
              {isBurnerWallet ? "Choose account" : "Connect a Wallet"}
            </h3>
            <label
              onClick={() => setIsBurnerWallet(false)}
              htmlFor="connect-modal"
              className={ConnectModalStyles.closeIcon}
            >
              &gt;&lt;
            </label>
          </div>
          <div className={ConnectModalStyles.divOne}>
            <div className={ConnectModalStyles.divTwo}>
              {!isBurnerWallet ? (
                connectors.map((connector, index) => (
                  <Wallet
                    key={connector.id || index}
                    connector={connector}
                    loader={loader}
                    handleConnectWallet={handleConnectWallet}
                  />
                ))
              ) : (
                <div className={ConnectModalStyles.divThree} >
                  <div className={ConnectModalStyles.divFour}>
                    {burnerAccounts.map((burnerAcc, ix) => (
                      <div
                        key={burnerAcc.publicKey}
                        className="w-full flex flex-col"
                      >
                        <button
                          className={ `${ConnectModalStyles.modalButton} ${isDarkMode ? "border-[#385183]" : ""} ` }
                          onClick={(e) => handleConnectBurner(e, ix)}
                        >
                          <BlockieAvatar
                            address={burnerAcc.accountAddress}
                            size={35}
                          />
                          {`${burnerAcc.accountAddress.slice(
                            0,
                            6,
                          )}...${burnerAcc.accountAddress.slice(-4)}`}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
       
        <div className={ConnectModalStyles.modalFooter}>
          <p>Select a wallet and confirm</p>
        </div>
      </GenericModal>
    </div>
  );
};
