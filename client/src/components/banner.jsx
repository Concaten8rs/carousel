import React from "react";

class Banner extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        // console.log(this.props, 'props Banner')
        return (
            <div className="banner">
                <div className="bannerPath">
                    <span>
                        <a><u>Targe</u></a> / 
                        <a><u>Men</u></a> / 
                        <a><u>Men's clothing</u></a> / 
                        <a><u>shirts</u></a> / 
                        <a><u>T-shirts</u></a> / 
                        <a><u>Basic Tees</u></a>
                    </span>    
                </div> 
                <h1 className="productBanner">{this.props.productName}</h1>
                <div className="underBanner">
                <a ><u>Shop all Original Use</u></a>
                </div>
            </div>
            )
    }
}

export default Banner;