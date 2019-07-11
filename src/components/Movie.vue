<template>
  <div>
    <ul v-if="movieList" class="list">
      <li v-for="item in movieList" :key=item.id @click="toDetail(item.id)">
        <img :src="'https://images.weserv.nl?url='+ item.images.small" alt="">
        <div class="info">
          <p style="font-size: 12px;font-weight: bold;">{{item.title}}</p>
          <p style="font-size: 12px;color:#999;">豆瓣评分：{{item.rating.average}}</p>
          <p>
            <span class="tag" v-for="(tag, i) in item.genres" :key="i">{{tag}}</span>
          </p>
        </div>
      </li>
    </ul>
    <div v-else style="margin:20px">正在加载数据...</div>
  </div>
</template>
<script>
import {mapState, mapMutations, mapActions} from 'vuex'
export default {
  name: 'Movie',
  computed: {
    ...mapState(['movieList'])
  },
  methods: {
    ...mapActions(['getMovie']),
    ...mapMutations(['clearData']),
    toDetail (id) {
      this.$router.push(`/detail/${id}`)
    }
  },
  // Hot组件和Movie公用一个action,为避免数据闪烁问题,渲染数据前(created)先清空原数据
  created () {
    this.clearData()
  },
  mounted () {
    this.getMovie()
  }
}
</script>
<style scoped>

</style>
