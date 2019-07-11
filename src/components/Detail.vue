<template>
  <div>
    <div>
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
    // console.log(this.$store.state.detail)
    this.getDetail(this.$route.params.id)
  }
}
</script>
<style scoped>

</style>
