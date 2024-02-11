import { useContext } from 'react'
import PropTypes from 'prop-types'
import { GuestContext } from './App'

const Guest = ({ name, id }) => {
  const removeGuest = useContext(GuestContext)
  console.log('removeGuestfn', removeGuest);

  return (
    <div className='list-group-item d-flex justify-content-between align-items-center'>
      <h4 className="lead"> &nbsp; {name}</h4>
      <button type="button" onClick={() => removeGuest(id)}>remove</button>
    </div>
  )
}

Guest.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
}

export default Guest