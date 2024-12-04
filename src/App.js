import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddPost from "./pages/AddPost";
import EditPost from "./pages/EditPost";
import PostDetails from "./components/PostDetails";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<AddPost />} /> {/* Route for PostForm to add a new post */}
      <Route path="/edit/:id" element={<EditPost />} /> {/* Route for PostForm to edit a post */}
      <Route path="/posts/:id" element={<PostDetails />} />
    </Routes>
  </Router>
);

export default App;
