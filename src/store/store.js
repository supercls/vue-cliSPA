import Vue from 'vue'
import Vuex from 'vuex'
import state from './state.js'   //获取状态值
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex);

export default new Vuex.Store({
	state,
	modules:{
		mutations
	},
	actions,
});

