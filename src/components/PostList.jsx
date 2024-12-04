

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(response => setPosts(response.data))
      .catch(error => console.error("Error fetching posts:", error));
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">Blog Posts</h1>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {posts.map(post => (
            <div 
              key={post.id} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold text-gray-800">{post.title}</h2>
              <p className="text-gray-600 mt-2">{post.body.substring(0, 100)}...</p>
              <Link 
                to={`/posts/${post.id}`} 
                className="block text-blue-500 mt-4 hover:underline"
              >
                View More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostList;
