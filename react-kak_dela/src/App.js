import React, { useState } from "react";
import "./App.css";
import PostList from "./components/PostList";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JavaScript", body: "Description" },
    { id: 2, title: "HTML", body: "Description" },
    { id: 3, title: "CSS", body: "Description" },
  ]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  function addNewPost(e) {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      title,
      body
      
    };
    console.log(newPost);
    setPosts([...posts, newPost]);
    setBody("")
    setTitle("")
  }

  return (
    <div className="App">
      <form>
        <input
          type="text"
          placeholder="Name"
          id="name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          autoComplete="off"
        />
        <input
          type="text"
          placeholder="Description"
          id="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          autoComplete="off"
        />
        <button onClick={addNewPost}>Create post</button>
      </form>{" "}
      <PostList posts={posts} title="List of programming languages" />
    </div>
  );
}

export default App;
