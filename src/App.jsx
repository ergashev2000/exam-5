import React, {
  useEffect,
  useState,
  useContext
} from "react";
import Header from "./assets/companents/Header";
import Menu from "./assets/companents/Menu";
import Bar from "./assets/companents/Bar";
import { Routes, Route } from "react-router-dom";
import Overview from "./assets/companents/Overview";
import Repositories from "./assets/companents/Repositories";
import Followers from "./assets/companents/Followers";
import Following from "./assets/companents/Following";
import Footer from "./assets/companents/Footer"
import axios from "axios";

export const UserContext = React.createContext();

const App = () => {
  const baseURL = "https://api.github.com/users";
  const searchURL = "https://api.github.com/search/users?q"

  const [user, setUser] = useState([]);
  const [repData, setRepData] = useState([]);

  console.log(repData);
  const userData = async (userName1 ) => {
    const resultUserData = await axios(`${baseURL}/${userName1}`);
    setUser(resultUserData.data);
  };
  const searchUserData = async (user) => {
    const searchResultUserData = await axios(`${searchURL}=${user}`);
    const test = searchResultUserData.data.items[0].url.split('/')[4];
    console.log(test);
    userData(test)
  };


  function getRep(data) {
    setRepData(data)
  }


  useEffect(() => {
    userData("ergashevislomjon")
  }, []);

  return (
    <>
      <UserContext.Provider value={{user, searchUserData,getRep, repData}}>
        <Header />
        <main>
          <Menu />
          <div className="main__content">
            <Bar />
            <Routes>
              <Route path="/" element={<Overview />} />
              <Route path="/repositories" element={<Repositories />} />
              <Route path="/followers" element={<Followers />} />
              <Route path="/following" element={<Following />} />
            </Routes>
          </div>
        </main>
        <Footer/>
      </UserContext.Provider>
    </>
  );
};

export default App;
