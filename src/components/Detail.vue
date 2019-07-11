<template>
  <div>
    <div v-if="detail">
      <img :src="'https://images.weserv.nl?url='+ detail.images.medium" alt="">
      <p>{{detail.summary}}</p>
    </div>
  </div>
</template>
<script>
import {mapState, mapMutations, mapActions} from 'vuex'
export default {
  name: 'Detail',
  computed: {
    ...mapState(['detail'])
  },
  methods: {
    ...mapActions(['getDetail']),
    ...mapMutations(['clearData'])
  },
  created () {
    this.clearData()
  },
  mounted () {
    this.getDetail(this.$route.params.id)
  }
}
</script>
<style scoped>

</style>
