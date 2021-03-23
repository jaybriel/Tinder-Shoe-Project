import React,{useState} from 'react';
import './ChatsScreen.css';
import Avatar from "@material-ui/core/Avatar";


function ChatsScreen() {

    const [input, setInput] = useState("");

    const [messages, setMessages] = useState([
        {
            name: 'Ellen',
            image: '...',
            message: 'Whats up'
        },

        {
            message: 'Hello'
        }
    ]);


    const handleSend = (e) => {
        e.preventDefault();
        
        if(input){
            setMessages([...messages, {message: input}]);     
        }
        
        setInput("");
    };

    return (
        <div className = "chatsScreen">
            <p className = "chatsScreen__timeStamp">
                You matched with Ellen on 10/08/20
            </p>


            {messages.map(message => 
                message.name ? (
                <div className = "chatsScreen__message">
                    <Avatar className = "chat__image" 
                            alt={message.name} 
                            src={message.image}/>
                    <p className = "chatsScreen__text">{message.message}</p>
                </div>) : (
                    <div className = "chatsScreen__message">
                    <p className = "chatsScreen__textUser">{message.message}</p>
                    </div>
                    
                )
            )}
                <form className = "chatsScreen__input">
                    <input
                        value = {input}
                        onChange = {(e) => setInput(e.target.value)}
                        className = "chatsScreen__inputField" 
                        type = "text" 
                        placeholder = "Type a message"/>
                    <button 
                        onClick = {handleSend}  
                        className = "chatsScreen__inputButton"
                        type = "submit">SEND</button>
                </form>
        </div>
    );
};

export default ChatsScreen
