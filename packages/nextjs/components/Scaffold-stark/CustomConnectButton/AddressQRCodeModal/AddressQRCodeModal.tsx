import { QRCodeSVG } from "qrcode.react";
import { Address as AddressType } from "@starknet-react/chains";
import { Address } from "~~/components/Scaffold-stark";
import { AddressQRCodeModalStyles } from "./AddressQRCodeModalStyles";

type AddressQRCodeModalProps = {
  address: AddressType;
  modalId: string;
};

export const AddressQRCodeModal = ({
  address,
  modalId,
}: AddressQRCodeModalProps) => {
  return (
    <>
      <div>
        <input type="checkbox" id={`${modalId}`} className="modal-toggle" />
        <label htmlFor={`${modalId}`} className="modal cursor-pointer">
          <label className="modal-box relative">
            {/* dummy input to capture event onclick on modal box */}
            <input className={AddressQRCodeModalStyles.input} />
            <label
              htmlFor={`${modalId}`}
              className={AddressQRCodeModalStyles.labelTwo}
            >
              ✕
            </label>
            <div className={AddressQRCodeModalStyles.divOne}>
              <div className={AddressQRCodeModalStyles.divTwo}>
                <QRCodeSVG value={address} size={256} />
                <Address address={address} format="short" disableAddressLink />
              </div>
            </div>
          </label>
        </label>
      </div>
    </>
  );
};
