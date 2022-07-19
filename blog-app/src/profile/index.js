import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import { getUserInfo } from "../redux/reducers/auth";

/* Bret
Sincere@april.biz */

const Info = () => {
  
  const [info, setInfo] = useState("");
  /*    let { id } = useParams();  */

  const { id } = useSelector((state) => {
    return {
      id: state.auth.id,
      profile: state.auth.profile,
    };
  });

  const getinfo = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((result) => {
        console.log(result);
        setInfo(result.data)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getinfo();
  }, []);

console.log(info);



  return (
    <div>

<h1>Hi {info.name}</h1>
      <input defaultValue={info.name} type={"text"} placeholder="Name" />
      <br></br>
      <input defaultValue={info.phone} type={"text"} placeholder="Phone" />
      <br></br>
      <input defaultValue={info.website} type={"text"} placeholder="Website" />
      <button></button>
      <br></br>

    </div>


  );
};

export default Info;
