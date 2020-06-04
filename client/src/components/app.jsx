import React from "react";
import axios from "axios";
import Banner from "./banner.jsx";
import Configurations from "./configurations.jsx";
import ImageCarousel from "./imageCarousel.jsx";
import Modal from "./modal.jsx";
// import styles from "../style.module.css";

let randomNum = Math.floor(Math.random() * 10000000);

class CaroApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            product : 'Cheapest Black T Shirt',
            images: [],
            displayedImage: ''
        }
    }

    componentDidMount() {
        axios.get(`/api/products/${randomNum}`)
          .then((response) => {
              this.setState({
                  images: response.data,
                  displayedImage: response.data[0].photo_url
              })
          })
          .catch((err) => {
              console.log(err);
          })
    }

    render() {
        // console.log(this.state, "app state")
        // console.log(styles.contents, "style!")
        return (
            <div className="react-app">
                <Banner productName={this.state.product}/>
                <div className="contents">
                <ImageCarousel images={this.state.images} displayedImage={this.state.displayedImage}/>
                <Configurations price={this.state.product.price} rating={this.state.product.rating} sizes={this.state.product.sizes}/>
                <Modal />
                </div>
            </div>
        )
    }
}

export default CaroApp;