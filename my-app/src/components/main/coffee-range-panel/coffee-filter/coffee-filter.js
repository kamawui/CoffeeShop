import {Component} from "react";
import "./coffee-filter.css";

class CoffeeFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filters: [
                {title: "All", tag: "", /*function: this.props.showAll*/},
                {title: "Brazil", tag: "brazil", /*function: this.props.filterBrazil*/},
                {title: "Kenya", tag: "kenya", /*function: this.props.filterKenya*/},
                {title: "Columbia", tag: "columbia", /*function: this.props.filterColumbia*/},
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

         this.props.filter(value.tag);

         this.showDropdown();
    }

    render() {
        const {data, filter, burgerLogo} = this.props;
        const {filters} = this.state;

        return (
            <div className="coffeeFilter">
                <p className="filter-label">{data}</p>
                <button className="all btn-filter" onClick={() => filter(filters[0].tag)}>{filters[0].title}</button>
                <button className="brazil btn-filter" onClick={() => filter(filters[1].tag)}>{filters[1].title}</button>
                <button className="kenya btn-filter" onClick={() => filter(filters[2].tag)}>{filters[2].title}</button>
                <button className="columbia btn-filter" onClick={() => filter(filters[3].tag)}>{filters[3].title}</button>

                <div className="dropdown-menu">
                    <div className="dropdown-value">{this.state.dropdownValue}</div>
                    <button className="dropdown" onClick={() => this.showDropdown()}>{burgerLogo}</button>
                    <div className="dropdown-content">
                        <p onClick={() => this.dropdownFilter(filters[0])}>{filters[0].title}</p>
                        <p onClick={() => this.dropdownFilter(filters[1])}>{filters[1].title}</p>
                        <p onClick={() => this.dropdownFilter(filters[2])}>{filters[2].title}</p>
                        <p onClick={() => this.dropdownFilter(filters[3])}>{filters[3].title}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default CoffeeFilter;