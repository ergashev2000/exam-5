import React, { useContext } from "react";
import { UserContext } from "../../../App";
import { Link } from "react-router-dom";

const index = () => {
  const { user } = useContext(UserContext);
  return (
    <>
      <section>
        <div className="bar">
          <img src={user.avatar_url} />
          <div className="bar__body">
            <h2 className="user__title">{user.name}</h2>
            <p className="user__login">{user.login}</p>
            <p className="user__description">{user.bio}</p>
            <button type="button" className="edit__btn">
              Edit profile
            </button>
            <div className="follower">
              <Link to={"/followers"}>{user.followers} followers</Link>
              <Link to={"/following"}>{user.following} following</Link>
            </div>
            <p>{user.location}</p>
          </div>
          <hr />
          <div className="achievements">
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
          <div className="organizations">
            <img src="" alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
