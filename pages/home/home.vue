<template>
	<view class="home-container">
		<Search></Search>
		<Ticket></Ticket>
		<Classify></Classify>
		<Tabs id="boxfixed" :class="{'is_fixed':isFixed}"></Tabs>
		<view style="height: 1800upx;">
			
		</view>
	</view>
</template>

<script>
	import Search from './components/search.vue'
	import Ticket from "./components/ticket.vue"
	import Classify from "./components/classify.vue"
	import Tabs from "./components/tabs.vue"
	export default {
		components:{Search,Ticket,Classify,Tabs},
		data() {
			return {
				isFocus:false,
				isFixed:false,
				rect:'',
				menuTop:'',
				swipers:[]
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
		}
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
