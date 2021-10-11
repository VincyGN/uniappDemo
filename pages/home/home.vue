<template>
	<view class="home-container">
		<Search></Search>
	</view>
</template>

<script>
	import Search from './components/search.vue'
	export default {
		components:{Search},
		data() {
			return {
				isFocus:false,
				swipers:[]
			}
		},
		// onLoad(){
		// 	uni.request({
		// 		url:"https://www.uinav.com/api/public/v1/home/swiperdata",
		// 		method:'get',
		// 		success:(res)=> {
		// 			// console.log(res)
		// 			if(res.data.meta.status==200){
		// 				this.swipers=res.data.message
		// 			}
		// 		}
		// 	})
		// },
		// methods: {
			
		// }
	}
</script>

<style lang="less">
// .home-container{
// 	.search-box{
// 		background-color: #fe2c4b;
// 		padding: 20rpx;
// 		position: relative;
// 		input{
// 			background-color: white;
// 			padding-left: 50%;
// 			border-radius: 10rpx;
// 			transition: .3;
// 		}
// 		icon{
// 			position: absolute;
// 			top: 25rpx;
// 			left: 42%;
// 			transition: .3;
// 		}
// 		// 当.search-box为focus的时候,input和icon都生效
// 		&.focus{
// 			input{
// 				padding-left: 62rpx;
// 			}
// 			icon{
// 				left: 4%;
// 			}
// 		}
// 	}
// }
</style>
