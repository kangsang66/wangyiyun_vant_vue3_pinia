<template>
  <!-- 右侧弹出层 -->
  <div class="search">
    <van-popup v-model:show="showSearchPage"
               position="right"
               :overlay=false
               :style="{ width: '100%',height:'100%',zIndex:'100' }"
               ref="overlay">
      <div class="search_top">
        <van-cell>
          <div class="search_top_inner">
            <svg class="icon"
                 @click="showSearchFn"
                 aria-hidden="true">
              <use xlink:href="#icon-xitongfanhui"></use>
            </svg>
            <van-search v-model="historyValue"
                        :autofocus="true"
                        placeholder="请输入搜索关键词"
                        input-align="center"
                        shape="round" />
            <span @click="AddHistory">搜索</span>
          </div>
        </van-cell>
      </div>
      <div class="kinds"
           v-show="!playList.showSearchPopup&&!showSearchResultBox">
        <div>
          <svg t="1656751320627"
               class="icon"
               viewBox="0 0 1024 1024"
               version="1.1"
               xmlns="http://www.w3.org/2000/svg"
               p-id="10121"
               data-spm-anchor-id="a313x.7781069.0.i20"
               width="200"
               height="200">
            <path d="M691.533 277.555c0 98.667-18.536 135.088-113.309 178.645-89.641 41.221-178.67-79.978-178.67-178.645 0-98.666 85.071-209.869 178.67-178.643 107.844 35.948 113.309 79.977 113.309 178.643"
                  fill="#ffffff"
                  p-id="10122"
                  data-spm-anchor-id="a313x.7781069.0.i22"
                  class=""></path>
            <path d="M513.961 482.344c-112.925 0-204.814-91.863-204.814-204.789 0-112.925 91.889-204.788 204.814-204.788 112.926 0 204.789 91.862 204.789 204.788 0 112.926-91.863 204.789-204.789 204.789z m0-357.288c-84.101 0-152.525 68.411-152.525 152.499 0 84.089 68.424 152.5 152.525 152.5s152.501-68.412 152.501-152.5-68.4-152.499-152.501-152.499z"
                  fill="#d81e06"
                  p-id="10123"
                  data-spm-anchor-id="a313x.7781069.0.i23"
                  class=""></path>
            <path d="M806.553 728.11c0 163.631-64.672 147.266-228.328 147.266-163.657 0-296.319 16.365-296.319-147.266 0-163.645 132.662-272.766 296.319-272.766 163.656 0.001 228.328 109.122 228.328 272.766"
                  fill="#ffffff"
                  p-id="10124"
                  data-spm-anchor-id="a313x.7781069.0.i25"
                  class=""></path>
            <path d="M435.298 901.992c-84.484 0-156.38-5.105-201.29-49.62-28.595-28.353-42.484-68.998-42.484-124.262 0-26.54 3.217-52.429 9.574-76.914 3.6-13.965 17.949-22.39 31.863-18.739 13.966 3.612 22.366 17.885 18.741 31.864-5.234 20.207-7.889 41.665-7.889 63.789 0 40.608 8.834 69.101 27.013 87.127 35.974 35.679 113.001 35.016 201.852 34.237a4955.73 4955.73 0 0 1 82.517 0c89.132 0.816 165.904 1.455 201.903-34.251 18.18-18.013 27.013-46.518 27.013-87.113 0-142.913-113.615-246.647-270.176-246.647-54.279 0-105.878 13.047-149.23 37.735-12.536 7.124-28.494 2.771-35.668-9.791-7.149-12.548-2.756-28.506 9.779-35.655 51.242-29.157 111.803-44.578 175.12-44.578 183.828 0 322.465 128.513 322.465 298.936 0 55.264-13.891 95.909-42.484 124.25-51.498 51.024-138.535 50.283-239.154 49.402-26.706-0.23-54.97-0.23-81.624 0-12.845 0.116-25.483 0.23-37.841 0.23z"
                  fill="#d81e06"
                  p-id="10125"
                  data-spm-anchor-id="a313x.7781069.0.i21"
                  class=""></path>
            <path d="M250.628 621.338a26.03 26.03 0 0 1-12.943-3.447c-12.536-7.149-16.902-23.118-9.728-35.666 11.897-20.835 26.527-40.214 43.455-57.563 10.136-10.314 26.68-10.506 36.969-0.434 10.34 10.084 10.544 26.629 0.459 36.97-13.838 14.171-25.787 29.975-35.489 46.965-4.825 8.438-13.632 13.175-22.723 13.175zM512.199 742.701c-34.237 0-62.092-27.854-62.092-62.092v-62.093c0-34.238 27.855-62.093 62.092-62.093 34.238 0 62.094 27.854 62.094 62.093v62.093c0 34.238-27.855 62.092-62.094 62.092z m0-133.989c-5.412 0-9.803 4.405-9.803 9.805v62.093c0 5.399 4.392 9.804 9.803 9.804 5.413 0 9.805-4.404 9.805-9.804v-62.093c0-5.4-4.392-9.805-9.805-9.805z"
                  fill="#d81e06"
                  p-id="10126"
                  data-spm-anchor-id="a313x.7781069.0.i24"
                  class=""></path>
            <path d="M513.067 901.532c-14.297 0-25.965-11.501-26.143-25.837l-1.737-148.376c-0.178-14.438 11.414-26.284 25.838-26.452h0.306c14.298 0 25.965 11.503 26.144 25.839l1.736 148.376c0.179 14.438-11.412 26.285-25.838 26.45h-0.306z"
                  fill="#d81e06"
                  p-id="10127"
                  data-spm-anchor-id="a313x.7781069.0.i26"
                  class=""></path>
          </svg>
          <span>歌手</span>
          <i></i>
        </div>
        <div>
          <svg t="1656751606558"
               class="icon"
               viewBox="0 0 1024 1024"
               version="1.1"
               xmlns="http://www.w3.org/2000/svg"
               p-id="27353"
               width="200"
               height="200">
            <path d="M903.6 95.3c0-9-4.3-17.3-11.5-22.6-7.3-5.3-16.6-6.7-25.1-3.9L390.2 225.9c-11.4 3.7-19.1 14.3-19.2 26.3l-2.5 439.1c-26.2-21.6-59.7-34.6-96.2-34.6-83.4 0-151.3 67.9-151.3 151.3s67.9 151.3 151.3 151.3c83.3 0 151.1-67.7 151.3-151.1v-0.1l2.5-445.2L700 273c9.8-3.2 15.1-13.7 11.8-23.5-3.2-9.8-13.7-15.1-23.5-11.9l-262 86.2 0.3-51.2 421.1-138.7V185l-70 23c-9.8 3.2-15.1 13.7-11.8 23.5 2.6 7.8 9.8 12.8 17.7 12.8 1.9 0 3.9-0.3 5.8-0.9l58.5-19.3v329.1c-26.1-21.3-59.3-34.1-95.5-34.1-83.5 0-151.4 67.9-151.4 151.3s67.9 151.3 151.3 151.3 151.3-67.9 151.3-151.3c0-4.1-0.3-8.1-0.6-12.1 0.4-1.9 0.6-3.8 0.6-5.8V95.3zM272.4 903.6c-52.7 0-95.5-42.9-95.5-95.5 0-52.7 42.9-95.5 95.5-95.5 52.7 0 95.5 42.9 95.5 95.5 0.1 52.7-42.8 95.5-95.5 95.5z m479.9-137.7c-52.7 0-95.6-42.9-95.6-95.5 0-52.7 42.9-95.6 95.6-95.6 52.7 0 95.5 42.9 95.5 95.6 0 52.7-42.8 95.5-95.5 95.5z"
                  fill="#d81e06"
                  p-id="27354"></path>
            <path d="M791.8 652c-10.3 0-18.6 8.3-18.6 18.6 0 11.5-9.4 21-21 21s-21-9.4-21-21c0-7.5 4.1-14.5 10.6-18.2 8.9-5.1 11.9-16.5 6.8-25.4-5.1-8.9-16.5-11.9-25.4-6.8-18 10.4-29.2 29.7-29.2 50.4 0 32.1 26.1 58.1 58.2 58.1s58.2-26.1 58.2-58.1c0.1-10.2-8.3-18.6-18.6-18.6zM312 786.9c-10.3 0-18.6 8.3-18.6 18.6 0 11.5-9.4 21-21 21s-21-9.4-21-21c0-7.5 4-14.5 10.5-18.2 8.9-5.2 11.9-16.5 6.8-25.4-5.1-8.9-16.5-12-25.4-6.8-18 10.4-29.2 29.7-29.2 50.4 0 32.1 26.1 58.1 58.1 58.1 32.1 0 58.1-26.1 58.1-58.1 0.3-10.3-8-18.6-18.3-18.6z"
                  fill="#d81e06"
                  p-id="27355"></path>
          </svg>
          <span>曲风</span>
          <i></i>
        </div>
        <div>
          <svg t="1656751524430"
               class="icon"
               viewBox="0 0 1024 1024"
               version="1.1"
               xmlns="http://www.w3.org/2000/svg"
               p-id="23217"
               width="200"
               height="200">
            <path d="M789.74509 0a57.904987 57.904987 0 1 0 57.904987 57.904987A57.904987 57.904987 0 0 0 789.74509 0z"
                  fill="#FF517F"
                  opacity=".3"
                  p-id="23218"></path>
            <path d="M516.459795 731.604091a185.853685 185.853685 0 1 1 185.689648-185.689648A186.017722 186.017722 0 0 1 516.459795 731.604091z m0-289.524937a103.835289 103.835289 0 1 0 103.671252 103.835289A103.999326 103.999326 0 0 0 516.459795 442.899337z"
                  fill="#FF517F"
                  p-id="23219"></path>
            <path d="M516.459795 1023.917654a478.167248 478.167248 0 1 1 0-956.170459 487.517345 487.517345 0 0 1 60.037466 3.772846 41.009198 41.009198 0 1 1-10.170281 82.018396 389.58738 389.58738 0 0 0-49.211038-3.116699 395.656741 395.656741 0 1 0 253.764917 91.860603 41.009198 41.009198 0 1 1 52.491773-62.826091 478.003211 478.003211 0 0 1-306.912837 844.461404z"
                  fill="#FF517F"
                  p-id="23220"></path>
            <path d="M661.632356 586.923641a42.813603 42.813603 0 0 1-14.763312-2.788626 41.009198 41.009198 0 0 1-23.457261-52.983884l126.80044-330.042024a41.009198 41.009198 0 0 1 76.605182 29.526622L699.360818 560.677754a41.009198 41.009198 0 0 1-37.728462 26.245887z"
                  fill="#FF517F"
                  p-id="23221"></path>
          </svg>
          <span>专区</span>
          <i></i>
        </div>
        <div>
          <svg t="1656751685487"
               class="icon"
               viewBox="0 0 1024 1024"
               version="1.1"
               xmlns="http://www.w3.org/2000/svg"
               p-id="31955"
               width="200"
               height="200">
            <path d="M827.246871 451.075419c-12.94994-0.588401-23.925922 9.432837-24.51637 22.382776-0.093121 2.062985-0.418532 6.353708-1.106194 12.542664-1.170662 10.54824-2.959402 22.35924-5.490038 35.106566-7.226588 36.413328-18.898419 72.794933-35.917024 106.534362-47.672766 94.508467-126.925784 150.334937-248.217245 150.71663-121.290437-0.381693-200.546525-56.208163-248.217245-150.71663-17.018605-33.739429-28.692482-70.120011-35.919071-106.534362-2.529613-12.747325-4.317329-24.558325-5.487991-35.106566-0.687662-6.188956-1.014096-10.479679-1.108241-12.542664-0.588401-12.94994-11.564383-22.971178-24.514323-22.382776-12.951987 0.588401-22.973224 11.564383-22.382776 24.51637 0.5137 11.339256 2.63092 30.394241 7.446599 54.654784 8.000208 40.316218 20.946055 80.665181 40.051181 118.537743 51.840692 102.776781 138.972145 167.127392 265.456884 175.017082l0 85.599563L291.185872 909.400962c-12.96529 0-23.473621 10.510378-23.473621 23.473621 0 12.96529 10.508331 23.473621 23.473621 23.473621l441.857477 0c12.963243 0 23.473621-10.508331 23.473621-23.473621 0-12.963243-10.510378-23.473621-23.473621-23.473621L534.272259 909.400962l0-85.454254c127.791501-7.209192 215.690434-71.734788 267.86063-175.162392 19.104103-37.872562 32.050973-78.221526 40.051181-118.537743 4.815679-24.260543 6.930853-43.315528 7.446599-54.654784C850.217025 462.639802 840.197834 451.66382 827.246871 451.075419z"
                  p-id="31956"
                  fill="#d81e06"></path>
            <path d="M510.171352 700.19215c106.568131 0 193.353706-86.506213 193.353706-193.220676L703.525058 260.871449c0-106.59269-86.567611-193.220676-193.353706-193.220676-106.570177 0-193.353706 86.508259-193.353706 193.220676l0 246.100024C316.817646 613.567233 403.385257 700.19215 510.171352 700.19215zM363.764887 260.871449c0-80.693834 65.674769-146.273435 146.407488-146.273435 80.8197 0 146.407488 65.570391 146.407488 146.273435l0 246.100024c0 80.69588-65.674769 146.273435-146.407488 146.273435-80.8197 0-146.407488-65.568345-146.407488-146.273435L363.764887 260.871449z"
                  p-id="31957"
                  fill="#d81e06"></path>
          </svg>
          <span>识曲</span>
        </div>
      </div>
      <div ref="recommend"
           class="recommend"
           v-show="historyArr&&!playList.showSearchPopup&&!showSearchResultBox">
        <div class="history">
          <span>历史</span>
          <!-- 中划线命名 -->
          <img @click="deleteHistroy"
               src="../../../public/img/laji.png"
               alt="">
          <van-dialog />
        </div>
        <!-- 历史记录 -->
        <div class="historyInfo">
          <div class="historyBox"
               :ref="filterLi">
            <div>
              <li @click="getName(value)"
                  v-for="(value,id) in historyArr"
                  :key="id">{{value}}</li>
              <li @click="MoreHistory"
                  v-show="show"
                  class="arrow">
                <van-icon name="arrow-up" />
              </li>
            </div>
          </div>
          <!-- 展示更多历史记录 -->
          <li @click="MoreHistory"
              class="arrow"
              v-show="showMoreHistory">
            <van-icon name="arrow-down" />
          </li>
        </div>
      </div>
      <div class="recommend"
           v-show="!playList.showSearchPopup&&!showSearchResultBox">
        <div class="history">
          <span>推荐</span>
          <!-- 中划线命名 -->
          <svg @click="GetRecommendSong"
               t="1658386604833"
               class="icon"
               viewBox="0 0 1024 1024"
               version="1.1"
               xmlns="http://www.w3.org/2000/svg"
               p-id="2271"
               width="35"
               height="35">
            <path d="M960 416V192l-73.056 73.056a447.712 447.712 0 0 0-373.6-201.088C265.92 63.968 65.312 264.544 65.312 512S265.92 960.032 513.344 960.032a448.064 448.064 0 0 0 415.232-279.488 38.368 38.368 0 1 0-71.136-28.896 371.36 371.36 0 0 1-344.096 231.584C308.32 883.232 142.112 717.024 142.112 512S308.32 140.768 513.344 140.768c132.448 0 251.936 70.08 318.016 179.84L736 416h224z"
                  p-id="2272"
                  fill="#b6b7b7"></path>
          </svg>
        </div>
        <!-- 历史记录 -->
        <div class="historyInfo">
          <div class="historyBox">
            <div>
              <li @click="getName(value.name)"
                  v-for="(value,id) in data.RecommendSong"
                  :key="id">{{value.name.slice(0,5)+'...'}}</li>
            </div>
          </div>
        </div>
      </div>
      <div class="SearchBox"
           v-show="playList.showSearchPopup">
        <div class="SearchBox_top">
          <span>综合</span>
          <span>单曲</span>
          <span>歌单</span>
          <span>视频</span>
          <span>歌手</span>
          <span>博客</span>
        </div>
        <div class="box">
          <li>
            <b>单曲</b>
            <div class="playAll">
              <svg t="1658460252614"
                   class="icon"
                   viewBox="0 0 1024 1024"
                   version="1.1"
                   xmlns="http://www.w3.org/2000/svg"
                   p-id="2263"
                   width="200"
                   height="200">
                <path d="M128 138.666667c0-47.232 33.322667-66.666667 74.176-43.562667l663.146667 374.954667c40.96 23.168 40.853333 60.8 0 83.882666L202.176 928.896C161.216 952.064 128 932.565333 128 885.333333v-746.666666z"
                      fill="#d81e06"
                      p-id="2264"></path>
              </svg>
              <span>播放全部</span>
            </div>
          </li>
          <div class="songbox"
               v-for="(ele,id) in data.Search"
               @click="pushsong(ele,id)"
               :key="id">
            <div class="songbox_center">
              <!-- 歌曲名 -->
              <span class="songname">{{ele.name}}</span>
              <!-- 歌手名 -->
              <!-- 专辑名 -->
              <span class="album"> {{ele.ar[0].name}}<span
                      class="sp">-</span>{{ele.al.name}}</span>
            </div>

            <!-- 右图标 -->
            <div class="icons">
              <svg t="1657190101550"
                   class="icon"
                   viewBox="0 0 1024 1024"
                   version="1.1"
                   xmlns="http://www.w3.org/2000/svg"
                   p-id="40365"
                   width="200"
                   height="200">
                <path d="M512 42.666667C252.793333 42.666667 42.666667 252.793333 42.666667 512s210.126667 469.333333 469.333333 469.333333 469.333333-210.126667 469.333333-469.333333S771.206667 42.666667 512 42.666667z m0 896c-235.64 0-426.666667-191.026667-426.666667-426.666667s191.026667-426.666667 426.666667-426.666667 426.666667 191.026667 426.666667 426.666667-191.026667 426.666667-426.666667 426.666667z m-74.666667-213.38a53.373333 53.373333 0 0 1-53.333333-53.333334V352.066667A53.333333 53.333333 0 0 1 467.373333 308L702 467.933333a53.333333 53.333333 0 0 1 0 88.133334L467.373333 716a53.286667 53.286667 0 0 1-30.04 9.286667z m0.08-383.933334a11.093333 11.093333 0 0 0-5.08 1.28 10.446667 10.446667 0 0 0-5.666666 9.433334v319.866666a10.666667 10.666667 0 0 0 16.666666 8.82l234.666667-159.94a10.666667 10.666667 0 0 0 0-17.626666l-234.666667-159.933334a10.313333 10.313333 0 0 0-5.906666-1.92z"
                      fill="#919191"
                      p-id="40366">
                </path>
              </svg>
              <svg t="1657190175390"
                   class="icon"
                   viewBox="0 0 1024 1024"
                   version="1.1"
                   xmlns="http://www.w3.org/2000/svg"
                   p-id="42121"
                   data-spm-anchor-id="a313x.7781069.0.i28"
                   width="200"
                   height="200">
                <path d="M512 704c35.2 0 64 28.8 64 64s-28.8 64-64 64-64-28.8-64-64 28.8-64 64-64z m-64-192c0 35.2 28.8 64 64 64s64-28.8 64-64-28.8-64-64-64-64 28.8-64 64z m0-256c0 35.2 28.8 64 64 64s64-28.8 64-64-28.8-64-64-64-64 28.8-64 64z"
                      p-id="42122"
                      data-spm-anchor-id="a313x.7781069.0.i29"
                      class="selected"
                      fill="#919191"></path>
              </svg>
            </div>
          </div>
        </div>
        <div class="box">
          <li>
            <b>歌单</b>
          </li>

          <div class="songbox songboxSongsList"
               v-for="(ele,id) in data.SearchSongsList"
               :key="id">
            <router-link
                         :to="{ path: '/recommendMusic', query: { id: ele.id } }">
              <img :src="ele.coverImgUrl"
                   alt="">
              <div class="songbox_right">
                <b>{{ele.name}}</b>
                <span>{{ele.trackCount}}首,by {{ele.creator.nickname}},
                  播放{{ele.playCount}}次</span>
              </div>
            </router-link>
          </div>
        </div>
      </div>
      <div class="showSearchResultBox"
           v-show="showSearchResultBox">
        <li v-for="(ele,id) in  data.SearchSuggestions"
            :key="id">
          <svg t="1658562259689"
               class="icon"
               viewBox="0 0 1024 1024"
               version="1.1"
               xmlns="http://www.w3.org/2000/svg"
               p-id="2277"
               width="16"
               height="16">
            <path d="M934.242232 884.637975 738.287281 695.561689l1.836835-2.302439c52.767807-65.338101 81.829703-147.602709 81.829703-231.593636 0-203.716728-165.742858-369.473913-369.411491-369.473913-203.731054 0-369.505635 165.757185-369.505635 369.473913 0 203.715705 165.774581 369.45754 369.505635 369.45754 89.26607 0 175.511339-32.450063 242.841817-91.288123l2.209318-1.929955 195.485253 186.963159 1.959631 0 0.031722 1.61887c4.947685 3.483334 10.517541 5.319146 16.5837 5.319146 16.180518 0 29.308513-13.192464 29.308513-29.310559C940.96126 896.276037 938.72329 890.239554 934.242232 884.637975zM452.541305 772.413008c-171.358763 0-310.74637-139.388631-310.74637-310.74637 0-171.34239 139.387607-310.700321 310.74637-310.700321 171.309644 0 310.700321 139.357931 310.700321 310.700321C763.241626 633.024377 623.851972 772.413008 452.541305 772.413008z"
                  p-id="2278"
                  fill="#bfbfbf"></path>
          </svg>
          <p>{{historyValue}}<span>{{ele.keyword}}</span></p>
        </li>
      </div>
    </van-popup>
  </div>
</template>

<script>
// 推荐歌曲、推荐歌手、搜索建议
import { RecommendSongAPI, SearchAPI, SearchSuggestionsAPI, SearchSongsListAPI } from '@/api/index.js'
import { Dialog } from 'vant'
import { usePlayListStore } from '@/store'
import { watch, ref, onMounted, reactive } from '@vue/runtime-core'
export default {
  name: 'Search',
  props: ['showSearchPage', 'showSearchFn'],
  setup (props) {
    // 组件挂载就去找
    onMounted(() => {
      historyArr.value = JSON.parse(sessionStorage.getItem('history'))
      GetRecommendSong()
    })
    // 展示搜索结果页的状态
    const playList = reactive(usePlayListStore())
    // 展示推荐搜索页
    const showSearchResultBox = ref(false)
    const data = reactive({
      RecommendSong: [], // 推荐歌曲
      Search: [], // 歌曲
      SearchSuggestions: [], // 搜索建议
      SearchSongsList: [] // 歌单
    })
    // 获取推荐歌曲数据
    const GetRecommendSong = async () => {
      data.RecommendSong = []
      let res = await RecommendSongAPI()
      console.log(res);
      let radOne = Math.floor(Math.random() * 3 + 7)
      let radTwo = Math.floor(Math.random() * 3 + 4)
      let radThree = Math.floor(Math.random() * 4)
      data.RecommendSong.push(res.data.result[radOne])
      data.RecommendSong.push(res.data.result[radTwo])
      data.RecommendSong.push(res.data.result[radThree])
    }
    // 获取歌曲
    const getName = (name) => {
      console.log(name);
    }
    // 输入值
    const historyValue = ref(null)
    // Set数组
    const set = ref(new Set())
    // 历史记录遍历对象
    const historyArr = ref()
    // 展示更多历史
    const showMoreHistory = ref(false)
    const recommend = ref(null)
    // 是否展示下拉
    const show = ref(false)
    // 是否展示搜索结果
    let showSearchMain = ref(false)
    // 保存并处理输入值
    let obj = {}
    const VanDialog = Dialog.Component
    // 是否展示搜索页
    let showSearchPage = ref(false)
    // 定时器防抖
    let timer = null
    // 过滤掉大于330的li
    const filterLi = el => {
      if (el && el.clientWidth >= 330) {
        showMoreHistory.value = true
      }
    }
    // 异步关闭
    const beforeClose = (action) =>
      new Promise((resolve) => {
        if (action === 'confirm') {
          resolve(true);
        } else if (action === 'cancel') {
          resolve(true)
        }
      });
    // 播放歌曲
    function pushsong (ele) {
      playList.playListIndex = playList.songsList.length
      playList.isplay = true
      playList.animationShow = true
      // 结构
      const { al, ar, id } = ele
      playList.pushPlayList(ele, { al, ar, id })
    }
    // 搜索添加历史记录并显示搜索层
    function AddHistory () {
      if (historyValue.value.trim()) {
        // 通过set去重
        if (historyValue.value.length >= 20) {
          historyValue.value = historyValue.value.slice(0, 20) + '...'
        }
        set.value.add(historyValue.value)
        set.value.forEach((ele, id) => {
          // 解决对象属性自动排序问题  加上字母
          id = 'history_' + id
          obj[id] = ele
        })

        // 大于10条就删除
        for (const key in obj) {
          if (Object.keys(obj).length >= 11) {
            delete obj[Object.keys(obj)[0]]
          }
        }
        sessionStorage.setItem('history', JSON.stringify(Object.values(obj)))
        historyArr.value = JSON.parse(sessionStorage.getItem('history'))
        historyArr.value.reverse()
        // 清空当前输入值
        historyValue.value = null
        // 显示搜索层
        playList.showSearchPopup = true
        // 隐藏搜索建议层
        showSearchResultBox.value = false
      } else {
        return
      }
    }
    // 隐藏与展示历史记录
    function MoreHistory () {
      show.value = !show.value
      showMoreHistory.value = !showMoreHistory.value
    }
    // 清空历史记录
    function deleteHistroy () {
      Dialog.confirm({
        message:
          '确定清空全部历史记录?',
        beforeClose,
      })
        .then(() => {
          // 图标展示鲜果
          show.value = false
          showMoreHistory.value = false
          // 数组清空
          historyArr.value = null
          // 处理数据对象清空
          obj = {}
          // 去重set清空
          set.value.clear()
          sessionStorage.removeItem('history');
        })
        .catch(() => {
          return
        })
    }
    // // 获取并进入歌单详情页
    // async function intoSongsListPage (id) {
    //   let res = await RecommendIdAPI(id)
    //   // 将数据存入pinia
    //   playList.songsList = res.data
    //   console.log('当前点击的歌单详情',);
    // }
    // 监视当前输入的值变化来显示搜索层
    watch(() => historyValue.value, () => {
      clearTimeout(timer)
      if (historyValue.value) {
        timer = setTimeout(async () => {
          // 单曲
          let resSongs = await SearchAPI(historyValue.value, 1)
          // 歌单
          let resSongsList = await SearchSongsListAPI(historyValue.value, 1000)
          data.SearchSongsList = resSongsList.data.result.playlists
          console.log(data.SearchSongsList);
          // 推荐搜索
          let resSuggestion = await SearchSuggestionsAPI(historyValue.value)
          resSuggestion.data.result.allMatch.forEach((ele) => {
            ele.keyword = ele.keyword.slice(historyValue.value.length, Infinity)
          })
          data.SearchSuggestions = resSuggestion.data.result.allMatch
          data.Search = resSongs.data.result.songs.slice(0, 5)
          // console.log(data.Search);
          showSearchResultBox.value = true
        }, 500)
      }
    })
    // 监视是否显示更多历史记录
    watch(() => show.value, () => {
      if (show.value === true) {
        recommend.value.style.height = '2.7rem'
      } else {
        recommend.value.style.height = '1.7rem'
      }
    })
    // 监视props属性
    watch(() => props.showSearchPage, () => {
      showSearchPage.value = props.showSearchPage
    })
    // 监视
    watch(() => historyValue.value, () => {
      if (historyValue.value === '') {
        data.SearchSuggestions = []
      }
    })
    return {
      showSearchPage,
      historyValue,
      historyArr,
      set,
      showMoreHistory,
      recommend,
      show,
      data,
      showSearchMain,
      playList,
      showSearchResultBox,
      VanDialog,
      filterLi,
      AddHistory,
      MoreHistory,
      deleteHistroy,
      GetRecommendSong,
      getName,
      pushsong,
      // intoSongsListPage
    }
  }
}
</script>

<style lang="less" scoped>
.search_top {
  width: 100%;
  .van-cell {
    padding: 0.4rem;
    .search_top_inner {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .van-search {
      padding: 0;
      width: 70%;
    }
    svg {
      width: 0.6rem;
      height: 0.6rem;
    }
    span {
      font-size: 0.46rem;
    }
  }
}
.kinds {
  width: 100%;
  height: 1.2rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 3px;
  padding: 0.2 0.2rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25%;
    height: 0.8rem;
    line-height: 0.8rem;
    text-align: center;
  }
  svg {
    vertical-align: middle;
    width: 0.5rem;
    height: 0.5rem;
    margin-right: 0.16rem;
  }
  span {
    font-weight: 600;
    font-size: 0.4rem;
  }
  i {
    display: inline-block;
    margin-left: 0.55rem;
    width: 0.02rem;
    height: 0.4rem;
    background-color: rgb(223, 222, 222);
  }
}
.recommend {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 1.7rem;
  background-color: #f6f7f7;
  .icon {
    width: 0.45rem;
    height: 0.45rem;
    margin-right: 0.1rem;
  }
  .history {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.1rem 0.3rem;
    span {
      font-weight: 600;
      font-size: 0.4rem;
      height: 0.6rem;
    }
    img {
      width: 0.7rem;
      height: 0.7rem;
    }
  }
  .historyInfo {
    display: flex;
    justify-content: flex-start;
    height: 3rem;
    padding: 0rem 0.3rem;
    overflow: hidden;
    li {
      float: left;
      display: flex;
      word-wrap: break-word;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      width: auto;
      padding: 0.2rem 0.3rem;
      height: 0.7rem;
      background-color: #fff;
      border-radius: 0.4rem;
      font-size: 0.4rem;
      color: #b5b5b5;
      margin: 0 0.2rem 0.2rem 0;
    }
    .arrow {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 0.7rem;
      height: 0.7rem;
      padding: 0.2rem 0.2rem;
    }
    .historyBox {
      height: 0.7rem;
    }
  }
}
.SearchBox {
  width: 100%;
  padding: 0 0.2rem;
  background-color: #f5f5f5;
  .SearchBox_top {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 1rem;
    span {
      color: #7d7b7b;
      font-size: 0.36rem;
    }
  }
  .box {
    height: 50%;
    margin: 0.4rem;
    border-radius: 0.4rem;
    padding: 0.2rem 0.4rem 0.3rem 0.4rem;
    background-color: #fff;
    .playAll {
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding: 0.15rem;
      width: 2rem;
      height: 0.6rem;
      border: 0.01rem solid #fe3937;
      border-radius: 0.6rem;
      svg {
        width: 0.26rem;
        height: 0.26rem;
      }
      span {
        color: #fe3937;
        font-size: 0.32rem;
      }
    }
    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 1.6rem;
      font-size: 0.52rem;
      border-bottom: 0.02rem solid #eee;
    }
  }
  .songbox {
    display: flex;
    align-items: center;
    padding: 0.8rem 0rem;
    border-radius: 0 0.4rem 0.4rem 0;
    width: 100%;
    height: 1.2rem;
    transition: 0.6s;
    margin: 0.2rem 0;
    a {
      display: flex;
    }
    .id {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 1.2rem;
      height: 1.2rem;
      span {
        font-size: 0.44rem;
        color: #939393;
      }
    }
    .songbox_right {
      margin-left: 0.2rem;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      b {
        color: #5680aa;
        font-size: 0.48rem;
        font-weight: normal;
      }
      span {
        color: #8d8d8d;
        font-size: 0.32rem;
      }
    }
    img {
      border-radius: 0.3rem;
      width: 1.4rem;
      height: 1.4rem;
      vertical-align: middle;
    }

    .songbox_center {
      display: flex;
      flex-direction: column;
      width: 6.6rem;
      .songname {
        font-size: 0.44rem;
        overflow: hidden;
        text-overflow: ellipsis;
        /* 弹性伸缩盒子模型显示 */
        display: -webkit-box;
        /* 限制在一个块元素显示的文本的行数 */
        -webkit-line-clamp: 1;
        /* 设置或检索伸缩盒对象的子元素的排列方式 */
        -webkit-box-orient: vertical;
      }
      .album {
        font-size: 0.32rem;
        overflow: hidden;
        text-overflow: ellipsis;
        /* 弹性伸缩盒子模型显示 */
        display: -webkit-box;
        /* 限制在一个块元素显示的文本的行数 */
        -webkit-line-clamp: 1;
        /* 设置或检索伸缩盒对象的子元素的排列方式 */
        -webkit-box-orient: vertical;
        color: #999;
        .sp {
          margin: 0 0.1rem;
        }
      }
    }
    .icons {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 2rem;
      padding: 0 0 0 0.36rem;
    }
  }
}
.showSearchResultBox {
  width: 100%;
  padding-left: 0.4rem;
  li {
    display: flex;
    height: 1.4rem;
    justify-content: flex-start;
    align-items: center;

    svg {
      width: 0.5rem;
      height: 0.5rem;
      margin-right: 0.2rem;
    }
    p {
      display: flex;
      align-items: center;
      width: 100%;
      height: 1.4rem;
      font-size: 0.4rem;
      color: #afafaf;
      border-bottom: 0.02rem solid #eee;
      span {
        color: black;
      }
    }
  }
}
</style>