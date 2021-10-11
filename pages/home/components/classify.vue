<template>
	<view class="classify">
	<!-- 表格 -->
		<view style="margin: 0 20upx;">
			<view class="conteng">
				<block v-for="(item,index) in tables" :key="index">
					<view>
						<text class="tick">{{item.tick}}</text>
						<text class="nametext">{{item.nametext}}</text>
					</view>
				</block>
			</view>
		</view>
	</view>
</template>

<script>
export default{
	name:"classify",
	data(){
		return {
			tables:[
				{
					tick:"出境游",
					nametext:"走遍全球",
				},
				{
					tick:"出境游",
					nametext:"走遍全球",
				},
				{
					tick:"出境游",
					nametext:"走遍全球",
				},
				{
					tick:"出境游",
					nametext:"走遍全球",
				},
				{
					tick:"出境游",
					nametext:"走遍全球",
				},
				{
					tick:"出境游",
					nametext:"走遍全球",
				},
				{
					tick:"出境游",
					nametext:"走遍全球",
				},
				{
					tick:"出境游",
					nametext:"走遍全球",
				}
			]
		}
	}
}
</script>

<style lang="less" scoped>
.conteng{
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	-webkit-flex-wrap:wrap;
	overflow: hidden;
	border: 1rpx solid #eeeeee;
	border-radius: 10rpx;
	view{
		width: 25%;
		display: flex;
		flex-direction: column;
		align-items: center;
		box-sizing: border-box;
		padding: 20upx 0;
		&:nth-child(2){
			border-left: 1rpx solid #eeeeee;
			border-right: 1rpx solid #eeeeee;
		}
		&:nth-child(6){
			border-left: 1rpx solid #eeeeee;
			border-right: 1rpx solid #eeeeee;
		}
		&:nth-child(3){
			border-right: 1rpx solid #eeeeee;
		}
		&:nth-child(7){
			border-right: 1rpx solid #eeeeee;
		}
		&:nth-child(-n+4){
			border-bottom: 1rpx solid #eeeeee;
		}
		.tick{
			font-size:30upx;
			color: #333333;
			font-weight: bold;
		}
		.nametext{
			font-size: 23upx;
			color: #686868;
		}
	}
}
</style>
