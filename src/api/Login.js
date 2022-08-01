// 登录接口
import request from '@/utils/request'

// 手机发送验证码  
export const PhoneLogin = query => request({
	method:'GET',
	url:`/captcha/sent?phone=${query}&realIP=171.212.33.193`,
})
// 检验手机号以及验证码
export const VerifyPhone = (phoneNumber,verify) =>request({
	method:'GET',
	url:`/captcha/verify?phone=${phoneNumber}&captcha=${verify}&realIP=171.212.33.193`
})
