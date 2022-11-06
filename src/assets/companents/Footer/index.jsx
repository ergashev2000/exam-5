import React from "react";
import Logo from "../../images/github.svg";

const index = () => {
  return (
    <>
      <div className="footer">
        <div className="logo">
          <img src={Logo} />
          <span>© 2022 GitHub, Inc.</span>
        </div>
        <ul className="footer__items">
          <li>
            <a href="#">Terms</a>
          </li>
          <li>
            <a href="#">Privacy</a>
          </li>
          <li>
            <a href="#">Security</a>
          </li>
          <li>
            <a href="#">Status</a>
          </li>
          <li>
            <a href="#">Docs</a>
          </li>
          <li>
            <a href="#">Contact GitHub</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">API</a>
          </li>
          <li>
            <a href="#">Training</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default index;
