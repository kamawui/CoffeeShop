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
        const {showAll, filterBrazil, filterKenya, filterColumbia} = this.props;

        return (
            <div className="coffeeFilter">
                <p className="filter-label">Or filter</p>
                <button className="all btn-filter" onClick={showAll}>{this.state.filters[0].title}</button>
                <button className="brazil btn-filter" onClick={filterBrazil}>{this.state.filters[1].title}</button>
                <button className="kenya btn-filter" onClick={filterKenya}>{this.state.filters[2].title}</button>
                <button className="columbia btn-filter" onClick={filterColumbia}>{this.state.filters[3].title}</button>
                <div className="dropdown-menu">
                    <div className="dropdown-value">{this.state.dropdownValue}</div>
                    <button className="dropdown" onClick={() => this.showDropdown()}>
                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                             width="15px" height="15px" viewBox="0 0 1024 1024" enable-background="new 0 0 1024 1024">
                            <rect fill="none" width="15" height="15"/>
                            <path d="M585.757,827.859l407.68-408.861c40.926-41.044,40.926-107.614,0-148.671c-40.924-41.058-107.313-41.058-148.237,0L511.688,604.853L178.128,270.327c-40.924-41.058-107.313-41.058-148.212,0C9.44,290.875,0,317.642,0,344.542c0,26.913,9.44,53.934,29.916,74.456L437.57,827.859C478.496,868.904,544.857,868.904,585.757,827.859z"/>
                        </svg>
                    </button>
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