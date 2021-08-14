import React, { Component } from "react";
import { NavLink, Route } from "react-router-dom";
import product from "./Product";

class Products extends Component {
    render() {
        var products = [
            {
                id: 1,
                slug: "iphone",
                name: "iPhone X",
                price: 3500000,
            },
            {
                id: 2,
                slug: "samsung",
                name: "Samsung Galaxy Note 20",
                price: 2000000,
            },
            {
                id: 3,
                slug: "oppo",
                name: "Oppo meo meo",
                price: 1200000,
            },
        ];

        var { match } = this.props;
        var url = match.url;

        var result = products.map((product, index) => {
            return (
                <NavLink to={`${url}/${product.slug}`} key={index}>
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
                <div className="row justify-content-center">
                    <Route path="/products/:slug" component={product} />
                </div>
            </div>
        );
    }
}

export default Products;
