import React, { useState, useEffect } from "react";
import Pandit from "../pages/Pandit";
import UserService from "../services/user.service";
import Layout from "./Layout";
const Home = () => {
  const [content, setContent] = useState("");
  useEffect(() => {
    UserService.getPublicContent().then(
      (response) => {
        console.log('00000888888888', response.data.Items);
        setContent(response.data.Items);
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();
        setContent(_content);
      }
    );
  }, []);
  return (
    <div className="container">
      <header className="jumbotron">
        <h3>{content}</h3>
      </header>
      {/* <Pandit /> */}
      <Layout />
    </div>
  );
};
export default Home;