import {Component} from "react";
import "./coffee-filter.css";

class CoffeeFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filters: [
                {title: "All", function: this.props.showAll},
                {title: "Brazil", function: this.props.filterBrazil},
                {title: "Kenya", function: this.props.filterKenya},
                {title: "Columbia", function: this.props.filterColumbia},
            ],
            dropdownValue: "All"
        }
    }
    showDropdown = () => {
        document.querySelector(".dropdown-content").classList.toggle("active");
    }

     dropdownFilter = (value) => {
         this.setState(({dropdownValue}) => {
             return {
                 dropdownValue: value.title
             }
         })
         value.function();
         this.showDropdown();
    }

    render() {
        const {data, showAll, filterBrazil, filterKenya, filterColumbia, burgerLogo} = this.props;

        return (
            <div className="coffeeFilter">
                <p className="filter-label">{data}</p>
                <button className="all btn-filter" onClick={showAll}>{this.state.filters[0].title}</button>
                <button className="brazil btn-filter" onClick={filterBrazil}>{this.state.filters[1].title}</button>
                <button className="kenya btn-filter" onClick={filterKenya}>{this.state.filters[2].title}</button>
                <button className="columbia btn-filter" onClick={filterColumbia}>{this.state.filters[3].title}</button>

                <div className="dropdown-menu">
                    <div className="dropdown-value">{this.state.dropdownValue}</div>
                    <button className="dropdown" onClick={() => this.showDropdown()}>{burgerLogo}</button>
                    <div className="dropdown-content">
                        <p onClick={() => this.dropdownFilter(this.state.filters[0])}>{this.state.filters[0].title}</p>
                        <p onClick={() => this.dropdownFilter(this.state.filters[1])}>{this.state.filters[1].title}</p>
                        <p onClick={() => this.dropdownFilter(this.state.filters[2])}>{this.state.filters[2].title}</p>
                        <p onClick={() => this.dropdownFilter(this.state.filters[3])}>{this.state.filters[3].title}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default CoffeeFilter;