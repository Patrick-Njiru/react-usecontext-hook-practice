import PropTypes from 'prop-types'
import Guest from './Guest'

const GuestList = ({ guests }) => (
  <div className='list-group'>
    {/* in this case we must pass the guest details as props since we are looping through the guests array */}
    {guests.map(guest => <Guest key={guest.id} {...guest} />)}
  </div>
)

GuestList.propTypes = { guests: PropTypes.array.isRequired }

export default GuestList