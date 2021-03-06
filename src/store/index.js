import Vue from 'vue'
import Vuex from 'vuex'
import jsonp from 'jsonp'

Vue.use(Vuex)

// 定义baseURL（两个备用接口）
// const baseURL = 'http://api.douban.com/'
const baseURL = 'https://douban.uieee.com/'

const store = new Vuex.Store({
  state: {
    // 标题
    title: null,
    movieList: null,
    // 详情页数据
    detail: null
  },
  mutations: {
    setData (state, payload) {
      state.title = payload.title
      state.movieList = payload.subjects
    },
    clearData (state) {
      state.title = null
      state.movieList = null
      state.detail = null
    },
    setDetail (state, payload) {
      state.title = payload.title,
      state.detail = payload
    }
  },
  actions: {
    getHot (context) {
      // 使用jsonp请求数据
      jsonp(baseURL + 'v2/movie/in_theaters', (err, res) => {
        if (err) return alert('获取数据失败')
        // 不能直接修改state中的数据，要先commit给mutations
        context.commit('setData', res)
      })
    },
    getMovie (context) {
      jsonp(baseURL + 'v2/movie/coming_soon', (err, res) => {
        if(err) return alert('获取数据失败')
        context.commit('setData', res)
      })
    },
    getTop (context) {
      jsonp(baseURL + 'v2/movie/top250', (err, res) => {
        if(err) return alert('获取数据失败')
        context.commit('setData', res)
      })
    },
    // 获取详情页数据
    getDetail (context, id) {
      jsonp(baseURL + 'v2/movie/subject/' + id, (err, res) => {
        if(err) return alert('获取数据失败')
        context.commit('setDetail', res)
      })
    },
  }
})
export default store