import $ from 'jquery'
import HomeHeader from '@/components/layout/dashboard/home/header/home-header'
import { menu } from '~/data/menu'

export default {
  name: 'HomeSidebar',
  components: { HomeHeader },
  data: () => ({
    active: 'home',
    flag: false,
    client: process.client,
    mobile: process.client && window.innerWidth < 700,
    menuContainer: menu,
  }),
  mounted() {
    if (this.mobile) {
      this.collapse()
    }
  },
  methods: {
    collapse() {
      this.flag = !this.flag
      const selector = $('body')
      // eslint-disable-next-line no-undef
      selector.hasClass('menu-collapsed')
        ? selector.removeClass('menu-collapsed').addClass('menu-expanded')
        : selector.removeClass('menu-expanded').addClass('menu-collapsed')
    },
  },
}
