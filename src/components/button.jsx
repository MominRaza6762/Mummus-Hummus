import React from "react";

const ButtonComp = ({
  title,
  onClick,
  type = "button",
  disabled = false,
  className = "",
  style = {},
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={className}
      style={{
        width: "100%",
        borderRadius: "50px",
        padding: "20px 50px",
        borderWidth: "1px",
        background: "#00706E",
        color: "white",
        fontSize: "16px",
        fontWeight: "bold",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.6 : 1,
        border: "none",
        outline: "none",
        textAlign: "center",
        ...style,
      }}
    >
      {title}
    </button>
  );
};

export default ButtonComp;
