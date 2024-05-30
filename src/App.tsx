import { Routes, Route } from "react-router-dom";

import { Posts } from "./pages/Posts";
import { Post } from "./pages/Post";
import { Header } from "./components/Header";
import { User } from "./pages/User";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/user/:userId" element={<User />} />
        <Route path="/post/:postId" element={<Post />} />
      </Routes>
    </>
  );
};

export default App;
