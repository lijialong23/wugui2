import Vue from 'vue'
import searchs from './modules/search.js'
import activity from './modules/activity.js'
import navigation from './modules/navigation.js'
import footer from './modules/footer.js'
import Vuex from 'vuex'

Vue.use(Vuex)
const state={
	langues:'0',
	search:{
		zh:searchs.zh,
		en:searchs.en
	},
	activities:{
		zh:activity.zh,
		en:activity.en
	},
	navigation:{
		zh:navigation.zh,
		en:navigation.en
	},
	footers:{
		zh:footer.zh,
		en:footer.en
	},
}
const getters={
	isLang(state){
		return state.langues
	},
	searchGet(state){
		if(state.langues=='0'){
			return state.search.zh
		}else{
			return state.search.en
		}
	},
	activityGet(state){
		if(state.langues=='0'){
			return state.activities.zh
		}else{
			return state.activities.en
		}
	},
	navigationGet(state){
		if(state.langues=='0'){
			return state.navigation.zh
		}else{
			return state.navigation.en
		}
	},
	footerGet(state){
		if(state.langues=='0'){
			return state.footers.zh
		}else{
			return state.footers.en
		}
	},
	
}
const mutations={
	choseLan(state,name){
		state.langues=name
	}
}
const actions={
	getLan(context,name){
		context.commit('choseLan',name)
	}
}
const store = new Vuex.Store({
	state,getters,mutations,actions
})

 
export default store;