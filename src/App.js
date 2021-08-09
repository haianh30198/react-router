import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    return (
        <Route
            path={to}
            exact={activeOnlyWhenExact}
            children={({ match }) => {
                var active = match ? "nav-item active" : "";
                return (
                    <li className={active}>
                        <Link className="nav-link" to={to}>
                            {label}
                        </Link>
                    </li>
                );
            }}
        />
    );
};

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    {/* Menu */}
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
                        <div
                            className="collapse navbar-collapse"
                            id="navbarNav"
                        >
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
                    {/* Content */}
                    <Route path="/" exact component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                </div>
            </Router>
        );
    }
}

export default App;
