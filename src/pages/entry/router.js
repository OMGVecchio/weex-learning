/* global Vue */
import Router from 'vue-router'
import HelloWorld from './HelloWorld'
import HelloWorld2 from './HelloWorld2'

Vue.use(Router)

module.exports = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    }, {
      path: '/hello2',
      name: 'HelloWorld2',
      component: HelloWorld2,
    },
  ],
});
