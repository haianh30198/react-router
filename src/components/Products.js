import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Products extends Component {
    render() {
        var products = [
            {
                id: 1,
                name: "iPhone X",
                price: 3500000,
            },
            {
                id: 2,
                name: "Samsung Galaxy Note 20",
                price: 2000000,
            },
            {
                id: 3,
                name: "Oppo meo meo",
                price: 1200000,
            },
        ];

        var { match } = this.props;
        console.log(match);

        var result = products.map((product, index) => {
            return (
                <NavLink to="" key={index}>
                    <li className="list-group-item">
                        {product.id} - {product.name} - {product.price}
                    </li>
                </NavLink>
            );
        });

        return (
            <div className="container">
                <h1>List of products</h1>
                <div className="row justify-content-center">
                    <ul className="list-group">{result}</ul>
                </div>
            </div>
        );
    }
}

export default Products;
