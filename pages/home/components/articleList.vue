<template>
	<view class="articleList">
		<view class="conteng">
			<!-- <block v-for="(item,index) in Articleend" :key='index'> -->
			<view class="article-content">
				<view class="conteng-img">
					<image src="../../../static/images/e6412c0b8f819d54ea8aa75307b72caf.jpeg" mode="aspectFill" class="animated fadeIn"></image>
				</view>
				<!-- 文字介绍 -->
				<view class="article-introduce">
					<view class="article-name">三亚租车</view>
					<view class="article-title">三亚租车敞篷跑车自驾保时捷718宝马甲壳虫哈哈哈哈哈</view>
					<view class="article-label">法拉利加州</view>
					<view class="purchase">
						<text class="article-price">¥86</text>
						<text class="article-purchase">81人已购买</text>
					</view>
				</view>
			</view>
			<view class="article-content">
				<view class="conteng-img">
					<image src="../../../static/images/e6412c0b8f819d54ea8aa75307b72caf.jpeg" mode="aspectFill" class="animated fadeIn"></image>
				</view>
				<!-- 文字介绍 -->
				<view class="article-introduce">
					<view class="article-name">三亚租车</view>
					<view class="article-title">三亚租车敞篷跑车自驾保时捷718宝马甲壳虫哈哈哈哈哈</view>
					<view class="article-label">法拉利加州</view>
					<view class="purchase">
						<text class="article-price">¥86</text>
						<text class="article-purchase">81人已购买</text>
					</view>
				</view>
			</view>
			<view class="article-content">
				<view class="conteng-img">
					<image src="../../../static/images/e6412c0b8f819d54ea8aa75307b72caf.jpeg" mode="aspectFill"></image>
				</view>
				<!-- 文字介绍 -->
				<view class="article-introduce">
					<view class="article-name">三亚租车</view>
					<view class="article-title">三亚租车敞篷跑车自驾保时捷718宝马甲壳虫哈哈哈哈哈</view>
					<view class="article-label">法拉利加州</view>
					<view class="purchase">
						<text class="article-price">¥86</text>
						<text class="article-purchase">81人已购买</text>
					</view>
				</view>
			</view>
			<!-- </block> -->
		</view>
	</view>
</template>

<script>
export default {
	name:"articleList"
}
</script>

<style lang="less" scoped>
.articleList{
	margin: 0 20upx;
	.conteng{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		width: 100%;
		-webkit-flex-wrap:wrap;
		overflow: hidden;
		.article-content{
			width: 48%;
			flex-direction: column;
			display: flex;
			box-sizing: border-box;
			.conteng-img{
				height: 400upx !important;
				object-fit: cover;
				overflow: hidden;
				image{
					width: 100% !important;
					height: 100% !important;
					object-fit: cover;
					border-radius: 10upx;
				}
			}
			.article-introduce{
				padding-left: 10upx;
				.purchase{
					display: flex;
					align-items: center;
					padding-bottom: 10upx;
					.article-price{
						font-size: 36upx;
						color: #ff6b28;
						padding-right: 9upx;
					}
					.article-purchase{
						font-size: 30upx;
						color: #cacaca;
					}
				}
				.article-name{
					font-size: 32upx;
					color: #d0b083;
					margin: 10upx 0;
					display: -webkit-box;
					-webkit-box-orient:vertical;
					-webkit-line-clamp:1;
					overflow: hidden;
				}
				.article-title{
					font-size: 32upx;
					color: #444444;
					font-weight: bold;
					line-height: 50upx;
					display: -webkit-box;
					-webkit-box-orient:vertical;
					-webkit-line-clamp:2;
					overflow: hidden;
					height: 100upx !important;
				}
				.article-label{
					font-size: 25upx;
					color: #d0b083;
					padding: 10upx 0;
				}
			}
		}
	}
}
</style>
