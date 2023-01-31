import React, { useState, useContext} from 'react'


const UserContext = React.createContext({})

export function UserProvider({children}) {
  const [userName, setUserName] = useState<string>("")
  const [room, setRoom] = useState<string>("")
  const [inChat, setInChat] = useState<boolean>(false)

  return (
    <UserContext.Provider value={{userName, room, inChat}}>
      {children}
    </UserContext.Provider>
  )
}