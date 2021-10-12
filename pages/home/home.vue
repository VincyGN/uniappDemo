<template>
	<view class="home-container">
		<Search :swipers="swipers"></Search>
		<Ticket></Ticket>
		<Classify></Classify>
		<Tabs :tab="tab" id="boxfixed" :class="{'is_fixed':isFixed}"></Tabs>
		<view style="height: 140upx;"></view>
		<ArticleList></ArticleList>
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
	export default {
		components:{Search,Ticket,Classify,Tabs,ArticleList},
		data() {
			return {
				isFocus:false,
				isFixed:false,
				rect:'',
				menuTop:'',
				swipers:[],
				tab:[]
			}
		},
		onLoad() {
			// 获取Tabs的DOM节点，微信小程序的固定写法
			const query=wx.createSelectorQuery()
			query.select('#boxfixed').boundingClientRect()
			query.exec((res)=>{
				console.log(res)
				this.menuTop=res[0].top
			})
		},
		// 监听页面滚动的事件
		onPageScroll(e) {
			console.log(e)
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
			const db=wx.cloud.database() //指定操作的数据库
			const banner=db.collection('banner') //指定操作哪个集合
			banner.get().then(res=>{
				// console.log(res)
				this.swipers=res.data
			}).catch(err=>{
				console.log(err)
			})
			// 请求tab数据
			const tab=db.collection('tab')
			tab.get().then(res=>{
				log(res)
				this.tab=res.data
			}).catch(err=>{
				console.log(err)
			})
			
		},
		// methods: {
			
		// }
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
