import React from "react";
import Frame2 from "./frame2";
import shoe from "../images/shoe_image.png"

export default function frame1(){
    return(
        <div className="frame1">
            <Frame2 />
            <img  src={shoe} alt=""/>
        </div>
    )
}