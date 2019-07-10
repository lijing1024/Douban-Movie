<template>
  <div class="footer">
    <router-link to="/hot" class="item">
      <i class="iconfont icon-remen"></i>
      <p>正在热映</p>
    </router-link>
    <router-link to='/movie' class="item">
      <i class="iconfont icon-dianying"></i>
      <p>即将上映</p>
    </router-link>
    <router-link to="/top250" class="item">
      <i class="iconfont icon-top"></i>
      <p>top250</p>
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'my-footer'
}
</script>
<style scoped>

</style>
