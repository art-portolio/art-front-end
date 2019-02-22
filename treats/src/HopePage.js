import React from "react";
import axios from "axios";

import NewPost from "./components/Post/NewPost";
import EditPost from "./components/Post/EditPost";
import DeletePost from "./components/Post/DeletePost";

class Homepage extends React.Component {
  constructor(props) {
    super();
    this.state = {
      posts: [],
      post: {
        postName: " ",
        imageUrl: " ",
        description: " "
      },

      isUpdating: false
    };
  }

  componentDidMount() {
    let auth = {
      headers: {
        authorization: localStorage.getItem("token")
      }
    };
    axios
      .get("https://backend-art.herokuapp.com/api/posts", auth)
      .then(res => {
        console.log(res.data);
        this.setState({ posts: res.data });
      })
      .catch(err => console.log(err));
  }
  deletePost = id => {
    let auth = {
      headers: {
        authorization: localStorage.getItem("token")
      }
    };
    axios
      .delete(`https://backend-art.herokuapp.com/api/posts/${id}`, auth)
      .then(res => {
        this.setState({
          posts: res.data
        });
      })
      .catch(res => {
        this.setState({
          posts: res.data
        });
      });
  };
  handleCreate = userObject => {
    axios
      .post("https://backend-art.herokuapp.com/api/posts", userObject)
      .then(res => {
        console.log("data", res.data);
        this.setState({ posts: res.data });
      })
      .catch(err => console.log(err));
  };

  updatePost = ev => {
    ev.preventDefault();
    let auth = {
      headers: {
        authorization: localStorage.getItem("token")
      }
    };
    axios
      .put(
        `https://backend-art.herokuapp.com/api/posts/${this.state.post.id}`,
        this.state.post,
        auth
      )
      .then(res => {
        console.log("homepage", res);
        this.setState({
          posts: res.data,
          isUpdating: false,
          post: {
            postName: " ",
            imageUrl: " ",
            description: " "
          }
        });
      })
      .catch(res => {
        this.setState({
          posts: res.data
        });
      });
  };

  editPost = id => {
    const postToEdit = this.state.posts.find(post => id === post.id);
    console.log("homepage", postToEdit);
    this.setState({
      post: postToEdit,
      isUpdating: true
    });
  };
  handleChanges = ev => {
    this.setState({
      post: { ...this.state.post, [ev.target.name]: ev.target.value }
    });
  };

  newPost = ev => {
    ev.preventDefault();
    this.setState({
      post: {
        postName: " ",
        imageUrl: " ",
        description: " "
      }
    });
    this.handleCreate(this.state.post);
    console.log(this.state.post);
  };
  render() {
    return (
      <div>
        <div className="main-items">
          <DeletePost deletePost={this.deletePost} id={this.post.id} />
          <EditPost editPost={this.editPost} id={this.post.id} />

          <NewPost
            handleChanges={this.handleChanges}
            newPost={this.newPost}
            post={this.state.post}
            isUpdating={this.state.isUpdating}
            updatePost={this.updatePost}
          />
        </div>
      </div>
    );
  }
}

export default Homepage;

/*

{ this.props.posts.map(post => {
    <p>{post.postName}</p>
        <p>{post.imageUrl}</p>
        <p>{post.description}</p>
        */
