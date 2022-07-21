import "bootstrap/dist/css/bootstrap.min.css";

import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./style.css";
import {
  setPosts,
  updatePost,
  deletePosts,
  addPost,
} from "../redux/reducers/posts";
import Form from "react-bootstrap/Form";
import { setComments } from "../redux/reducers/comments";

/* Bret
Sincere@april.biz */

const Posts = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [postid, setPostid] = useState("");
  /* localStorage.setItem("counter",counter) */

  /*  */

  const [comy, setComy] = "";
  const [deleted, setDeleted] = useState("");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show2, setShow2] = useState(false);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const [show3, setShow3] = useState(false);

  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);

  const { posts, id, comments } = useSelector((state) => {
    return {
      posts: state.posts.posts,
      id: state.auth.id,
      comments: state.comments.comments,
    };
  });
  let counter = posts.length + 1;

  //////////////get post//////////////////

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

  ////////////////delete post////////////////////

  const deleteIem = (id) => {
    console.log(id);

    if (id == deleted) {
      dispatch(deletePosts(id));
      handleClose();
    }
  };

  ////////////update post//////////////////////

  ////////////comments/////////

  const getcomments = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/comments`)
      .then((result) => {
        dispatch(setComments(result.data));
        setComy(result.data[500].postId);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getposts();
    getcomments();
  }, []);

  return (
    <div className="posty">
      <h1>Posts</h1>
      {/*  add ////////////////////////// */}

      <Button variant="primary" onClick={handleShow3}>
        Add New Post
      </Button>
      <Modal show={show3} onHide={handleClose3}>
        <Modal.Header closeButton>
          <Modal.Title>Add Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Post Title"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Body</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                onChange={(e) => {
                  setBody(e.target.value);
                }}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose3}>
            Close
          </Button>

          <Button
            variant="primary"
            onClick={() => {
              handleClose3();

              dispatch(
                addPost({ title: title, body: body, userId: id, id: counter })
              );
            }}
          >
            Add
          </Button>
        </Modal.Footer>
      </Modal>

      {posts &&
        posts.map((element, index) => {
          return (
            <div key={index}>
              <Card border="primary" style={{ width: "40rem" }}>
                userId {element.userId} post {element.id}
                <Card.Header>
                  <h4> {element.title}</h4>{" "}
                </Card.Header>
                <Card.Body>
                  <Card.Text>
                    <p>{element.body}</p>
                  </Card.Text>
                  {comments.map((com) => {
                    if (element.id === com.postId) {
                      return (
                        <Card body>
                          <h3> Commented by {com.email}</h3> {com.body}
                        </Card>
                      );
                    }
                  })}

                  {id == element.userId ? (
                    <>
                      {" "}
                      <Button
                        variant="primary"
                        onClick={() => {
                          handleShow();
                          setDeleted(element.id);
                        }}
                      >
                        delete
                      </Button>
                      <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                          <Modal.Title>Delete Post</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          Are you sure you want to delete this post ?
                        </Modal.Body>
                        <Modal.Footer>
                          <Button variant="secondary" onClick={handleClose}>
                            Close
                          </Button>
                          <button
                            onClick={() => {
                              deleteIem(deleted);
                            }}
                          >
                            delete
                          </button>
                        </Modal.Footer>
                      </Modal>
                      {/* update    ////////////////////////////////////                           */}
                      <Button
                        variant="primary"
                        onClick={() => {
                          handleShow2();
                          setTitle(element.title);
                          setBody(element.body);
                          setPostid(element.id)
                        }}
                      >
                        Update
                      </Button>
                      <Modal show={show2} onHide={handleClose2}>
                        <Modal.Header closeButton>
                          <Modal.Title>Update Post</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <Form>
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Label>Title</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Post Title"
                                onChange={(e) => {
                                  setTitle(e.target.value);
                                }}
                              />
                            </Form.Group>
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlTextarea1"
                            >
                              <Form.Label>Body</Form.Label>
                              <Form.Control
                                as="textarea"
                                rows={3}
                                onChange={(e) => {
                                  setBody(e.target.value);
                                }}
                              />
                            </Form.Group>
                          </Form>
                        </Modal.Body>
                        <Modal.Footer>
                          <Button variant="secondary" onClick={handleClose2}>
                            Close
                          </Button>

                          <Button
                            variant="primary"
                            onClick={() => {
                              handleClose2();
                              dispatch(
                                updatePost({
                                  title:title,body:body,id:postid
                                })
                              );
                            }}
                          >
                            update
                          </Button>
                        </Modal.Footer>
                      </Modal>
                    </>
                  ) : (
                    <></>
                  )}
                </Card.Body>
              </Card>
            </div>
          );
        })}
    </div>
  );
};

export default Posts;

/*   */
