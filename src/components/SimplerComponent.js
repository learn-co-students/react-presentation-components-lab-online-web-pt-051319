import React from 'react';

const SimplerComponent = (props) => {
	return (
		<React.Fragment>
			<div onClick={props.handleClick}>I am just happy</div>
		</React.Fragment>
	)
}

export default SimplerComponent