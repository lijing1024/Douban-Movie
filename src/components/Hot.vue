<template>
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
  <div v-else style="margin:20px">努力加载中...</div>
</template>
<script>
import {mapState, mapActions} from 'vuex'
export default {
  name: 'Hot',
  computed: {
    ...mapState(['movieList'])
  },
  methods: {
    ...mapActions(['getHot']),
    toDetail (id) {
      this.$router.push(`/detail/${id}`)
    }
  },
  mounted () {
    this.getHot()
  }
}
</script>
<style scoped>

</style>
