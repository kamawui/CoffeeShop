import "./coffee-range-panel.css";
import CoffeeSearch from "./coffee-search/coffee-search";
import CoffeeFilter from "./coffee-filter/coffee-filter";
import CoffeeRange from "./coffee-range/coffee-range";

function CoffeeRangePanel({panelData, data, search, filter, burgerLogo}) {
    return (
        <div className="coffee-range-panel">
            <div className="nav-bar">
                <CoffeeSearch search={search} data={panelData.search}/>
                <CoffeeFilter data={panelData.filter} filter={filter}
                              burgerLogo={burgerLogo}/>
            </div>
            <CoffeeRange data={data}/>
        </div>
    )
}

export default CoffeeRangePanel;