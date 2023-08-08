import {Component} from "react";
import "./footer.css";

class Footer extends Component {
    render() {
        const {data, logo} = this.props;

        return (
            <div className="footer">
                <div className="footerInfo">
                    <a>{data.logo}{data.footerContent[0]}</a>
                    <a>{data.footerContent[1]}</a>
                    <a>{data.footerContent[2]}</a>
                </div>
                <div className="footerLogo">
                    <div className="line"></div>
                    {logo}
                    <div className="line"></div>
                </div>
            </div>
        )
    }
}

export default Footer;