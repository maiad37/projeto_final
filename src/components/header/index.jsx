import React from "react";
import "./style.css"
const Header = () => {
    return(
        <div class="ui secondary menu">
        <a class="item">
            Home
        </a>
        <a class="item">
            Messages
        </a>
        <a class="item active">
            Friends
        </a>
        <div class="right menu">
            <div class="item">
            <div class="ui icon input">
                <input type="text" placeholder="Search..."/>
                <i class="search link icon"></i>
            </div>
            </div>
            <a class="ui item">
            Logout
            </a>
        </div>
        </div>
    )
}

export default Header;