import React, { Component } from 'react';
import ColorContexts from '../contexts/ColorContexts';
import LanguageContexts from '../contexts/LanguageContexts';

class Button extends Component {
	state = {};

	static contextType = LanguageContexts;
	setColor = (color) => (color === 'red' ? color : 'primary');
	render() {
		return (
			<div>
				<ColorContexts.Consumer>
					{(color) => (
						<button className={`ui ${color} button`} type="submit">
							<LanguageContexts.Consumer>
								{(value) => (value === 'english' ? 'Submit' : 'Voorleggen')}
							</LanguageContexts.Consumer>
						</button>
					)}
				</ColorContexts.Consumer>
			</div>
		);
	}
}

export default Button;
