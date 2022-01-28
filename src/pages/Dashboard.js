import React from "react";
import Topbar from "../dashboardComponent/Topbar";
import Main from "../dashboardComponent/Main";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
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
      <Topbar />
 
      <Main />
    
    </div>
  );
};

export default Dashboard;
