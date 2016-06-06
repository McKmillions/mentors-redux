
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
	return state;
}

// Action Creators