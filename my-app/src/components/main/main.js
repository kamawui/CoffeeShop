import Description from "../main/description/description";
import CoffeeRangePanel from "../main/coffee-range-panel/coffee-range-panel";

function Main({data, search, showAll, filterBrazil, filterKenya, filterColumbia}) {
    return (
        <div>
            <Description />
            <CoffeeRangePanel data={data} search={search} showAll={showAll}
                              filterBrazil={filterBrazil} filterKenya={filterKenya} filterColumbia={filterColumbia}/>
        </div>
    )
}

export default Main;