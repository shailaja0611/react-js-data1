
import React, { useState, useEffect } from 'react';

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [socket, setSocket] = useState(null);

    useEffect(() => {
        const ws = new WebSocket('ws://localhost:4000');
        setSocket(ws);

        ws.onmessage = (event) => {
            setMessages((prev) => [...prev, event.data]);
        };

        return () => {
            ws.close();
        };
    }, []);

    const sendMessage = () => {
        if (input) {
            socket.send(input);
            setInput('');
        }
    };

    return (
        <div>
            <div>
                {messages.map((msg, index) => (
                    <div key={index}>{msg}</div>
                ))}
            </div>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => (e.key === 'Enter' ? sendMessage() : null)}
            />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
};

export default Chat;
