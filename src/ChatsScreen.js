import React,{useState} from 'react';
import './ChatsScreen.css';
import Avatar from "@material-ui/core/Avatar";


function ChatsScreen() {

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
        </div>
    );
}

export default ChatsScreen
