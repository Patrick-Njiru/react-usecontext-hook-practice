import React, { useState } from 'react'
import { data } from './data'
import GuestList from './GuestList'

// useContext / ContextAPI
// It is used when you want to avoid prop drilling - to avoid passing props to components that do not need them
// Don't use it when you can pass a prop directly to the child component
export const GuestContext = React.createContext()

function App() {
  const [guests, setGuests] = useState(data)

  // This fn is needed in the Guest component but not in the GuestList Component. In this case we use ContextAPI
  const removeGuest = (id) => setGuests(data.filter(person => person.id !== id))

  return (
    <GuestContext value={removeGuest}>
      <div className="app text-center">
        <GuestList {...guests} />
      </div>
    </GuestContext>
  )
}

export default App
