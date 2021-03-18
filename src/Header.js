import React from "react";
import "./Header.css";
import Person from "@material-ui/icons/Person";
import Forum from "@material-ui/icons/Forum";
import IconButton from "@material-ui/core/IconButton";


const localpath = process.env.PUBLIC_URL + '/assets/images/';




function Header() {
    return(    
        <div className = "header">
        <IconButton>
        <Person fontSize = "large" className="header__icon"/>
        </IconButton>


        <img
        className = "header__logo"
        src = {localpath + 'shoelogo.png'}/>

        <IconButton>
        <Forum fontSize = "large" className="header__icon"/>
        </IconButton>
        </div>

        );
}

export default Header;