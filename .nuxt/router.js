import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3965302c = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _32b47246 = () => interopDefault(import('../pages/index/_yyyymm/index.vue' /* webpackChunkName: "pages/index/_yyyymm/index" */))
const _4eddf06d = () => interopDefault(import('../pages/index/_yyyymm/_dd/index.vue' /* webpackChunkName: "pages/index/_yyyymm/_dd/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _3965302c,
    name: "index",
    children: [{
      path: ":yyyymm",
      component: _32b47246,
      name: "index-yyyymm"
    }, {
      path: ":yyyymm?/:dd",
      component: _4eddf06d,
      name: "index-yyyymm-dd"
    }]
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config.app && config.app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
