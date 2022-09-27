import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Greeting extends Component {
	constructor (props) {
	super(props);
	this.state = {
		age: 31
	};
};

    render() {
        return (
            <div>
                <h3>
                    Holis { this.props.name } !
                </h3>
				<h3>
				Tu edad es: { this.state.age }
				</h3>
				<div>
					<button onClick={this.birthdays}>
						Birthday
					</button>
				</div>
            </div>
        );
    }

	birthdays = () => {
		this.setState((prevState)=>(
			{
				age: prevState.age + 1
			}
		))
	}
}

Greeting.propTypes = {
	name: PropTypes.string,
};

export default Greeting;