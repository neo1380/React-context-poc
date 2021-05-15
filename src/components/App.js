import React, { Component } from 'react';
import ColorContexts from '../contexts/ColorContexts';

import LanguageContexts from '../contexts/LanguageContexts';
import UserCreate from './UserCreate';

class App extends Component {
	state = { lang: 'english' };

	onLanguageChange(lang) {
		this.setState({ lang });
	}
	render() {
		return (
			<div className="ui container">
				<h1>POC - learning Use context</h1>
				<p>
					Context is about passing data from one component to another. For eg: passing the data from App
					component to a nested child component. With props, we have to do prop drilling to achieve the same.
					UseContext provides another way of passing the data between a parent and a nested component.
				</p>
				<div>
					Select the language:
					<i className="flag us" onClick={() => this.onLanguageChange('english')}></i>
					<i className="flag nl" onClick={() => this.onLanguageChange('dutch')}></i>
					{this.state.lang}
					{/* 			<Language /> */}
					<LanguageContexts.Provider value={this.state.lang}>
						<ColorContexts.Provider value="red">
							<UserCreate />
						</ColorContexts.Provider>
					</LanguageContexts.Provider>
				</div>
				<div className="">
					<ul>
						<li>Use this.context</li>
						<li>Use of Provider(parent component) & Consumer( nested child component) Component</li>
					</ul>
				</div>
				<div>
					<p>
						To create a context, use <b>React.createContext('english')</b>
					</p>
					<p>To consume the context in your component,follow the below</p>
					<ul>
						<li>Import the context file in your component- method 1</li>
						<li>
							Create a static property in the class. static <b>contextType</b>. Please note that this is
							the standard and we cannot change this property name.
						</li>
						<li>Now the component is hooked up with the imported context</li>
						<li>
							In order to read the context in our class, we can simply read it as this.context. And react
							does the magic to give us the context created in our context file.
						</li>
					</ul>
					<ul>
						<li>method 2</li>
						<li>Use the consumer component at the place where we need to add logic with the context</li>
						<li>
							<code>
								<pre>
									` &lt;LanguageContexts.Consumer&gt; &#123;(value) = &gt; (value === 'english' ?
									'Submit' : 'Voorleggen')&#125; &lt;/LanguageContexts.Consumer&gt;`
								</pre>
							</code>
						</li>
						<li>
							The consumer component takes a special property - value. the consumer component executes a
							callback with the current context as value. we can write our own logic using this callback
							function as shown above.
						</li>
					</ul>
					<ul>
						<li>
							To consume more than one context to a component, it is best to use the consumer component
							approach. in that case, the code will be as in this repo.
						</li>
					</ul>
					<ul>
						<li>Import the context file in your component- method 1</li>
						<li>
							Create a static property in the class. static <b>contextType</b>. Please note that this is
							the standard and we cannot change this property name.
						</li>
						<li>Now the component is hooked up with the imported context</li>
						<li>
							In order to read the context in our class, we can simply read it as this.context. And react
							does the magic to give us the context created in our context file.
						</li>
					</ul>
					<p> lets see how to change the context value in a component.</p>
					<p>
						To communicate the change in context, we have to wrap up the component where the state is
						updated with <b>Provider</b> component.
					</p>
					<p>
						The context.provider component has a special prop value. We can pass our updated state to this
						value prop. for eg:
					</p>
					<code>
						<pre>
							&lt;LanguageContexts.Provider value=&#123;this.state.lang&#125;&gt; &lt;UserCreate /&gt;
							&lt;/LanguageContexts.Provider&gt;
						</pre>
					</code>
				</div>
			</div>
		);
	}
}

export default App;
