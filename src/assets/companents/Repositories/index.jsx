import React, {useContext, useEffect, useState} from "react";
import Repository from "../UI/Repository";
import { UserContext } from "../../../App";
import axios from "axios";

const index = () => { 
  const {user} = useContext(UserContext);
  const [repos, setRepos] = useState([])

  const reposData = async () => {
    const res = await axios(`${user.repos_url}`)
    setRepos(res)
    console.log(res);
  }
  useEffect(() => {
    reposData()
  }, [user])
  


  
  return (
    <>
      <section className="rep__main">
        <div className="search">
          <input
            type="text"
            className="repository_search__input"
            placeholder="Find a repository ... "
          />
        </div>
        <div>
          <Repository data={repos}/>
        </div>
      </section>
    </>
  );
};

export default index;
