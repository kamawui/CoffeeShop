import {Component} from "react";
import "./coffee-search.css";

class CoffeeSearch extends Component {
    onValueChange = (e) => {
        this.props.search(e.target.value);
    }

    render() {
        const {search} = this.props;

        return (
            <div className="coffeeSearch">
                <form>
                    <label>Looking for</label>
                    <input onChange={this.onValueChange} type="text" placeholder="start typing here..."/>
                </form>
            </div>
        )
    }
}

export default CoffeeSearch;