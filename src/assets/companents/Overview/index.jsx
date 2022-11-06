import React, {useContext} from "react";
import Card from "../UI/Cards";
import { UserContext } from "../../../App";

const index = () => {
  const {repData} = useContext(UserContext)

  return (
    <>
      <div className="overview">
      <h4 className="pin">Pinned</h4>
        <div className="overview__cards">
          <Card data={repData}/>
        </div>
      </div>
    </>
  );
};

export default index;
