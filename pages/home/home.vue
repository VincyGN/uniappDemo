<template>
	<view class="home-container">
		<view class="search-box" :class="{focus:isFocus}">
			<input @focus="isFocus=true" @blur="isFocus=false" type="text" value="" placeholder="搜索" />
			<icon type="search" size="20"></icon>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isFocus:false
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="less">
.home-container{
	.search-box{
		background-color: #fe2c4b;
		padding: 20rpx;
		position: relative;
		input{
			background-color: white;
			padding-left: 50%;
			border-radius: 10rpx;
			transition: .3;
		}
		icon{
			position: absolute;
			top: 25rpx;
			left: 42%;
			transition: .3;
		}
		// 当.search-box为focus的时候,input和icon都生效
		&.focus{
			input{
				padding-left: 62rpx;
			}
			icon{
				left: 4%;
			}
		}
	}
}
</style>
