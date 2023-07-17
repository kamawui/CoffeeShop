import {Component} from "react";
import "./app.css";
import Header from "../header/header";
import Description from "../main/description/description";
import CoffeeRangePanel from "../main/coffee-range-panel/coffee-range-panel";
import Footer from "../footer/footer";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    image: "/coffee-image.png",
                    name: "Brazil Santos 1 kg",
                    country: "Brazil",
                    price: "6.99$",
                    id: 1
                },
                {
                    image: "/coffee-image.png",
                    name: "Jacobs Monarch 1 kg",
                    country: "Columbia",
                    price: "6.99$",
                    id: 2
                },
                {
                    image: "/coffee-image.png",
                    name: "Don Pablo 1 kg",
                    country: "Columbia",
                    price: "5.99$",
                    id: 3
                },
                {
                    image: "/coffee-image.png",
                    name: "Java 1 kg",
                    country: "Kenya",
                    price: "8.99$",
                    id: 4
                },
                {
                    image: "/coffee-image.png",
                    name: "NESCAFE CLASICO 1 kg",
                    country: "Brazil",
                    price: "8.99$",
                    id: 5
                },
                {
                    image: "/coffee-image.png",
                    name: "KENYA-AA 1 kg",
                    country: "Kenya",
                    price: "4.99$",
                    id: 6
                },
            ],
        }
        this.size = 6;
        this.dataCache = this.state.data;
    }

    search = (name) => {
        const newData = [];
        name = name.toLowerCase();

        for (let i = 0; i < this.dataCache.length; i++) {
            if (name === this.dataCache[i].name.substring(0, name.length).toLowerCase()) {
                newData.push(this.dataCache[i]);
            }
        }

        this.setState(({data}) => {
            return {
                data: newData
            }
        })
    }

    showAll = () => {
        this.setState(({data}) => {
            return {
                data: this.dataCache
            }
        })
    }

    filterBrazil = () => {
        this.setState(({data}) => {
            return {
                data: this.dataCache.filter(obj => obj.country === "Brazil")
            }
        })
    }

    filterKenya = () => {
        this.setState(({data}) => {
            return {
                data: this.dataCache.filter(obj => obj.country === "Kenya")
            }
        })
    }

    filterColumbia = () => {
        this.setState(({data}) => {
            return {
                data: this.dataCache.filter(obj => obj.country === "Columbia")
            }
        })
    }

    render() {
        return (
            <div className="app" >
                <Header />
                <Description />
                <CoffeeRangePanel data={this.state.data} search={this.search} showAll={this.showAll}
                                  filterBrazil={this.filterBrazil} filterKenya={this.filterKenya} filterColumbia={this.filterColumbia}/>
                <Footer />
            </div>
        )
    }
}

export default App;