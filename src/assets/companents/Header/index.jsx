import React, { useContext, useState } from "react";
import Logo from "../../images/github.svg";
import Bell from "../../images/bi_bell.svg";
import { UserContext } from "../../../App";

const index = () => {
  const { user, searchUserData } = useContext(UserContext);
  const [inputValue, setInputValue] = useState("");

  const searchUser = (e) => {
    setInputValue(e);
    console.log(e);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      console.log(event.key);
      searchUserData(inputValue);
    }
  };

  return (
    <>
      <header>
        <div className="container">
          <div className="navbar">
            <nav>
              <a href="" className="logo">
                <img src={Logo} alt="logo" />
              </a>
              <div className="search">
                <input
                  type="text"
                  className="search__input"
                  placeholder="Search or jump to..."
                  onChange={(e) => searchUser(e.target.value)}
                  onKeyDown={(e) => handleKeyDown(e)}
                />
                <span>/</span>
              </div>

              <ul className="nav__items">
                <li>Pull requests</li>
                <li>Issues</li>
                <li>Marketplace </li>
                <li>Explore</li>
              </ul>
            </nav>
            <div className="navigation">
              <div className="bell">
                <img src={Bell} />
              </div>
              <select id="select_plus">
                <option value="plus" selected disabled>
                  +
                </option>
                <option value="">1</option>
                <option value="">2</option>
              </select>
              <img src={user.avatar_url} className="ava" />
              <select id="select_avatar">
                <option value=""></option>
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
              </select>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default index;
