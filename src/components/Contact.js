import React, { Component } from "react";
import { Prompt } from "react-router-dom";

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isChecked: false,
        };
    }

    onClick = (isChecked) => {
        this.setState({ isChecked });
    };

    render() {
        var { isChecked } = this.state;
        return (
            <div>
                This is Contact page
                <br />
                <button
                    type="button"
                    className="btn btn-success"
                    onClick={() => this.onClick(false)}
                >
                    Enable
                </button>
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => this.onClick(true)}
                >
                    Disable
                </button>
                <Prompt
                    when={isChecked}
                    message={(location) =>
                        `Bạn chắc muốn đi tên trang ${location.pathname}`
                    }
                />
            </div>
        );
    }
}

export default Contact;
