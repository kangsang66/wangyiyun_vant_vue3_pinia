// axios二次封装
import axios from "axios";
import { Toast } from 'vant';
// 域名前缀
axios.defaults.baseURL='https://netease-cloud-music-api-psi-snowy.vercel.app'
axios.defaults.timeout= 3000
// axios.withCredentials=true
axios.withCredentials=true
// &realIP=171.212.33.193 

// 请求拦截器
// axios.interceptors.request.use(config=>{
// 	// 展示loading效果
// 	Toast.loading({
// 		message: '加载中...',
// 		forbidClick: true,
// 		duration:2000
// 	});
// 	return config
// })
// // 响应拦截器
// axios.interceptors.response.use(response=>{
// 	// 展示loading效果
// 	Toast.clear()
// 	return response
// })

export default axios


