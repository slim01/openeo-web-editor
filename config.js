export default {
	// URL of the back-end to start with (string)
	serverUrl: '',

	// A message shown on the login page
	loginMessage: '',

	// Defaults for notifications
	snotifyDefaults: {
		timeout: 5000,
		titleMaxLength: 30,
		showProgressBar: true,
		closeOnClick: true,
		pauseOnHover: true
	},

	// List of supported web map services (all lower-cased)
	supportedMapServices: [
		'xyz'
	],

	// Load process graphs from the openEO Hub?
	loadHubProcessGraphs: true
};