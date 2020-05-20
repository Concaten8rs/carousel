import React from "react";

class ImageCollection extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        // console.log(this.props, "imagecollection props")
        return (
            <div className="imageElement">
                <a href={`#slide-${this.props.index}`}>
                <img src={this.props.image} />
                </a>
            </div>
        );
    }
}

export default ImageCollection;