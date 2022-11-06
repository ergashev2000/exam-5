import React, {useContext} from "react";
import { UserContext } from "../../../../App";

const index = ({ data }) => {
  const {getRep} = useContext(UserContext)

  getRep(data)
  return (
    <>
      {data.data
        ? data.data.map((item) => 
           <a href={item.html_url}>
             <div className="repository__card">
              <div>
                <span className="rep__title">{item.name}</span>
                <span className="public">{item.visibility}</span>
              </div>
              <div>
                {item.language == "JavaScript" ? <span className="circle" style={{backgroundColor: "#F1E05A"}}></span>  :  <span className="circle" style={{backgroundColor: "#E34E29"}}></span>  } 
                <span>{item.language}</span>
                <p className="update">Updated {item.updated_at.substring(0, 10)}</p>
              </div>
            </div>
           </a>
          )
        : console.log("yuq data")}
    </>
  );
};

export default index;
