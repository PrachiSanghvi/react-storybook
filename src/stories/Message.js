import React from "react";
import "./message.css";

export const Message = ({ mode, label, ...props }) => {
 return (
  <div className={["storybook-message", `storybook-message--${mode}`].join(" ")} {...props}>
   {label}
  </div>
 );
};

Message.defaultProps = {
 mode: "success",
 label: undefined,
};