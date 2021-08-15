import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtEmail: "",
            txtPassword: "",
        };
    }

    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === "checkbox" ? target.checked : target.value;
        this.setState({
            [name]: value,
        });
    };

    onLogin = (e) => {
        e.preventDefault();
        var { txtEmail, txtPassword } = this.state;

        if (txtEmail === "admin@gmail.com" && txtPassword === "admin") {
            localStorage.setItem(
                "user",
                JSON.stringify({
                    email: txtEmail,
                    password: txtPassword,
                })
            );
        }
    };

    render() {
        var { txtEmail, txtPassword } = this.state;
        var loggedInUser = localStorage.getItem("user");
        var { location } = this.props;

        if (loggedInUser !== null) {
            return (
                <Redirect
                    push
                    to={{
                        pathname: "/products",
                        state: {
                            from: location,
                        },
                    }}
                />
            );
        }

        return (
            <div className="row justify-content-center">
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <form onSubmit={this.onLogin}>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">
                                Email address
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="Enter email"
                                name="txtEmail"
                                value={txtEmail}
                                onChange={this.onChange}
                            />
                            <small
                                id="emailHelp"
                                className="form-text text-muted"
                            >
                                We'll never share your email with anyone else.
                            </small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">
                                Password
                            </label>
                            <input
                                type="password"
                                className="form-control"
                                id="exampleInputPassword1"
                                placeholder="Password"
                                name="txtPassword"
                                value={txtPassword}
                                onChange={this.onChange}
                            />
                        </div>
                        <div className="form-check">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                id="exampleCheck1"
                            />
                            <label
                                className="form-check-label"
                                htmlFor="exampleCheck1"
                            >
                                Check me out
                            </label>
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Login
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;
