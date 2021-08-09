import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    return (
        <Route
            path={to}
            exact={activeOnlyWhenExact}
            children={({ match }) => {
                var active = match ? "active" : "";
                return (
                    <li className={`nav-item ${active}`}>
                        <Link className="nav-link" to={to}>
                            {label}
                        </Link>
                    </li>
                );
            }}
        />
    );
};

class Menu extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/#">
                    <img
                        src="https://getbootstrap.com/docs/4.1/assets/brand/bootstrap-solid.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt=""
                    />
                    Bootstrap
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <MenuLink
                            label="Home"
                            to="/"
                            activeOnlyWhenExact={true}
                        />
                        <MenuLink
                            label="About"
                            to="/about"
                            activeOnlyWhenExact={false}
                        />
                        <MenuLink
                            label="Contact"
                            to="/contact"
                            activeOnlyWhenExact={false}
                        />
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Menu;
