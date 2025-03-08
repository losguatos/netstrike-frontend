import {
  ArrowLeftEndOnRectangleIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { useDisconnect } from "@starknet-react/core";
import { WrongNetworkDropdownStyles } from "./WrongNetworkDropdownStyles";

export const WrongNetworkDropdown = () => {
  const { disconnect } = useDisconnect();

  return (
    <div className={WrongNetworkDropdownStyles.parentDiv}>
      <label tabIndex={0} className={WrongNetworkDropdownStyles.label}>
        <span>Wrong network</span>
        <ChevronDownIcon
          className={WrongNetworkDropdownStyles.chevronDownIcon}
        />
      </label>

      <ul tabIndex={0} className={WrongNetworkDropdownStyles.ul}>
        {/* TODO: reinstate if needed */}
        {/* <NetworkOptions /> */}
        <li>
          <button
            className={WrongNetworkDropdownStyles.button}
            type="button"
            onClick={() => disconnect()}
          >
            <ArrowLeftEndOnRectangleIcon
              className={WrongNetworkDropdownStyles.arrowLeftEndOnRectangleIcon}
            />
            <span>Disconnect</span>
          </button>
        </li>
      </ul>
    </div>
  );
};
