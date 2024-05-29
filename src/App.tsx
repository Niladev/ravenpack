import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Posts } from "./pages/Posts";
import { Post } from "./pages/Post";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Posts />} />
      <Route path="/user/:userId" element={<Posts />} />
      <Route path="/post/:postId" element={<Post />} />
    </Routes>
  );
};

export default App;
