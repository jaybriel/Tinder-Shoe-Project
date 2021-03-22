import React from "react";
import "./Header.css";
import Person from "@material-ui/icons/Person";
import Forum from "@material-ui/icons/Forum";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Link, useHistory } from "react-router-dom";


const localpath = process.env.PUBLIC_URL + '/assets/images/';




function Header({backButton}) {
    const history = useHistory();
    return(    
        <div className = "header">
        
        {backButton ? (
            <IconButton onClick = {() => history.replace(backButton)}>
                <ArrowBackIosIcon fontSize="large" className="header__icon"/>
            </IconButton>
        ):(
            <IconButton>
                <Person fontSize = "large" className="header__icon"/>
            </IconButton>
        )}
        


        <Link to ="/">
        <img
        className = "header__logo"
        src = {localpath + 'shoelogo.png'}/>
        </Link>

        <Link to ="/chats">
        <IconButton>
        <Forum fontSize = "large" className="header__icon"/>
        </IconButton>
        </Link>
        </div>

        );
}

export default Header;