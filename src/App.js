import "./App.css";
import React from "react";
import Header from "./components/header/header";
import Slidebar from "./components/Slidebar/Slidebar";
import Feed from "./components/Feed/Feed";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import Login from "./components/Login/Login";
function App() {
  const user = useSelector(selectUser);
  return (
    <div className="app">
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Slidebar />
          <Feed />
          {/*Widgets*/}
        </div>
      )}
    </div>
  );
}

export default App;
