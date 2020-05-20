import React from "react";
import ImageCollection from "./imageCollection.jsx";
import MainImage from "./mainImage.jsx";

class ImageCarousel extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        // console.log(this.props.images, "images in imageCarasol")
        if (this.props.images !== undefined) {
            // do something
            return (
                <div className="imageCarousel">
                    <div className="imageCollection">
                        {this.props.images.map((image, index) => {
                            return <ImageCollection key={image._id} id={image._id} image={image.content} tweet={image.tweet} index={index}/>
                        })}
                    </div>
                    <div className="displayedImage">
                        <MainImage imageObj={this.props.displayedImage} images={this.props.images}/> 
                    </div>
                </div>
            )
        } else {
            // do something else
            return null;
        }
    }
}

export default ImageCarousel;