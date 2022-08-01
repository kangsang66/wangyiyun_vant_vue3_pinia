import request from '@/utils/request'

// 搜索页推荐新音乐
export const RecommendSong = query => request({
    method:'GET',
    url:'/personalized/newsong&realIP=171.212.33.193',
})
// 搜索歌曲
export const Search = (query) => request({
    method:'GET',
    url:`/cloudsearch?keywords=${query}&realIP=171.212.33.193`,
})
// 搜索歌单
export const SearchSongsList = (query) => request({
    method:'GET',
    url:`/cloudsearch?keywords=${query}&type=1000&limit=5&realIP=171.212.33.193`,
})
// 搜索建议
export const SearchSuggestions = query => request({
    method:'GET',
    url:`/search/suggest?keywords=${query}&type=mobile&realIP=171.212.33.193`,
})
