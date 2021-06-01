import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _f0ea3830 = () => interopDefault(import('../pages/about/index.vue' /* webpackChunkName: "pages/about/index" */))
const _6fb52af6 = () => interopDefault(import('../pages/plans/index.vue' /* webpackChunkName: "pages/plans/index" */))
const _3965302c = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _f4ba5226 = () => interopDefault(import('../pages/index/index.vue' /* webpackChunkName: "pages/index/index" */))
const _45af7ddc = () => interopDefault(import('../pages/index/today.vue' /* webpackChunkName: "pages/index/today" */))
const _32b47246 = () => interopDefault(import('../pages/index/_yyyymm/index.vue' /* webpackChunkName: "pages/index/_yyyymm/index" */))
const _4eddf06d = () => interopDefault(import('../pages/index/_yyyymm/_dd/index.vue' /* webpackChunkName: "pages/index/_yyyymm/_dd/index" */))
const _a4501d82 = () => interopDefault(import('../pages/index/_yyyymm/_dd/edit.vue' /* webpackChunkName: "pages/index/_yyyymm/_dd/edit" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _f0ea3830,
    name: "about"
  }, {
    path: "/plans",
    component: _6fb52af6,
    name: "plans"
  }, {
    path: "/",
    component: _3965302c,
    children: [{
      path: "",
      component: _f4ba5226,
      name: "index"
    }, {
      path: "today",
      component: _45af7ddc,
      name: "index-today"
    }, {
      path: ":yyyymm",
      component: _32b47246,
      name: "index-yyyymm"
    }, {
      path: ":yyyymm/:dd",
      component: _4eddf06d,
      name: "index-yyyymm-dd"
    }, {
      path: ":yyyymm/:dd/edit",
      component: _a4501d82,
      name: "index-yyyymm-dd-edit"
    }]
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
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
