import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Menu from "./components/Menu";
import routes from "./routes";

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    {/* Menu */}
                    <Menu />
                    {/* Content */}
                    <Switch>{this.showContentMenus(routes)}</Switch>
                </div>
            </Router>
        );
    }

    showContentMenus = (router) => {
        var result = null;
        if (router.length > 0) {
            result = router.map((route, index) => {
                return (
                    <Route
                        index={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.main}
                    />
                );
            });
        }
        return result;
    };
}

export default App;
