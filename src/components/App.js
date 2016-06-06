import React from 'react';
import { connect } from 'react-redux';
import PureComponent from 'react-pure-render/component';

import Email from './Email';
import SelectedEmail from './SelectedEmail';

class App extends PureComponent {
	render() {
		console.log(this.props);
		const emails = this.props.emails.map( email => {
			return <Email key={ email.id } email={ email } />
		})
		return (
			<div>
				{ emails }
				{ this.props.selectedEmail.from &&
					<SelectedEmail { ...this.props.selectedEmail } />
				}
			</div>
		);
	}
}

export default connect( state => state)(App); // connect is a function takes a cb it return another a function that we pass our component into which is app
