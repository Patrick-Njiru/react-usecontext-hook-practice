import React, { useState } from 'react'
import { data } from './data'
import GuestList from './GuestList'

// useContext / ContextAPI
// It is used when you want to avoid prop drilling - to avoid passing props to components that don't need them
// Don't use it when you can pass a prop directly to the child component
export const GuestContext = React.createContext()

function App() {
  const [guests, setGuests] = useState(data)

  // This fn is needed in the Guest component but not in the GuestList Component. 
  const removeGuest = (id) => setGuests(guests.filter(person => person.id !== id))

  return (
    // you can pass in as many values as you want in an object and use destructuring to call each value where needed individually
    <GuestContext.Provider value={{ removeGuest }}>
      <div className="app text-center">
        <GuestList guests={guests} />
        <h5 className='mt-3'>Total Guests: {guests.length}</h5>
      </div>
    </GuestContext.Provider>
  )
}

export default App
