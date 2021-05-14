import $ from 'jquery'
import HomeHeader from '@/components/layout/dashboard/home/header/home-header'
import { menu } from '~/data/menu'

export default {
  name: 'HomeSidebar',
  components: { HomeHeader },
  data: () => ({
    active: 'home',
    flag: false,
    mobile: false,
    menuContainer: menu,
  }),
  created() {
    if (process.client && window.innerWidth < 700) {
      this.mobile = true
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
