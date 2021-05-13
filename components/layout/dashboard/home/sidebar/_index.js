import {menu} from '~/data/menu'

export default {
  name: 'HomeSidebar',
  data: () => ({
    active: 'home',
    flag: false,
    menuContainer:menu,
  }),
  methods:{
    collapse(){
      this.flag = !this.flag;
      $('body').hasClass('menu-collapsed')?
        $('body').removeClass('menu-collapsed').addClass('menu-expanded'):
        $('body').removeClass('menu-expanded').addClass('menu-collapsed')
    }
  }
}
