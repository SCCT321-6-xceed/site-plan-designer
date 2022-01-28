import React from "react";
import TopLib from "./TopLib";
import NewLibrary from "./NewLibrary";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Library = () => {
  const [setLoginStatus] = useState(false);
  let history = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      setLoginStatus(false);
      history("/");
    }
  });

  return (
    <div>
      <TopLib />
      <NewLibrary />
    </div>
  );
};

export default Library;
