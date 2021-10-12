<template>
	<view>
		<scroll-view scroll-x="true" class="scroll"  scroll-with-animation="true">
			<view>
				<block v-for="(item,index) in tab" :key="index">
					<view class="list-cont" @click="getTabs(item,index)" :class="{active:index==num}">
						<view>
							<text class="con-text-a">{{item.name}}</text>
						</view>
						<view>
							<text class="con-text-b" :class="{activeb:index==num}">{{item.title}}</text>
						</view>
					</view>
				</block>
			</view>
		</scroll-view>
	</view>
</template>

<script>
// 导入请求API
import {homeList} from '../../../common/cloudfun.js'
export default {
	name:"tab",
	props:{
		tab:Array
	},
	data(){
		return{
			num:0,
		}
	},
	methods:{
		getTabs(item,index){
			this.num=index
			console.log(item)
			homeList(item.nav).then(res=>{
				console.log(res,this.$parent.articleData)
				this.$parent.articleData=res.data
			}).catch(err=>{
				console.log(err)
			})
		}
	}
}
</script>

<style lang="less" scoped>
// 选中样式
.active{
	background-image: linear-gradient(to right,#ccffff 0%,#ffcc00 100%);
	border-top-right-radius:50upx;
}
// 选中文字的颜色
.activeb{
	color: #292c33 !important;
	font-size: 23upx !important;
}
.scroll{
	white-space: nowrap;
	width: 100%;
	position: absolute;
	left: 0;
	right: 0;
	background: #FFFFFF;
	padding: 20upx 0;
	.con-text-a{
		color:#292c33;
		font-size: 30upx;
		font-weight: bold;
	}
	.con-text-b{
		color:#9ea0a5;
		font-size: 23upx;
	}
	.list-cont{
		width: 180upx;
		display: inline-block;
		text-align: center;
	}
}
</style>
