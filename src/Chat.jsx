import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import './Chat.css'; // Ensure to style accordingly

const socket = io('http://localhost:4000'); // Connect to the backend

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    useEffect(() => {
        socket.on('receiveMessage', (message) => {
            setMessages((prevMessages) => [...prevMessages, message]);
        });

        return () => {
            socket.off('receiveMessage');
        };
    }, []);

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (input.trim() === '') return;

        const userMessage = {
            id: messages.length + 1,
            text: input,
            sender: 'user',
        };
        setMessages((prevMessages) => [...prevMessages, userMessage]);
        socket.emit('sendMessage', userMessage); // Send message to server
        setInput('');
    };

    return (
        <div className="chat-form-container">
            <h2>Customer Support Chat</h2>
            <div className="chat-window">
                <div className="messages">
                    {messages.map((msg) => (
                        <div key={msg.id} className={`message ${msg.sender}`}>
                            <span className="message-sender">{msg.sender === 'user' ? 'You:' : 'Support:'}</span>
                            {msg.text}
                        </div>
                    ))}
                </div>
                <form onSubmit={handleSendMessage} className="chat-input-form">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Type your message..."
                        className="chat-input"
                    />
                    <button type="submit" className="chat-submit-button">Send</button>
                </form>
            </div>
        </div>
    );
};

export default Chat;
