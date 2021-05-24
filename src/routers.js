import home from './components/backlog/home.vue'
import registroSprin from './components/backlog/registroSprin.vue'
import registroEpic from './components/backlog/registroEpic.vue'
import consultaSpring from './components/backlog/consultaSpring.vue'

export const routers = [
    {path:'/', component:home},
    {path:'/registroSprin', component:registroSprin},
    {path:'/registroEpic', component:registroEpic},
    {path:'/consultaSpring', component:consultaSpring}
]