/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import brand from "../images/brand_logo.png"

export default function Header(){
    return(
        <div className="header">
            <img src={brand} alt="brand-logo" />
            <ul>
                <li><a href="#">MENU</a></li>
                <li><a href="#">LOCATION</a></li>
                <li><a href="#">ABOUT</a></li>
                <li><a href="#">CONTACT</a></li>
            </ul>
            <button>Login </button>
        </div>
    )
}