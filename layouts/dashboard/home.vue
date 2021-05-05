<template>
  <div
    data-open="click"
    data-menu="vertical-menu-modern"
    data-col=""
    class="vertical-layout vertical-menu-modern footer-static menu-expanded pace-done navbar-sticky"
  >
    <home-header></home-header>
    <home-sidebar></home-sidebar>

    <nuxt></nuxt>

    <home-footer></home-footer>
  </div>
</template>

<script>
import HomeHeader from '@/components/layout/dashboard/home/home-header'
import HomeSidebar from '@/components/layout/dashboard/home/home-sidebar'
import HomeFooter from '@/components/layout/dashboard/home/home-footer'
export default {
  name: 'Home',
  components: { HomeFooter, HomeSidebar, HomeHeader },
}
</script>

<style scoped></style>
