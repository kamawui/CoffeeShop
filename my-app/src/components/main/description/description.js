import {Component} from "react";
import "./description.css";

class Description extends Component {
    render() {
        const {data, logo} = this.props;

        return (
            <div className="wrapper">
                <div className="description">
                    <div className="descriptionImage" style={{backgroundImage: `url("/description-image.png")`}}></div>
                    <div className="descriptionText">
                        <div>
                            <h2>{data.header}</h2>
                            <div className="descriptionLogo">
                                <div className="line"></div>
                                {logo}
                                <div className="line"></div>
                            </div>
                            {data.description}
                        </div>
                    </div>
                </div>
                <div className="separator"></div>
            </div>
        )
    }
}

export default Description;