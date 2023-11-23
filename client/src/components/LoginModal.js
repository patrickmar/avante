import React from "react";

const LoginModal = ({ isVisible, onClose, children }) => {
  if (!isVisible) return null;
  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };
  return (
    <div
      id="wrapper"
      className="fixed inset-0 bg-black1 rounded-lg shadow-lg backdrop-blur-sm flex justify-center items-center"
      onClick={handleClose}
    >
      <div className="w-[600px] flex flex-col">
        <button
          className="text-secondary text-xl place-self-end"
          onClick={() => onClose()}
        >
          X
        </button>
        <div className="bg-background"> {children}</div>
      </div>
    </div>
  );
};

export default LoginModal;
