import React, { Component } from 'react';

class Language extends Component {
	state = {};
	render() {
		return (
			<div>
				Select the language:
				<i className="flag us"></i>
				<i className="flag nl"></i>
			</div>
		);
	}
}

export default Language;
