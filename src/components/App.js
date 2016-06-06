import React from 'react';
import PureComponent from 'react-pure-render/component';

import Email from './Email';
import SelectedEmail from './SelectedEmail';

class App extends PureComponent {
	render() {
		return (
			<div>
				{ emails }
				{ this.props.inbox.selectedEmail.from &&
					<SelectedEmail { ...this.props.inbox.selectedEmail } />
				}
			</div>
		);
	}
}

export default App