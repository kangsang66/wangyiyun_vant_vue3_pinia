import request from '@/utils/request'

// 推荐歌单详情页
export const RecommendId = query => request({
    method:'GET',
    url:`/playlist/detail?id=${query}&realIP=171.212.33.193`,
})
// 推荐歌单歌曲
export const RecommendSongs = query => request({
    method:'GET',
    url:`/playlist/track/all?id=${query}&limit=20&offset=0&realIP=171.212.33.193`,
})
// 歌曲歌词
export const SongLyric = query => request({
    method:'GET',
    url:`/lyric?id=${query}&realIP=171.212.33.193`
})
// 歌单收藏者数据
export const Subscribers = query => request({
    method:'GET',
    url:`/playlist/subscribers?id=${query}&limit=20&realIP=171.212.33.193`
})