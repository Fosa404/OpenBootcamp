import React from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react'

const GreetingF = props => {

	const [age, setage] = useState(31)

	const birthdays = () => {
		setage(age + 1)
	}

  return (
    <div>
        <h3>
            Holis { props.name } desde component functional  !
        </h3>
        <h3>
        Tu edad es: { age }
        </h3>
        <div>
            <button onClick={birthdays}>
                Birthday
            </button>
        </div>
    </div>
  )
}

GreetingF.propTypes = {
	name: PropTypes.string
}

export default GreetingF