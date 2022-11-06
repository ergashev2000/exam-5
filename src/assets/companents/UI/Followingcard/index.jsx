import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { UserContext } from "../../../../App";

const index = ({ data }) => {
  const [userData, setUserData] = useState([]);
  const [userURL, setUserURL] = useState([]);

  const {user} = useContext(UserContext)

  console.log(user);
  const followersData = async (url) => {
    if (url) {
      const resultData = await axios(`${url}`);
      resultData.data.map((item) => {
        if (item.url) {
          setUserURL((userURL) => [...userURL, item.url]);
        }
      });
    }
  };

  const followersUserAllData = async (url) => {
    const followUserAllData = await axios(`${url}`);
    setUserData((userData) => [...userData, followUserAllData.data]);
  };

  const urlFol = "https://api.github.com/users/ergashevislomjon/following";
  useEffect(() => {
    followersData(urlFol);
  }, [user]);



  useEffect(() => {
    userURL.map((el) => {
      followersUserAllData(el);
    });
  }, [userURL]);


  return (
    <>
      {userData.length > 0
        ? userData.map((item) => (
            <div className="main__followers">
              <div className="img">
                <img src={item.avatar_url} />
                <div>
                  <span className="followers__title">{item.name}</span>

                  <span>{item.login}</span>
                  <p>
                    {item.company} {item.location}
                  </p>
                </div>
              </div>
              <div>
                <button type="button" className="follow__btn">
                  Follow
                </button>
              </div>
            </div>
          ))
        : console.log("yuq")}
    </>
  );
};

export default index;
