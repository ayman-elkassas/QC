import $ from 'jquery'
import { menu } from '~/data/menu'

export default {
  name: 'HomeSidebar',
  data: () => ({
    active: 'home',
    flag: false,
    menuContainer: menu,
  }),
  created() {
    if (process.client) {
      if (window.innerWidth < 700) {
        this.collapse()
      }
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
