<template>
  <div>{{title}}</div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  name: 'my-header',
  computed: {
    ...mapState(['title'])
  }
}
</script>
<style scoped>

</style>
