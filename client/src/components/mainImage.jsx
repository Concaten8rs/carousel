import React from "react";
import SlideGenerator from "./slideGenerator.jsx";

const MainImage = (props) => {
    return (
        <div className="mainImageDiv">
            <img src={props.displayedImage} />
        </div>
    )
}

export default MainImage;
