import {Component} from "react";
import "./header.css";

class Header extends Component {
    render() {
        const {data} = this.props;
        return (
            <div className="header" style={{backgroundImage: `url("/header-image.png")`}}>
                <div className="coffeeInfo">
                    <a>{data.logo}{data.navigation[0]}</a>
                    <a>{data.navigation[1]}</a>
                    <a>{data.navigation[2]}</a>
                </div>
                <h1>{data.header}</h1>
            </div>

        )
    }
}

export default Header;