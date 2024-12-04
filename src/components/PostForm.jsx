

import React, { useState } from "react";
import axios from "axios";

const PostForm = ({ isEdit = false, postId = null }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = isEdit 
      ? `https://jsonplaceholder.typicode.com/posts/${postId}` 
      : "https://jsonplaceholder.typicode.com/posts";

    const method = isEdit ? "put" : "post";

    axios[method](url, { title, body })
      .then(() => alert(isEdit ? "Post updated!" : "Post created!"))
      .catch(error => console.error("Error submitting post:", error));
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <form 
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md" 
        onSubmit={handleSubmit}>
        <h1 className="text-2xl font-bold text-blue-600 mb-6">
          {isEdit ? "Edit Post" : "Create Post"}
        </h1>
        <input 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          placeholder="Title" 
          className="w-full mb-4 p-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
        />
        <textarea 
          value={body} 
          onChange={(e) => setBody(e.target.value)} 
          placeholder="Body" 
          rows="5" 
          className="w-full mb-4 p-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
        />
        <button 
          type="submit" 
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
        >
          {isEdit ? "Update Post" : "Create Post"}
        </button>
      </form>
    </div>
  );
};

export default PostForm;
