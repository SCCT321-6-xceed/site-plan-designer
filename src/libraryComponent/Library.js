import React from "react";
import { Grid } from "@mui/material";
import TopLib from "./TopLib";
// import MainLib from "./MainLib";
// import LeftLib from "./LeftLib";
import NewLibrary from "./NewLibrary";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Library = () => {
  const [loginStatus, setLoginStatus] = useState(false);
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
