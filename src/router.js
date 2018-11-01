/* global Vue */
import Router from 'vue-router'
import HelloWorld from '@/pages/HelloWorld'
import Native from '@/pages/native'

Vue.use(Router)

module.exports = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    }, {
      path: '/native',
      name: 'Native',
      component: Native,
    },
  ],
});
