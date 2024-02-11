import { useContext } from 'react'
import PropTypes from 'prop-types'
import { GuestContext } from './App'

const Guest = ({ name, id }) => {
  const {removeGuest} = useContext(GuestContext)

  return (
    <li className='list-group-item d-flex justify-content-between align-items-center'>
      <h4 className="lead text-primary fw-bold"> &nbsp; {name}</h4>
      <button type="button" className='btn btn-secondary btn-sm' onClick={() => removeGuest(id)}>remove</button>
    </li>
  )
}

Guest.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
}

export default Guest