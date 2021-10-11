<template>
	<view class="ticket">
		<view class="">
			<image src="../../../static/images/lunchuan.webp" mode="widthFix"></image>
			<text>飞机</text>
		</view>
		<view class="">
			<image src="../../../static/images/lunchuan.webp" mode="widthFix"></image>
			<text>飞机</text>
		</view>
		<view class="">
			<image src="../../../static/images/lunchuan.webp" mode="widthFix"></image>
			<text>飞机</text>
		</view>
		<view class="">
			<image src="../../../static/images/lunchuan.webp" mode="widthFix"></image>
			<text>飞机</text>
		</view>
		<view class="">
			<image src="../../../static/images/lunchuan.webp" mode="widthFix"></image>
			<text>飞机</text>
		</view>
	</view>
</template>

<script>
export default{
	name:"ticket"
}
</script>

<style lang="less" scoped>
	.ticket{
		display: flex;
		justify-content: space-around;
		text-align: center;
		margin: 30upx 0;
		image{
			width: 90upx;
			height: 90upx;
		}
		text{
			font-size: 30upx;
			display: block;
		}
	}
</style>
