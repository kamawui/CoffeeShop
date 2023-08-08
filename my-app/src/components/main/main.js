import Description from "../main/description/description";
import CoffeeRangePanel from "../main/coffee-range-panel/coffee-range-panel";

function Main({descriptionData, logo, data, search, showAll, filterBrazil, filterKenya, filterColumbia, goodsPanelData, burgerLogo}) {
    return (
        <div>
            <Description data={descriptionData} logo={logo}/>
            <CoffeeRangePanel data={data} search={search} panelData={goodsPanelData} showAll={showAll}
                              filterBrazil={filterBrazil} filterKenya={filterKenya} filterColumbia={filterColumbia}
                              burgerLogo={burgerLogo}/>
        </div>
    )
}

export default Main;