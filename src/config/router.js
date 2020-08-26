import Vue from 'vue'
import VueRouter from 'vue-router'
import Jogos from '../components/Jogos.vue'
import Principal from '../components/Principal.vue'
Vue.use(VueRouter)
const routes =[
   {  path: `/jogos/:id`,
   component: Jogos,
   name: "jogos",},
   {  path: `/jogos`,
   component: Principal,
   name: "principal",}
]
export default  new VueRouter({
    routes,
    mode:'history'
})
