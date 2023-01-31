import React, {useEffect, useState} from 'react'

export const Chat = ({socket, userName, room}) => {

const [msg, setMsg] = useState<string>("")

const sendMsg = async () => {
    if(msg !== ""){
        const msgData = {
            room: room,
            author: userName,
            message: msg,
            time: new Date().toLocaleTimeString()
        }
        await socket.emit('send_message', msgData)
    }
}

useEffect(() => {
    socket.on('receive_message', (data) => {
        console.log(data.message)
    })
}, [socket])


  return (
    <div className='Chat'>
        <div className="ChatHeader">
            <p>Live Chat</p>
        </div>
        <div className="ChatBody"></div>
        <div className="ChatFooter">
    <input type="text" placeholder="Type a message" 
            onChange={(event) => {setMsg(event.target.value)}}/>
            <button onClick={sendMsg}>&#9658;</button>
        </div>
    </div>
  )
}
