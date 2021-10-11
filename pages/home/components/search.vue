<template>
	<view class="">
		<view class="search-cont">
			<!-- 二维码 -->
			<view class="search-code">
				<image src="../../../static/images/erweima.svg" mode="widthFix"></image>
			</view>
			<!-- 搜索框 -->
			<view class="search-box" :class="{focus:isFocus}">
				<input @focus="isFocus=true" @blur="isFocus=false" type="text" value="" placeholder="搜索" />
				<image src="../../../static/images/search.svg" mode="widthFix" class="icon"></image>
			</view>
			<!-- 消息 -->
			<view class="search-code">
				<image src="../../../static/images/xiaoxi.svg" mode="widthFix"></image>
			</view>
		</view>
		<!-- 轮播图 -->
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" :circular="true">
			<swiper-item>
				<view class="swiper-item">
					<image src="../../../static/images/d584a9c37f8334a941a6721446850b8f.jpeg" mode="aspectFill" class="imageUrl"></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image src="../../../static/images/e6412c0b8f819d54ea8aa75307b72caf.jpeg" mode="aspectFill" class="imageUrl"></image>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		name:"search",
		data() {
			return {
				isFocus: false,
				swipers: [
					// {
					// 	imageUrl:"../../../../static"
					// }
				]
			}
		},
		methods: {

		}
	}
</script>

<style lang="less" scoped>
	.search-code image {
		width: 50upx;
		height: 50upx;
	}

	.search-code {
		width: 50upx;
		height: 50upx;
		padding: 0 15upx;
	}

	.search-box {
		height: 70upx;
		line-height: 70upx;
		width: 100%;
		border-top-left-radius: 50upx;
		border-bottom-left-radius: 50upx;
		border-bottom-right-radius: 50upx;
		position: relative;

		input {
			height: 70upx;
			line-height: 70upx;
			background-color: white;
			padding-left: 50%;
			transition: .3;
		}

		.icon {
			width: 40upx;
			height: 40upx;
			position: absolute;
			top: 14upx;
			left: 42%;
			transition: .3;
		}

		// 当.search-box为focus的时候,input和icon都生效
		&.focus {
			input {
				padding-left: 62rpx;
			}

			.icon {
				left: 4%;
			}
		}
	}

	.search-cont {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 70upx;
		background: linear-gradient(to top, #ff5d4a 10%, #fe2c4b 100%);
		padding: 30upx 0;

	}
	.imageUrl{
		width: 100%;
		height: 300upx !important;
	}
	swiper{
		height: 300upx !important;
	}
</style>
