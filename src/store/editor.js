import Vue from 'vue';

const serverStorage = "serverUrls";
const scriptStorage = "savedScripts";

const getDefaultState = () => {
	return {
		storedServers: JSON.parse(localStorage.getItem(serverStorage) || "[]"),
		storedScripts: JSON.parse(localStorage.getItem(scriptStorage) || "{}"),
		scriptName: null,
		hightestModalZIndex: 1000
	};
};

export default {
	namespaced: true,
	state: getDefaultState(),
	getters: {
		getScriptByName: (state) => (name) => state.storedScripts[name]
	},
	actions: {

	},
	mutations: {
		openModal(state) {
			state.hightestModalZIndex = state.hightestModalZIndex + 1;
		},
		closeModal(state) {
			state.hightestModalZIndex = state.hightestModalZIndex - 1;
		},
		addServer(state, url) {
			if (state.storedServers.indexOf(url) === -1) {
				state.storedServers.push(url);
			}
			localStorage.setItem(serverStorage, JSON.stringify(state.storedServers));
		},
		removeServer(state, url) {
			state.storedServers.splice(state.storedServers.indexOf(url), 1);
			localStorage.setItem(serverStorage, JSON.stringify(state.storedServers));
		},
		addScript(state, { name, script }) {
			state.storedScripts[name] = script;
			localStorage.setItem(scriptStorage, JSON.stringify(state.storedScripts));
		},
		removeScript(state, name) {
			Vue.delete(state.storedScripts, name);
			localStorage.setItem(scriptStorage, JSON.stringify(state.storedScripts));
		},
		setScriptName(state, name) {
			state.scriptName = name;
		},
		reset(state) {
			Object.assign(state, getDefaultState());
		}
	}
};