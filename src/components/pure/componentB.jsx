import React from 'react'
import PropTypes from 'prop-types'
import { Contact } from '../../models/contacts'

const ComponentB = ({contact}) => {
  return (
    <div>
      <h2>
        {contact.conected ? 'Contact online' : 'Contact not available'}
      </h2>
    </div>
  )
}

ComponentB.propTypes = {
  contact: PropTypes.instanceOf(Contact)
}

export default ComponentB