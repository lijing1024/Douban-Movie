<template>
  <div>
    <ul v-if="movieList" class="list">
      <li v-for="item in movieList" :key=item.id>
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
    <div v-else style="margin:20px">数据加载中...</div>
  </div>
</template>
<script>
import {mapState, mapMutations, mapActions} from 'vuex'
export default {
  name: 'Top',
  computed: {
    ...mapState(['movieList'])
  },
  methods: {
    ...mapActions(['getTop']),
    ...mapMutations(['clearData'])
  },
  created () {
    this.clearData()
  },
  mounted () {
    this.getTop()
  }
}
</script>
<style scoped>

</style>
