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
        }
    }

    componentDidMount() {
        axios.get('/api/products/')
          .then((response) => {
              this.setState({
                  product: response.data[0],
                  displayedImageObj: response.data[0].photos[0]
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