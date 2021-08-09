import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

const menus = [
    {
        name: "Home",
        to: "/",
        exact: true,
    },
    {
        name: "About",
        to: "/about",
        exact: false,
    },
    {
        name: "Contact",
        to: "/contact",
        exact: false,
    },
];

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
                    <ul className="navbar-nav">{this.showMenus(menus)}</ul>
                </div>
            </nav>
        );
    }

    showMenus = (menus) => {
        var result = null;
        if (menus.length > 0) {
            result = menus.map((menu, index) => {
                return (
                    <MenuLink
                        key={index}
                        label={menu.name}
                        to={menu.to}
                        activeOnlyWhenExact={menu.exact}
                    />
                );
            });
        }
        return result;
    };
}

export default Menu;
