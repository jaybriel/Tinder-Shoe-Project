import React,{useState} from 'react';
import TinderCard from "react-tinder-card";
import './TinderCards.css'

function TinderCards() {

    const [shoes,setShoes] = useState([
        {
            name: "Yeezy 350",
            url: "https://sneakernews.com/wp-content/uploads/2021/02/yeezy-350-ash-stone-store-list.jpg"
        },
        {
            name: "Jordan 1 dior",
            url: "https://theshoesbrand.com/wp-content/uploads/2020/12/air-jordan-1-x-dior-1.jpg"
        }
    ]);

    //react way in inserting item in array
    //setPeople([...people,'sonny,'qazi'])
    return (
        <div>
            <div className = "tinderCards__CardContainer">
            {shoes.map(shoes => (
                <TinderCard
                className = "swipe"
                // Always give KEYS in REACT
                // Allows REACT to efficiently re-render a LIST
                // Makes your APP SUPER fast
                key = {shoes.name}
                preventSwipe={["up","down"]} 
                >
                    <div 
                    className="card"
                    style={{backgroundImage:`url(${shoes.url})`}}>
                     <h3>{shoes.name}</h3>
                    </div>
                </TinderCard>
            ))}
            </div>
        </div>
    )
}

export default TinderCards
