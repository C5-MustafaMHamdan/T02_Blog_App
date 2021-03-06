import "./App.css";
import Login from "./login";
import Users from "./users";
import Posts from "./post";
import Info from "./profile";
import { Routes, Route } from "react-router-dom";
import Navy from "./navbar";
function App() {
  return (
    <div className="App">
      <Navy />
      <Routes>
        <Route path="/profile" element={<Info />} />
        <Route path="/users" element={<Users />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
