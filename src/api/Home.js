import request from '@/utils/request'

// 首页banner轮播图
export const Banner = query => request({
    method:'GET',
    url:'/banner?type=2&realIP=171.212.33.193',
    query
})

// 首页推荐歌单
export const Recommend = query => request({
    method:'GET',
    url:'/personalized?limit=6&realIP=171.212.33.193',
    query
})
