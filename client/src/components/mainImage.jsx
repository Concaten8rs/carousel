import React from "react";
import SlideGenerator from "./slideGenerator.jsx";

class MainImage extends React.Component {
    constructor(props) {
        super(props);
    }

    
    render() {
        // console.log(this.props, "mainImage props")
        if (this.props.imageObj.content !== undefined) {
            // do something 
            return (
                <div className="mainImageDiv">
                    {/* <img src={this.props.imageObj.content} /> */}
                {this.props.images.map((imageObj, index) => {
                    return <SlideGenerator key={imageObj._id} image={imageObj.content} index={index}/>
                })}
                </div>
            )
        } else {
            return null;
        }
    }
}

export default MainImage;
// magnify(imgID) {
//     console.log("magnify triggered")
//     let image = document.getElementsByClassName(imgID);
//     console.log(image, "image")
//     let zoomScale = "3";

//     // make a component that shows the magnify property
//     let zoom = document.createElement("div");
//     zoom.setAttribute("class", "imgMagnifierElement");

//     // Insert magnifier
//     image.parentElement.insertBefore(zoom, image);

//     // Set background properties for zoom
//     zoom.style.backgroundImage = "url('" + image.src + "')";
//     zoom.style.backgroundRepeat = "no-repeat";
//     zoom.style.backgroundSize = (image.width * zoomScale) + "px " + (image.height * zoomScale) + "px";
//     let bw = 3;
//     let w = zoom.offsetWidth / 2;
//     let h = zoom.offsetHeight / 2;

//     // exec the zoom func when somebody moves mouse over the img
//     zoom.addEventListener("mousemove", zoomFunc);
//     // image.addEventListener("mousemove", zoomFunc)

//     // the zoomFunc
//     function zoomFunc(e) {
//         let x, y;

//         // prevent default for e;
//         e.preventDefault();

//         // get the cursors position (x and y cood)
//         let cursorPosition = getPosition(e);
//         x = cursorPosition.x;
//         y = cursorPosition.y;

//         // Prevent the magnifier from being positioned outside the image
//         if (x > image.width - (w / zoomScale)) {x = image.width - (w / zoomScale);}
//         if (x < w / zoomScale) {x = w / zoomScale;}
//         if (y > image.height - (h / zoomScale)) {y = image.height - (h / zoomScale);}
//         if (y < h / zoomScale) {y = h / zoomScale;}
//         // Set the position of the magnifier
//         zoom.style.left = (x - w) + "px";
//         zoom.style.top = (y - h) + "px";
//         // Display what the magnifier "sees"
//         zoom.style.backgroundPosition = "-" + ((x * zoomScale) - w + bw) + "px -" + ((y * zoomScale) - h + bw) + "px";
//     }
//     function getPosition(e) {
//         let a, x = 0, y = 0;
//         e = e || window.event;
//         // Get the x and y positions of the image
//         a = image.getBoundingClientRect();
//         // Calculate the cursor's x and y coordinates, relative to the image
//         x = e.pageX - a.left;
//         y = e.pageY - a.top;
//         // Consider any page scrolling
//         x = x - window.pageXOffset;
//         y = y - window.pageYOffset;
//         return {x : x, y : y};
//     }
// }

// componentDidMount() {
//     this.magnify("mainImage");
// }
