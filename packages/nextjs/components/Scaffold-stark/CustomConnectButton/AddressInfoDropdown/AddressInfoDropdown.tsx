import { useRef, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { createPortal } from "react-dom";
import {
  ArrowLeftEndOnRectangleIcon,
  ArrowTopRightOnSquareIcon,
  ArrowsRightLeftIcon,
  CheckCircleIcon,
  ChevronDownIcon,
  DocumentDuplicateIcon,
  QrCodeIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { useLocalStorage } from "usehooks-ts";
import { BlockieAvatar, isENS } from "../../../../components/Scaffold-stark";
import { useOutsideClick } from "~~/hooks/scaffold-stark";
import { BurnerConnector, burnerAccounts } from "@scaffold-stark/stark-burner";
import { getTargetNetworks } from "~~/utils/scaffold-stark";
import { Address } from "@starknet-react/chains";
import { useDisconnect, useNetwork, useConnect } from "@starknet-react/core";
import { getStarknetPFPIfExists } from "~~/utils/profile";
import { useScaffoldStarkProfile } from "~~/hooks/scaffold-stark/useScaffoldStarkProfile";
import { useTheme } from "next-themes";
import { default as NextImage } from "next/image";
import { NetworkOptions } from "../NetworkOptions";
import { AddressInfoDropdownStyles } from "./AddressInfoDropdownStyles";

const allowedNetworks = getTargetNetworks();

type AddressInfoDropdownProps = {
  address: Address;
  blockExplorerAddressLink: string | undefined;
  displayName: string;
  ensAvatar?: string;
};

export const AddressInfoDropdown = ({
  address,
  ensAvatar,
  displayName,
  blockExplorerAddressLink,
}: AddressInfoDropdownProps) => {
  const { disconnect } = useDisconnect();
  const [addressCopied, setAddressCopied] = useState(false);
  const { data: profile } = useScaffoldStarkProfile(address);
  const { chain } = useNetwork();
  const [showBurnerAccounts, setShowBurnerAccounts] = useState(false);
  const [selectingNetwork, setSelectingNetwork] = useState(false);
  const { connectors, connect } = useConnect();
  const { resolvedTheme } = useTheme();
  const isDarkMode = resolvedTheme === "dark";
  const dropdownRef = useRef<HTMLDetailsElement>(null);
  const closeDropdown = () => {
    setSelectingNetwork(false);
    dropdownRef.current?.removeAttribute("open");
  };

  // @ts-expect-error ref are initialized with null by default
  useOutsideClick(dropdownRef, closeDropdown);

  function handleConnectBurner(
    e: React.MouseEvent<HTMLButtonElement>,
    ix: number,
  ) {
    const connector = connectors.find((it) => it.id == "burner-wallet");
    if (connector && connector instanceof BurnerConnector) {
      connector.burnerAccount = burnerAccounts[ix];
      connect({ connector });
      setLastConnector({ id: connector.id, ix });
      setShowBurnerAccounts(false);
    }
  }

  const [_, setLastConnector] = useLocalStorage<{ id: string; ix?: number }>(
    "lastUsedConnector",
    { id: "" },
    {
      initializeWithValue: false,
    },
  );

  return (
    <>
      <details ref={dropdownRef} className={AddressInfoDropdownStyles.details}>
        <summary tabIndex={0} className={AddressInfoDropdownStyles.summary}>
          <div className={AddressInfoDropdownStyles.divOne}>
            {getStarknetPFPIfExists(profile?.profilePicture) ? (
              <NextImage
                src={profile?.profilePicture || ""}
                alt="Profile Picture"
                className="rounded-full"
                width={30}
                height={30}
              />
            ) : (
              <BlockieAvatar address={address} size={28} ensImage={ensAvatar} />
            )}
          </div>
          <span className={AddressInfoDropdownStyles.spanOne}>
            {isENS(displayName)
              ? displayName
              : profile?.name ||
                address?.slice(0, 6) + "..." + address?.slice(-4)}
          </span>
          <ChevronDownIcon
            className={AddressInfoDropdownStyles.chevronDownIcon}
          />
        </summary>
        <ul tabIndex={0} className={AddressInfoDropdownStyles.ul}>
          <NetworkOptions hidden={!selectingNetwork} />
          <li className={selectingNetwork ? "hidden" : ""}>
            {addressCopied ? (
              <div className={AddressInfoDropdownStyles.divTwo}>
                <CheckCircleIcon
                  className={AddressInfoDropdownStyles.checkCircleIcon}
                  aria-hidden="true"
                />
                <span className=" whitespace-nowrap">Copy address</span>
              </div>
            ) : (
              //@ts-ignore
              <CopyToClipboard
                text={address}
                onCopy={() => {
                  setAddressCopied(true);
                  setTimeout(() => {
                    setAddressCopied(false);
                  }, 800);
                }}
              >
                <div className={AddressInfoDropdownStyles.divThree}>
                  <DocumentDuplicateIcon
                    className={AddressInfoDropdownStyles.duplicateIcon}
                    aria-hidden="true"
                  />
                  <span className=" whitespace-nowrap">Copy address</span>
                </div>
              </CopyToClipboard>
            )}
          </li>
          <li className={selectingNetwork ? "hidden" : ""}>
            <label
              htmlFor="qrcode-modal"
              className={AddressInfoDropdownStyles.labelOne}
            >
              <QrCodeIcon className={AddressInfoDropdownStyles.QrCode} />
              <span className="whitespace-nowrap">View QR Code</span>
            </label>
          </li>
          {chain.network != "devnet" ? (
            <li className={selectingNetwork ? "hidden" : ""}>
              <button
                className={AddressInfoDropdownStyles.buttonOne}
                type="button"
              >
                <ArrowTopRightOnSquareIcon
                  className={AddressInfoDropdownStyles.arrowIcon}
                />
                <a
                  target="_blank"
                  href={blockExplorerAddressLink}
                  rel="noopener noreferrer"
                  className="whitespace-nowrap"
                >
                  View on Block Explorer
                </a>
              </button>
            </li>
          ) : null}

          {chain.network == "devnet" ? (
            <li className={selectingNetwork ? "hidden" : ""}>
              <button
                className="menu-item btn-sm !rounded-xl flex gap-3 py-3"
                type="button"
                onClick={() => {
                  setShowBurnerAccounts(true);
                }}
              >
                <UserCircleIcon className="h-6 w-4 ml-2 sm:ml-0" />
                <span className="whitespace-nowrap">Switch Account</span>
              </button>
            </li>
          ) : null}

          {showBurnerAccounts &&
            createPortal(
              <>
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                  <div className="relative w-auto my-6 mx-auto max-w-5xl">
                    <div className="border border-[#4f4ab7] rounded-lg shadow-lg relative w-full mx-auto md:max-h-[30rem] md:max-w-[25rem] bg-base-100 outline-none focus:outline-none">
                      <div className="flex items-start justify-between p-4 pt-8 rounded-t">
                        <div className="flex justify-center items-center w-11/12">
                          <h2 className="text-lg text-center text-neutral m-0">
                            Choose Account
                          </h2>
                        </div>
                        <button
                          className="w-8 h-8 place-content-end rounded-full justify-center items-center flex"
                          onClick={() => setShowBurnerAccounts(false)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              d="m6.4 18.308l-.708-.708l5.6-5.6l-5.6-5.6l.708-.708l5.6 5.6l5.6-5.6l.708.708l-5.6 5.6l5.6 5.6l-.708.708l-5.6-5.6z"
                            />
                          </svg>
                        </button>
                      </div>
                      <div className="flex flex-col items-center justify-center gap-3 mx-8 pb-10 pt-8">
                        <div className="h-[300px] overflow-y-auto flex w-full flex-col gap-2">
                          {burnerAccounts.map((burnerAcc, ix) => (
                            // eslint-disable-next-line react/jsx-key
                            <div
                              key={burnerAcc.publicKey}
                              className="w-full flex flex-col"
                            >
                              <button
                                className={`${
                                  isDarkMode
                                    ? "hover:bg-[#385183] border-[#385183]"
                                    : "hover:bg-gradient-light "
                                } border rounded-md text-neutral py-[8px] pl-[10px] pr-16 flex items-center gap-4`}
                                onClick={(e) => handleConnectBurner(e, ix)}
                              >
                                <BlockieAvatar
                                  address={burnerAcc.accountAddress}
                                  size={35}
                                ></BlockieAvatar>
                                {`${burnerAcc.accountAddress.slice(
                                  0,
                                  6,
                                )}...${burnerAcc.accountAddress.slice(-4)}`}
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="backdrop-blur fixed inset-0 z-40"></div>
              </>,
              document.body,
            )}

          {/* TODO: reinstate if needed */}
          {/* {allowedNetworks.length > 1 ? (
            <li className={selectingNetwork ? "hidden" : ""}>
              <button
                className="btn-sm !rounded-xl flex gap-3 py-3"
                type="button"
                onClick={() => {
                  setSelectingNetwork(true);
                }}
              >
                <ArrowsRightLeftIcon className="h-6 w-4 ml-2 sm:ml-0" />{" "}
                <span>Switch Network</span>
              </button>
            </li>
          ) : null} */}
          <li className={selectingNetwork ? "hidden" : ""}>
            <button
              className="menu-item text-secondary-content btn-sm !rounded-xl flex gap-3 py-3"
              type="button"
              onClick={() => disconnect()}
            >
              <ArrowLeftEndOnRectangleIcon className="h-6 w-4 ml-2 sm:ml-0" />{" "}
              <span>Disconnect</span>
            </button>
          </li>
        </ul>
      </details>
    </>
  );
};
