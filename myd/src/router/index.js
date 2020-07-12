import Vue from 'vue'
import Router from 'vue-router'


const Index = ()=>import(/* webpackChunkName: "index" */"@/components/Index")
const Activity = ()=>import(/* webpackChunkName: "activity" */"@/components/Activity")
const Navigation = ()=>import(/* webpackChunkName: "navigation" */"@/components/Navigation")
const Member = ()=>import(/* webpackChunkName: "member" */"@/components/Member")
const ActInfo = ()=>import(/* webpackChunkName: "actInfo" */"@/components/ActInfo")
const BussnisInfo = ()=>import(/* webpackChunkName: "bussnisInfo" */"@/components/BussnisInfo")
const Chat = ()=>import(/* webpackChunkName: "chat" */"@/components/Chat")

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
			meta:{
				title:'海丝艺术品中心',
				keepAlive:false
			}
    },
    {
      path: '/chat',
      name: 'Chat',
      component: Chat,
    	meta:{
    		title:'聊天室',
    		keepAlive:false
    	}
    },
		{
		  path: '/activity',
		  name: 'Activity',
		  component: Activity,
			meta:{
				title:'活动',
				keepAlive:false
			}
			
		},
		{
		  path: '/navigation',
		  name: 'Navigation',
		  component: Navigation,
			meta:{
				title:'导航',
				keepAlive:false
			}
		},
		{
      path: '/member',
      name: 'Member',
      component: Member,
			meta:{
				title:'会员',
				keepAlive:false
			}
    },
		{
			path:'/actInfo',
			name:'ActInfo',
			component:ActInfo,
			meta:{
				title:'活动详情',
				keepAlive:false
			}
		},
		{
			path:'/bussnisInfo',
			name:'BussnisInfo',
			component:BussnisInfo,
			meta:{
				title:'导航详情',
				keepAlive:false
			}
		}
		
  ]
})
