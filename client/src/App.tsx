import { useState } from 'react'
import './App.css'
import { io } from 'socket.io-client'
const socket = io('http://localhost:3001')
//this coonect me to socket.io server



function App() {
  const [userName, setUserName] = useState<string>("")
  const [room, setRoom] = useState<string>("")



  const joinRoom = () => {
    if(userName!=="" && room!==""){
    }
  }


  return (
    <div className="App">
<div className="Chat">
<h3>Join the Chat!</h3>

<input type="text" placeholder="Enter your name" 
onChange={(event) => {setUserName(event.target.value)}}/>

<input type="text" placeholder="Room ID" 
onChange={(event) => {setRoom(event.target.value)}}/>

<button onClick={joinRoom}>Join</button>
</div>
    </div>
  )
}

export default App
