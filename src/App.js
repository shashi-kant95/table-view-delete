import "./styles.css";
import User from "./User";
import React, { useEffect, useState } from "react";
import AddUser from "./AddUser";
import Searchuser from "./Searchuser";

export default function App() {
  const [user, setUser] = useState([]);
  const [msata, setMsata] = useState([]);
  const [msataa, setMsataa] = useState({});
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
      res.json().then((res) => {
        setUser(res);
        setMsata(res);
      })
    );
  };

  const addUser = (newUSer) => {
    setMsataa(newUSer);

    // setUser((prev) => [...prev, newUSer]);

    setUser([...user, newUSer]);
  };

  useEffect(() => {
    console.log(user);
  }, [msataa]);

  return (
    <div className="App">
      <User userList={user} />
      <AddUser addUser={addUser} />
      <Searchuser data={msata} searchedData={(data) => setUser(data)} />
    </div>
  );
}
