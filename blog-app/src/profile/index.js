import axios from "axios";
import { useState, useEffect } from "react";
 

import { useSelector, useDispatch } from "react-redux";

import { getUserInfo ,updateUserInfo } from "../redux/reducers/auth";

/* Bret
Sincere@april.biz */

const Info = () => {
  const [info, setInfo] = useState("");
  const [name, setName] = useState("");

  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [address, setAddress] = useState("");


  const dispatch = useDispatch();

  const { id,profile } = useSelector((state) => {
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

         dispatch(getUserInfo(result.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getinfo();
  }, []);

  console.log(info);


const updateone =()=>{

dispatch(updateUserInfo ({name:name}) )

}


  return (
    <div>
      <h1>Hi {profile.name}</h1>
      <input defaultValue={profile.name} type={"text"} placeholder="Name"    onChange={(e)=>{setName(e.target.value)}}/>
      <br></br>
      <input defaultValue={profile.phone} type={"text"} placeholder="Phone" onChange={(e)=>{setPhone(e.target.value)}}/>
      <br></br>
      <input defaultValue={profile.website} type={"text"} placeholder="Website" onChange={(e)=>{setWebsite(e.target.value)}}/>
      <br></br>
      <input defaultValue={profile.address} type={"text"} placeholder="Website" onChange={(e)=>{setAddress(e.target.value)}} />
      <br></br>
      <button  onClick={updateone}    >Update Info</button>
      <br></br>
    </div>
  );
};

export default Info;
 
/* dispatch(
                                updatePost({
                                  title:title,body:body,id:postid
                                })
                              ); */