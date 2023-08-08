import {Component} from "react";
import "./coffee-search.css";

class CoffeeSearch extends Component {
    onValueChange = (e) => {
        this.props.search(e.target.value);
    }

    render() {
        const {data} = this.props;

        return (
            <div className="coffeeSearch">
                <form>
                    <label>{data}</label>
                    <input onChange={this.onValueChange} type="text" placeholder="start typing here..."/>
                </form>
            </div>
        )
    }
}

export default CoffeeSearch;