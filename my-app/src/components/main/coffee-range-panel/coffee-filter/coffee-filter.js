import {Component} from "react";
import "./coffee-filter.css";

class CoffeeFilter extends Component {
    render() {
        const {showAll, filterBrazil, filterKenya, filterColumbia} = this.props;

        return (
            <div className="coffeeFilter">
                <p>Or filter</p>
                <button className="all btn-filter" onClick={showAll}>All</button>
                <button className="brazil btn-filter" onClick={filterBrazil}>Brazil</button>
                <button className="kenya btn-filter" onClick={filterKenya}>Kenya</button>
                <button className="columbia btn-filter" onClick={filterColumbia}>Columbia</button>
            </div>
        )
    }
}

export default CoffeeFilter;