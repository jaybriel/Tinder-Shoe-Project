import React,{useEffect,useState} from 'react';
import TinderCard from "react-tinder-card";
import database from "./firebase";
import './TinderCards.css'

function TinderCards() {

    const [shoes,setShoes] = useState([]);
    
    //Piece of code which runs based on a condition
    useEffect(() => {
        //this is where the code runs

       const unsubscribe =  database
        .collection("shoes")
        .onSnapshot((snapshot) => 
            setShoes(snapshot.docs.map((doc) => doc.data())) //population of shoes data
        );

        return () => {
            unsubscribe();
        }

        //this will run ONCE when the component loads, and never again
    },[]);

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
    );
};

export default TinderCards
