import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import axios from 'axios'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state:{
        Sprint:{
            desde:'',
            hasta:''
        },
        SprintRespuest:{},
        SpringBusqueda:{
            NombreMes:''
        },
        Sprints:[],
        Epic:{
            Nombre:'',
            Descripcion:"",
            SprintId:""
        },
        EpicRespuest:{}
    },
    mutations:{
        crearSprint(state){
            Axios.post('http://localhost:52815/api/Backlog/Sprin',
            {
                "Desde": state.Sprint.desde,
                "Hasta": state.Sprint.hasta
            }).then((x) => {
                console.log(x)
                state.SprintRespuest = x.data;
            })
        },
        ObtenerSprintsPorMes(state){
            var a = 'http://localhost:52815/api/Backlog/MesSprints?NombreMes='+state.SpringBusqueda.NombreMes
            console.log(a)

            axios.get(a)
            .then((x) => {
                state.Sprints = x.data;
            }).catch(error =>{
                console.log(error);
            })
        },
        crearAsignacion(state){
            Axios.post('http://localhost:52815/api/Backlog/AssignToSpring',
            {
                "Nombre":state.Epic.Nombre,
                "Descripcion":state.Epic.Descripcion,
                "SprintId":state.Epic.SprintId
            }).then((x) => {
                console.log(x)
                state.EpicRespuest = x.data;
            })
        }
    },
    actions:{
        postSprint(context){
            context.commit('crearSprint')
        },
        getSprints(contex){
            contex.commit('ObtenerSprintsPorMes')
        },
        postAsignacion(context){
            context.commit('crearAsignacion')
        }
    }
})