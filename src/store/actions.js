//import 数据 from ''	这里面可以获取数据
import * as types from './type'
export default{

	/*loading*/
	hideLoading:({commit})=>{
		commit(types.HIDE_LOADING);
	},
	showLoading:({commit})=>{
		commit(types.SHOW_LOADING);
	},
	/*底部条*/
	hideFooter:({commit})=>{
		commit(types.FOOTER_HIDE);
	},
	showFooter:({commit})=>{
		commit(types.FOOTER_SHOW);
	},
	loginsuccess:({commit})=>{
		commit(types.USER_SIGNIN);
	},
	loginfail:({commit})=>{
		commit(types.USER_SIGNOUT);
	}
}