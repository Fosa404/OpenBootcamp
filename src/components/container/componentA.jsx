import React from 'react'
import { Contact } from '../../models/contacts'
import ComponentB from '../pure/componentB'

export const ComponentA = () => {

    const contact = new Contact('Robert', 'Smith', 'rsmith@example.com', true)

  return (
    <div>
        <ComponentB contact= {contact}></ComponentB>
    </div>
  )
}
