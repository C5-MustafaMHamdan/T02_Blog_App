import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { setPosts } from "../redux/reducers/posts";

import { getAllusers } from "../redux/reducers/users";
import { setalbums } from "../redux/reducers/albums";

/* Bret
Sincere@april.biz */

const Users = () => {
  const dispatch = useDispatch();

  const { users, posts, albums } = useSelector((state) => {
    return {
      users: state.users.users,
      posts: state.posts.posts,
      albums: state.albums.albums,
    };
  });

  const getalbums = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/albums`)
      .then((result) => {
        dispatch(setalbums(result.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getposts = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then((result) => {
        dispatch(setPosts(result.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getUsers = () => {
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
    getposts();
    getalbums();
  }, []);

  let lengthy = 0;
  let albumy = 0;

  console.log(posts);
  return (
    <div>
      <h1>Users</h1>

      {users &&
        users.map((element, index) => {
          lengthy = 0;
          albumy = 0;
          return (
            <div key={index}>
              <p>
                {element.name}{" "}
                {posts.map((elemnt) => {
                  if (elemnt.userId == element.id) {
                    lengthy++;
                  }
                })}
                Posts {lengthy}
                {element.name}
                {albums.map((ele) => {
                  if (ele.userId == element.id) {
                    albumy++;
                  }
                })}
                Albums {albumy}
              </p>

              <p></p>
            </div>
          );
        })}
    </div>
  );
};

export default Users;
