import React from "react";
import ImageCollection from "./imageCollection.jsx";
import MainImage from "./mainImage.jsx";

const ImageCarousel = (props) => {
    return (
        <div className="imageCarousel">
            <div className="imageCollection">
                {props.images.map((image, index) => {
                    return <ImageCollection key={image.id} id={image.id} image={image.photo_url} index={index}/>
                })}
            </div>
            <div className="displayedImage">
                <MainImage displayedImage={props.displayedImage} images={props.images}/>
            </div>
        </div>
    )
}




export default ImageCarousel;