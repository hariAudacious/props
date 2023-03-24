import axios from "axios";
import React, { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(users);
  return <div>Users</div>;
};

export default Users;
