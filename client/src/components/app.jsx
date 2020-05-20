import React from "react";
import axios from "axios";
import Banner from "./banner.jsx";
import Configurations from "./configurations.jsx";
import ImageCarousel from "./imageCarousel.jsx";
import Modal from "./modal.jsx";
// import styles from "../style.module.css";

class CaroApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            product : {},
            displayedImageObj : {}
        };
    }

    stateUpdater(callback) {
        axios.get("http://127.0.0.1:3000/caro/fetch")
        .then(res => {
            // console.log(res.data[0])
            callback(null, res.data);
        })
        .catch(err => {callback(err)})
    }

    componentDidMount() {
        this.stateUpdater((err, data) => {
            if (err) throw "Error : " + err;
            this.setState({
                product : data[0],
                displayedImageObj : data[0].photos[0]
            })
        })
    }

    render() {
        // console.log(this.state, "app state")
        // console.log(styles.contents, "style!")
        return (
            <div className="react-app">
                <Banner productName={this.state.product.product_name}/>
                <div className="contents">
                <ImageCarousel images={this.state.product.photos} displayedImage={this.state.displayedImageObj}/>
                <Configurations price={this.state.product.price} rating={this.state.product.rating} sizes={this.state.product.sizes}/>
                <Modal />
                </div>
            </div>
        )
    }
}

export default CaroApp;