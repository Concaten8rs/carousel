import React from "react";

class SlideGenerator extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        // console.log(this.props.image, "images in slidegenerator")
            // do something
            return (
                <div id={`slide-${this.props.index}`}>
                    <img src={this.props.image} />
                </div>
            )
    }

}

export default SlideGenerator;