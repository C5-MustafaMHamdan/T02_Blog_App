import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
 
 
 
 import {getAllusers} from "../redux/reducers/users"

/* Bret
Sincere@april.biz */

const Users = () => {
  const dispatch = useDispatch();

 

  
 

  const { users } = useSelector((state) => {

    return {
      users: state.users.users,
     };
  });


  const  getUsers= () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then((result) => {
        dispatch(getAllusers(result.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getUsers();
  }, []);


 





  return (
    <div>
      <h1>Users</h1>
      {users &&
        users.map((element, index) => {
          console.log(element);
          return (
            <div key={index}>
              <p>{element.name}</p>
              
            </div>
          );
        })}
    </div>
  );
};

export default Users;
