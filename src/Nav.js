import React, { useEffect, useState } from "react";



function Nav(){

const [show, handleShow] = useState(false);
const transitionNavBar = () =>{
    if(window.scrollY > 100){
        handleShow(true);
    }
    else{
        handleShow(false);
    }
}

useEffect(() => {
window.addEventListener("scroll",transitionNavBar);
return () =>window.removeEventListener("scroll",transitionNavBar);
},[]);
    return (
        <div className={`nav ${show && 'nav__black'}`}>
        <div className="nav">
        <div className="nav__contents">
        <img 
        className="nav_logo"
        src="" /*logo*/
        alt=""
        />
        <img 
        className="nav_avatar"
        src=""/*avatar*/
        alt= ""
        />
        </div>
        </div>
    </div>
    );

}

export default Nav;