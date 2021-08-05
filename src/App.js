import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";

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
                                <li className="nav-item active">
                                    <a className="nav-link" href="/#">
                                        Home{" "}
                                        <span className="sr-only">
                                            (current)
                                        </span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/#">
                                        Features
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    {/* Content */}
                    <Route path="/" exact component={Home} />
                    <Route path="/about" component={About} />
                </div>
            </Router>
        );
    }
}

export default App;