import React from "react";
const Footer = (props) => {
  return (
    <h3 className="footer">
      <a href="https://github.com/Thomas-Torrente">{props.madeBy}</a>
    </h3>
  );
};

export default Footer;
