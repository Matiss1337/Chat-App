import React, {useEffect, useState} from 'react'

export interface Msg {
    room: string,
    author: string,
    message: string,
    time: string
}

export const Chat = ({socket, userName, room}) => {
const [msg, setMsg] = useState<string>("")
const [messages, setMessages] = useState<Msg[]>([])

const sendMsg = async () => {
    if(msg !== ""){
        const msgData: Msg = {
            room: room,
            author: userName,
            message: msg,
            time: new Date().toLocaleTimeString()
        }
        await socket.emit('send_message', msgData);
        setMessages((prevMessages) => [...prevMessages, msgData]);
    }
}

useEffect(() => {
    socket.on('receive_message', (data: Msg) => {
        setMessages((prevMessages) => [...prevMessages, data]);
    });
}, [socket]);


  return (
    <div className='Chat'>
        <div className="ChatHeader">
            <p>Live Chat</p>
        </div>
        <div className="ChatBody">
            {messages.map((messageContent, index) => {
                return (
                    <div className="Message" key={index}>
                        <h1>{messageContent.message}</h1>
                    </div>
                )
            })}
        </div>
        <div className="ChatFooter">
    <input type="text" placeholder="Type a message" 
            onChange={(event) => {setMsg(event.target.value)}}/>
            <button onClick={sendMsg}>&#9658;</button>
        </div>
    </div>
  )
}

