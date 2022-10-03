import React from "react";
import classNames from "classnames";
import { Container } from "reactstrap";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Testing from './Testing'
import Topbar from "./Topbar";
import Userdetailstable from "../Userdetailstable";
import "antd/dist/antd.less"
import Login from "../views/Login";

import Forgot from "../views/Forgot";
import Register from "../views/Register";
import SideBar from "../sidebar/SideBar";


// 


const Content = ({ sidebarIsOpen, toggleSidebar }) => (

<>
    

  <Container
    fluid
    className={classNames("content", { "is-open": sidebarIsOpen })}
  >
    <Topbar toggleSidebar={toggleSidebar} />
    <Routes>
      <Route exact path="/" element={<Testing/>}  />
      <Route exact path="/Userdetailstable" element={<Userdetailstable/>} />
      <Route exact path="/Testing" element={<Testing/>} />
      <Route exact path='/login' element={<Login/>} />
        <Route exact path='/register' element={<Register/>} />
        <Route exact path='/forgot-password' element={<Forgot/>} />

      <Route exact path="/sidebar" element={<SideBar/>} />
      <Route exact path="/Pages" component={() => "Pages"} />
      <Route exact path="/faq" component={() => "FAQ"} />
    
      <Route exact path="/Home-1" component={() => "Home-1"} />
      <Route exact path="/Home-2" component={() => "Home-2"} />
      <Route exact path="/Home-3" component={() => "Home-3"} />
      <Route exact path="/Page-1" component={() => "Page-1"} />
      <Route exact path="/Page-2" component={() => "Page-2"} />
      <Route exact path="/page-1" component={() => "page-1"} />
      <Route exact path="/page-2" component={() => "page-2"} />
      <Route exact path="/page-3" component={() => "page-3"} />
      <Route exact path="/page-4" component={() => "page-4"} />
   
    
      
    </Routes>
  </Container>
  </>
);

export default Content;
