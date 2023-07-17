import "./coffee-range.css";
import CoffeeItem from "../coffee-item/coffee-item";

function CoffeeRange({data}) {
    const elements = data.map((el, i) => {
        const {id, image, name, country, price} = el;
        return (
            <CoffeeItem key = {id} image={image} name={name} country={country} price={price}/>
        );
    })
    return (
        <div className="itemsGroup">
            {elements}
        </div>
    )
}

export default CoffeeRange;