import React from "react";
import CloseButton from "../buttons/CloseButton";

type Props = {
  children: React.ReactNode;
  showModel: boolean;
  onClose: () => void;
  backgroundClass?: string;
  bodyClass?: string;
};

const Modal = ({
  children,
  showModel,
  onClose,
  bodyClass = "bg-white my-[10%] mx-auto p-5 w-3/6 rounded-md",
  backgroundClass = "fixed z-10 left-0 top-0 w-full h-full overflow-auto bg-black bg-opacity-40",
}: Props) => {
  return (
    <>
      {showModel && (
        <div onClick={onClose} className={backgroundClass}>
          <div
            className={`relative ${bodyClass}`}
            onClick={(e) => e.stopPropagation()}
          >
            <CloseButton onClick={onClose} />

            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
