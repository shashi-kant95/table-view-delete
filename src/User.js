import React, { useEffect, useState } from "react";

const User = (props) => {
  // const [user, setUser] = useState([]);
  // useEffect(() => {
  //   getData();
  // }, []);

  // const getData = () => {
  //   fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
  //     res.json().then((res) => setUser(res))
  //   );
  // };

  // const deleteItem = (id) => {
  //   let obj = user.filter(ele=>{
  //     if(ele.id== id){
  //       ele.isCompleted = true;
  //     }
  //     return ele;

  //   });
  //   console.log(obj)

  //   setUser(obj);
  // };
  return (
    <div>
      {props.userList.map((ele) => {
        return (
          <div key={ele.id} style={{ display: "flex" }}>
            <div className="dfs">{ele.username}</div>
            <div className="dfs">{ele.email}</div>
            <div className="dfs">{ele.website}</div>
            <div className={ele.isCompleted == true ? "completed dfs" : "dfs"}>
              {" "}
              {ele.address.suite}
            </div>
            <button onClick={() => alert(ele.id)}>DElete</button>
          </div>
        );
      })}
    </div>
  );
};

export default User;
