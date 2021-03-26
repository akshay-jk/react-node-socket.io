import React, { useEffect } from 'react';
import io from "socket.io-client";

let clientSocket;

const Chat = () => {
    const ENDPOINT = 'http://localhost:5000';

    useEffect(() => {
        clientSocket = io(ENDPOINT, { transports: ['websocket', 'polling', 'flashsocket'] });
    }, []);

    return (
        <div>
            <p>ChatBox</p>
        </div>
    )
}

export default Chat;