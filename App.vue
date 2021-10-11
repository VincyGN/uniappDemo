<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			// 判断是否是云开发
			if(!wx.cloud){
				console.log('请使用2.2.3或以上的基础库以使用云能力')
			}else{
				wx.cloud.init({
					env:'travel-0giuxubb163af9a6',
					traceUser:true
				})
			}
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
