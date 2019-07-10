<template>
  <div id="app">
    <my-header class="header"></my-header>
    <div class="center">
      <router-view></router-view>
    </div>
    <my-footer class="footer"></my-footer>
  </div>
</template>

<script>
import myHeader from './components/layout/my-header'
import myFooter from './components/layout/my-footer'
export default {
  name: 'app',
  components: {
    myHeader,
    myFooter
  },
  data () {
    return {
    }
  }
}
</script>

<style>

</style>
