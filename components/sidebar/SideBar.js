import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBriefcase,
  faPaperPlane,
  faQuestion,
  faImage,
  faCopy,faSignOut
} from "@fortawesome/free-solid-svg-icons";
import { NavItem, NavLink, Nav } from "reactstrap";
import classNames from "classnames";
import { Link } from "react-router-dom";
import userImage from './userImage.jpg';
import SubMenu from "./SubMenu";
import Selectlocation from "./Selectlocation";

// import './sidebarprofile.css'
const SideBar = ({ isOpen, toggle }) => (
  <div className={classNames("sidebar", { "is-open": isOpen })}>
    <div className="sidebar-header">
      <span color="info" onClick={toggle} style={{ color: "#fff" }}>
        &times;
      </span>
    
<div className="sidebar-item sidebar-header d-flex flex-nowrap"
style={{paddingTop:"1rem", borderBottom:"1px solid #cdcaca"}}
>
                        <div className="user-pic" style={{marginLeft:"2px"}}>
                            <img className="img-responsive img-rounded"
                            style={{width:"2rem", height:"2rem", borderRadius:"2rem"}}
                             src={userImage} alt="User " />
                        </div>
                        <div className="user-info" style={{margnBotton:"2px", marginLeft:"3px"}}>
                            <span className="user-name" >
                              
                                <strong style={{color:"#0404ff"}}>   Misbah Kounain</strong>
                            </span>

                            <p style={{color:"red"}}
                            >  <FontAwesomeIcon icon={faSignOut} style={{color:"red"}}/>Sign Out</p>
                        </div>


                                      </div>

<div className="selectlocation" style={{ borderBottom:"1px solid #cdcaca", padding:"4px"}}>
<Selectlocation/>
</div>

                                   
 
    </div>



    <div className="side-menu">
      <Nav vertical className="list-unstyled pb-3">
   
        {/* <p>  Dummy Heading</p> */}
        <NavItem>
          <NavLink tag={Link} to={"/about"}>
            <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
            Dashboard
          </NavLink>
        </NavItem>
        <SubMenu title="Administration" icon={faHome} items={submenus[0]} />
   
        <SubMenu title="Indent Managment" icon={faCopy} items={submenus[1]} />
        <NavItem>
          <NavLink tag={Link} to={"/pages"}>
            <FontAwesomeIcon icon={faImage} className="mr-2" />
            Portfolio
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to={"/faq"}>
            <FontAwesomeIcon icon={faQuestion} className="mr-2" />
            FAQ
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to={"/Userdetailstable"}>
            <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
            Contact
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  </div>
);

const submenus = [
  [
    {
      title: "Home 1",
      target: "/Testing",
    },
    {
      title: "Home 2",
      target: "/Userdetailstable",
    },
    {
      itle: "Home 3",
      target: "Home-3",
    },
  ],
  [
    {
      title: "Page 1",
      target: "Page-1",
    },
    {
      title: "Page 2",
      target: "Page-2",
    },
  ],
];

export default SideBar;
