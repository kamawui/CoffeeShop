import Description from "../main/description/description";
import CoffeeRangePanel from "../main/coffee-range-panel/coffee-range-panel";

function Main({descriptionData, logo, data, search, filter, goodsPanelData, burgerLogo}) {
    return (
        <div>
            <Description data={descriptionData} logo={logo}/>
            <CoffeeRangePanel data={data} search={search} filter={filter} panelData={goodsPanelData}
                              burgerLogo={burgerLogo}/>
        </div>
    )
}

export default Main;