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
  <div v-else style="margin:20px">正在加载数据...</div>
  </div>
</template>
<script>
import {mapState, mapActions} from 'vuex'
export default {
  name: 'Movie',
  computed: {
    ...mapState(['movieList'])
  },
  methods: {
    ...mapActions(['getMovie'])
  },
  mounted () {
    this.getMovie()
  }
}
</script>
<style scoped>

</style>
