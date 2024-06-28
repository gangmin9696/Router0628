import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Portfolio from '../views/Portfolio.vue'
import Gallery from '../views/Gallery.vue'
import Contact from '../views/Contact.vue'

const routes = [ //페이지 정보들 //path-> webpage address
  { path: '/',  component:Home},
  { path: '/about',  component:About},
  { path: '/Portfolio',  component:Portfolio},
  { path: '/Gallery',  component:Gallery},
  { path: '/Contact',  component:Contact},
]
const router = createRouter({
  history:createWebHistory('/'),
  routes // routes: routes key와value가 같으면 한번만 적용
})

export default router;
//라우터 객체(페이지 이동할 수 있게 해주는)를 외부에서 사용할 수 있도록