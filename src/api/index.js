// api统一暴露
import { Banner,Recommend } from "@/api/Home";
import { RecommendId,RecommendSongs,SongLyric,Subscribers} from "@/api/Item";
import {RecommendSong,Search,SearchSuggestions,SearchSongsList} from '@/api/Search'
import {PhoneLogin,VerifyPhone} from '@/api/Login'
// 首页轮播图API
export const BannerAPI = Banner
// 首页推荐歌曲API
export const RecommendAPI = Recommend
// 推荐歌曲详情页API
export const RecommendIdAPI = RecommendId
// 推荐歌曲
export const RecommendSongsAPI = RecommendSongs
// 搜索页推荐歌曲
export const RecommendSongAPI = RecommendSong
// 获取歌词
export const SongLyricAPI = SongLyric
// 获取歌单收藏者
export const SubscribersAPI = Subscribers
// 搜索歌曲
export const SearchAPI = Search
// 搜索歌单
export const SearchSongsListAPI = SearchSongsList
// 搜索建议
export const SearchSuggestionsAPI = SearchSuggestions
// 手机发送验证码
export const PhoneLoginAPI = PhoneLogin
// 验证手机号以及验证码
export const VerifyPhoneAPI = VerifyPhone