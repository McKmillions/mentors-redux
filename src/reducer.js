const initialState = {
	emails: [
		  { from: `mom`, message: `Saw this and thought of you!`, id: 1 }
		, { from: `bossman`, message: `Are you playing with open source instead of working again?`, id: 2 }
		, { from: `prince alotik`, message: `I am a deposed nigerian prince and with your help...`, id: 3 }
	]
	, selectedEmail: {}
};

// Actions
const SELECT_EMAIL = `emails/SELECT_EMAIL`;
const DESELECT_EMAIL = `emails/DESELECT_EMAIL`;
const DELETE_EMAIL = `emails/DELETE_EMAIL`;

// reducer
export default function reducer( state = initialState, action ) {
	switch(action.type){
		case SELECT_EMAIL:
			return Object.assign({}, state, {selectedEmail: action.email})
		case DESELECT_EMAIL:
			return Object.assign({}, state, { selectedEmail: {} } )
		case DELETE_EMAIL:
			return Object.assign({}, state, { emails: state.emails.filter( email => email.id !== action.id) } );
	} // object assign returns a new object and sets the state to selectedEmail

	return state;
}

// Action Creators
export function selectEmail(email){
	return { type: SELECT_EMAIL, email: email }
}

export function deselectEmail(){
	return { type: DESELECT_EMAIL };
}

export function deleteEmail( id ){
	return { type: DELETE_EMAIL, id: id }
}
