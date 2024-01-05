import React from "react";
import flipkart from "../images/flipkart.png"
import amazon from "../images/amazon.png"

export default function Frame2(){
    return(
        <div className="frame2">
            <span className="text1">YOUR FEET DESERVE THE BEST</span>
            <span className="text2">
                YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE
                BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
            </span>
            <div className="buttons">
                <button className="shop-now">Shop Now</button>
                <button className="category">Category</button>
            </div>
            <div className="shop">
                <span>Also Available On</span>
                <div className="shops">
                    <img src={flipkart} alt="flipkart" />
                    <img src={amazon} alt="amazon"/>
                </div>
            </div>
        </div>
    )
}