/* global Vue */

/* weex initialized here, please do not move this line */
import App from '@/pages/entry/index'
import router from '@/pages/entry/router'
/* eslint-disable no-new */
new Vue(Vue.util.extend({ el: '#root', router }, App))
router.push('/')
