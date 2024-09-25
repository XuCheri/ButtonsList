import { createMemoryHistory, createRouter } from 'vue-router'

import index from '@/views/index.vue'
import HelloWorld from '@/components/HelloWorld.vue'

const routes = [
  { path: '/', component: index },
  { path: '/HelloWorld', component: HelloWorld },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router