<template>
	<view class="home-container">
		<Search :swipers="swipers"></Search>
		<Ticket></Ticket>
		<Classify></Classify>
		<Tabs :tab="tab" id="boxfixed" :class="{'is_fixed':isFixed}"></Tabs>
		<view style="height: 140upx;"></view>
		<ArticleList :articleData='articleData'></ArticleList>
	</view>
</template>

<script>
	import Search from './components/search.vue'
	import Ticket from "./components/ticket.vue"
	import Classify from "./components/classify.vue"
	import Tabs from "./components/tabs.vue"
	import ArticleList from "./components/articleList.vue"
	// 结构log
	const {log}=console
	// 导入请求API
	import {home,homeList} from '../../common/cloudfun.js'
	export default {
		components:{Search,Ticket,Classify,Tabs,ArticleList},
		data() {
			return {
				isFocus:false,
				isFixed:false,
				rect:'',
				menuTop:'',
				swipers:[],
				tab:[],
				articleData:[]
			}
		},
		onLoad() {
			// 获取Tabs的DOM节点，微信小程序的固定写法
			const query=wx.createSelectorQuery()
			query.select('#boxfixed').boundingClientRect()
			query.exec((res)=>{
				// console.log(res)
				this.menuTop=res[0].top
			})
		},
		// 监听页面滚动的事件
		onPageScroll(e) {
			// console.log(e)
			this.rect=e.scrollTop
		},
		// 计算属性滑动组件置顶
		computed:{
			namePage(){
				if(this.rect>this.menuTop){
					this.isFixed=true
				}else{
					this.isFixed=false
				}
			}
		},
		created() {
			// 请求轮播数据
			let banner='banner'
			// 请求tab数据
			let tab='tab'
			// 初次请求攻略推荐数据
			let recomment='recomment'
			// 并发请求数据
			Promise.all([home(banner),home(tab),homeList(recomment)]).then(res=>{
				log(res)
				this.swipers=res[0].data
				this.tab=res[1].data
				this.articleData=res[2].data
			}).catch(err=>{
				log(err)
			})
			
			// banner.get().then(res=>{
			// 	// console.log(res)
			// 	this.swipers=res.data
			// }).catch(err=>{
			// 	console.log(err)
			// })
			// // 请求tab数据
			// const tab=db.collection('tab')
			// tab.get().then(res=>{
			// 	log(res)
			// 	this.tab=res.data
			// }).catch(err=>{
			// 	console.log(err)
			// })
			
		},
		methods: {
			
		}
	}
</script>

<style lang="less" scoped>
.is_fixed{
	position: fixed;
	left: 0;
	right: 0;
	top: 0;
}
</style>
