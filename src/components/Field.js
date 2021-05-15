import React, { Component } from 'react';
import LanguageContexts from '../contexts/LanguageContexts';

class Field extends Component {
	state = {};
	static contextType = LanguageContexts;

	render() {
		const text = this.context === 'english' ? 'name' : 'naam';
		return (
			<div className="ui field">
				<label>{text}</label>
				<input className="ui field" type="text" />
			</div>
		);
	}
}

export default Field;
