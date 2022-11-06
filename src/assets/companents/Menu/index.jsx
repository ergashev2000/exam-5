import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";

const index = () => {

  const {user} = useContext(UserContext)

  return (
    <>
      <section>
        <div className="container">
          <div className="menu">
            <ul className="menu__items">
              <li>
                <span>
                  <i class="fa-solid fa-book-open"></i>
                </span>
                <Link to="/">Overview</Link>
              </li>
              <li>
                <Link to="/repositories">
                  Repositories <span>{user.public_repos}</span>{" "}
                </Link>
              </li>
              <li>Projects</li>
              <li>Packages</li>
              <li>Stars</li>
            </ul>
          </div>
        </div>
        <hr />
      </section>
    </>
  );
};

export default index;
