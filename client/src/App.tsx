import React, { useState} from 'react'
import './App.css'
import { io } from 'socket.io-client'
const socket = io('http://localhost:3001')
//this connect me to socket.io server
import { Chat } from './components/Chat'
import { Login } from './components/Login'
import { UserProvider } from './components/UserContext'

export const UserContext = React.createContext({})


function App() {
  const [userName, setUserName] = useState<string>("")
  const [room, setRoom] = useState<string>("")
  const [inChat, setInChat] = useState<boolean>(false)



const joinRoom = () => {
    if(userName!=="" && room!==""){
      socket.emit('join_room', room)
      setInChat(true)
    }
  }


  return (
    <UserProvider>
    <div className="App">
{!inChat && <Login/>}
<div className="Login">
<h3>Join the Chat!</h3>

<input type="text" placeholder="Enter your name" 
onChange={(event) => {setUserName(event.target.value)}}/>

<input type="text" placeholder="Room ID" 
onChange={(event) => {setRoom(event.target.value)}}/>

<button onClick={joinRoom}>Join</button>
</div>
{inChat && <Chat socket={socket} userName={userName} room={room}/>}


    </div>
    </UserProvider>
  )
}

export default App
