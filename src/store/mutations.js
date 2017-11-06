import {
	HIDE_LOADING,
	SHOW_LOADING,
	FOOTER_HIDE,
	FOOTER_SHOW,
	USER_SIGNIN,
	USER_SIGNOUT,
} from './type'

import state from './state.js'

const mutations={
	/*loading*/
	[HIDE_LOADING](state){
		state.loading=false;
	},
	[SHOW_LOADING](state){
		state.loading=true;
	},
	/*footer*/
	[FOOTER_HIDE](state){
		state.footerShow=false;
	},
	[FOOTER_SHOW](state){
		state.footerShow=true;
		console.log(state)
	},
	/*login*/
	[USER_SIGNIN](state, user) {
		sessionStorage.setItem('user', JSON.stringify(user))
		Object.assign(state, user)
	},
	[USER_SIGNOUT](state) {
		sessionStorage.removeItem('user')
		Object.keys(state).forEach(k => Vue.delete(state, k))
	}

};

const getters={
	loading(state){
		return state.loading;
	},
	footerShow(state){
		return state.footerShow;
	},
	loginstate(state){
		return state.loginstate
	}

};

export default{
	state,
	mutations,
	getters
}