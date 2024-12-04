// src/api/postApi.js

export const fetchPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    return data;
  };
  
  export const fetchPostById = async (id) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await response.json();
    return data;
  };
  
  export const addPost = async (post) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(post),
    });
  
    if (!response.ok) {
      throw new Error('Failed to create post');
    }
  
    const data = await response.json();
    return data;
  };
  
  export const updatePost = async (id, post) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(post),
    });
  
    const data = await response.json();
    return data;
  };
  
  export const deletePost = async (id) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'DELETE',
    });
  
    if (!response.ok) {
      throw new Error('Failed to delete post');
    }
  
    return true;
  };
  