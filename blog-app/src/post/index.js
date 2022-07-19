import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from 'react-bootstrap/Card';
 
 
 import {setPosts,updatePost, deletePosts} from "../redux/reducers/posts"

/* Bret
Sincere@april.biz */

const Posts = () => {

  const dispatch = useDispatch();



  
 

  const { posts , id } = useSelector((state) => {

    return {
        posts: state.posts.posts,
        id: state.auth.id,
     };
  });


  const  getposts= () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then((result) => {
        dispatch(setPosts(result.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getposts();
  }, []);




  return (
    <div>
      <h1>Posts</h1>
      <button >add</button>
      {posts &&
        posts.map((element, index) => {
          console.log(element);
          return (
            <div key={index}>
         
             <Card border="primary" style={{ width: '18rem' }}>
             userId   {element.userId}  post  {element.id}
        <Card.Header><h4> {element.title}</h4>    </Card.Header>
        <Card.Body>
          
          <Card.Text>
          <p>{element.body}</p>
          </Card.Text>
    {   id ==element.userId ? <>  <button onClick={()=>{ dispatch(deletePosts(element.id))}} >delete</button>
          <button onClick={()=>{dispatch(updatePost(element.id))}} >update</button></>:<></>}
        </Card.Body>
      </Card>

              
            </div>
          );
        })}
    




    </div>
  );
};

export default Posts;
