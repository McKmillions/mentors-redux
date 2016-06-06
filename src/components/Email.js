import React from 'react';
import PureComponent from 'react-pure-render/component';
import { selectEmail, deleteEmail } from '../reducer';
import store from '../store'


export default class Email extends PureComponent {

	selectEmail(){
		store.dispatch( selectEmail( this.props.email ));
	}

	deleteEmail(){
		store.dispatch( deleteEmail( this.props.email.id ));
	}



	render() {
		const styles = this.getStyles();

		return (
			<div style={ styles.wrapper }>
				<div style={ styles.from }>
					<p>From: { this.props.email.from }</p>
				</div>
				<div>
					<p
						onClick={ this.selectEmail.bind( this ) }
						style={ styles.message }
					>
						{ this.props.email.message }
					</p>
					<button
						onClick={ this.deleteEmail.bind( this ) }
						style={ styles.deleteButton }
					>
						X
					</button>
				</div>
			</div>
		);
	}

	getStyles() {
		return {
			  deleteButton: {
				marginLeft: 10
			}
			, from: {
				fontWeight: `bold`
			}
			, message: {
				  cursor: `pointer`
				, display: `inline-block`
			}
			, wrapper: {
				  display: `flex`
				, justifyContent: `space-between`
				, margin: `20px auto`
				, width: `80%`
			}
		};
	}
}
