

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => setPost(response.data))
      .catch(error => console.error("Error fetching post:", error));

    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then(response => setComments(response.data))
      .catch(error => console.error("Error fetching comments:", error));
  }, [id]);

  const handleAddComment = (e) => {
    e.preventDefault();
    setComments([...comments, { body: newComment }]);
    setNewComment("");
  };

  if (!post) return <p className="text-center mt-8 text-gray-700">Loading...</p>;

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-blue-600">{post.title}</h1>
        <p className="text-gray-700 mt-4">{post.body}</p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8">Comments</h2>
        <div className="space-y-4 mt-4">
          {comments.map((comment, index) => (
            <p key={index} className="bg-white p-4 rounded-lg shadow-sm">
              {comment.body}
            </p>
          ))}
        </div>

        <form 
          className="mt-8 bg-white p-4 rounded-lg shadow-md" 
          onSubmit={handleAddComment}>
          <input 
            value={newComment} 
            onChange={(e) => setNewComment(e.target.value)} 
            placeholder="Add a comment" 
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
          />
          <button 
            type="submit" 
            className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
          >
            Add Comment
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostDetails;
