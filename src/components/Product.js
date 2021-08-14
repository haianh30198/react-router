import React, { Component } from "react";

class Product extends Component {
    render() {
        var { match } = this.props;
        var slug = match.params.slug;

        return (
            <div>
                Product Details: <b>"{slug}"</b>
            </div>
        );
    }
}

export default Product;
