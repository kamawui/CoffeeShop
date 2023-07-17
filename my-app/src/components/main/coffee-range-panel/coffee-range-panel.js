import "./coffee-range-panel.css";
import CoffeeSearch from "./coffee-search/coffee-search";
import CoffeeFilter from "./coffee-filter/coffee-filter";
import CoffeeRange from "./coffee-range/coffee-range";

function CoffeeRangePanel({data, search, showAll, filterBrazil, filterKenya, filterColumbia}) {
    return (
        <div className="coffee-range-panel">
            <div className="nav-bar">
                <CoffeeSearch search={search}/>
                <CoffeeFilter showAll={showAll}
                              filterBrazil={filterBrazil} filterKenya={filterKenya} filterColumbia={filterColumbia}/>
            </div>
            <CoffeeRange data={data}/>
        </div>
    )
}

export default CoffeeRangePanel;