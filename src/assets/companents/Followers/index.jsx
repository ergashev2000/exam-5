import React, { useContext } from "react";
import FollowersCards from "../UI/Followerscard";
import { UserContext } from "../../../App";

const index = () => {
  const { user } = useContext(UserContext);
  return (
    <>
      <div className="followers">
        <FollowersCards data={user} />
      </div>
    </>
  );
};

export default index;
