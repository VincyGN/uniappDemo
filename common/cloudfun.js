// api请求封装
const db=wx.cloud.database() //指定操作的数据库
const home=function(banner){
	return new Promise((resolve,reject)=>{
		const banners=db.collection(banner) //指定操作哪个集合
		banners.get().then(res=>{
			resolve(res)
		}).catch(err=>{
			reject(err)
		})
	})
}
const homeList=function(list){
	return new Promise((resolve,reject)=>{
		const listData=db.collection(list).limit(6) //指定操作哪个集合
		listData.get().then(res=>{
			resolve(res)
		}).catch(err=>{
			reject(err)
		})
	})
}
export {home,homeList}