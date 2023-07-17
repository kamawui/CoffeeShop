import {Component} from "react";
import "./coffee-item.css";

class CoffeeItem extends Component {
    render() {
        const {key, image, name, country, price} = this.props;
        return (
            <div className="coffeeCard">
                <div className="emptyDiv"></div>
                <div className="image" style={{backgroundImage: `url(${image})`}}></div>
                <p className="name">{name}</p>
                <p className="country">{country}</p>
                <p className="price">{price}</p>
            </div>
        )
    }
}

export default CoffeeItem;