import React, { useEffect, useState } from "react";

const index = ({ data }) => {
  const [fourData, setFoutData] = useState([]);

  function test() {
    if (data.data) {
      const da = data.data.slice(0, 4);
      setFoutData(da);
    }
  }
  useEffect(() => {
    test();
  }, [data]);

  return (
    <>
      {fourData
        ? fourData.map((item) => (
            <a href={item.html_url}>
              <div className="overview__card">
              <div className="lang">
                <span></span>
                <h4 className="rep__title">{item.name}</h4>
                <span className="public">{item.visibility}</span>
              </div>
              <div className="star">
                <div>
                  {item.language == "JavaScript" ? (
                    <span
                      className="circle"
                      style={{ backgroundColor: "#F1E05A" }}
                    ></span>
                  ) : (
                    <span
                      className="circle"
                      style={{ backgroundColor: "#E34E29" }}
                    ></span>
                  )}
                  <span>{item.language}</span>
                </div>
                <div>
                <p className="update">Updated {item.updated_at.substring(0, 10)}</p>
                </div>
              </div>
            </div>
            </a>
          ))
        : console.log("yuq daa")}
    </>
  );
};

export default index;
