<template>
  <div>
    <!-- formularo de envio al back, altera el modelo reactivamente-->
    <form>
      <div class="form-group">
        <label for="InputMes">consulte por comienzo de mes</label>
        <input type="text" class="form-control" id="InputMes" v-model="SpringBusqueda.NombreMes">
        <small class="form-text text-muted">debe incresar el comienzo de fecha</small>
      </div>
      <button type="submit" class="btn btn-primary" v-on:click="getSprints">consultar</button>
    </form>

    <!-- card respueta del back, es una promesa-->
    <div class="card card-margin" 
      v-bind:key="sprint.id" 
      v-for="sprint in Sprints">
      <div class="card-header">
        resultado
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">identificador: {{sprint.id}}</li>
        <li class="list-group-item">fecha comienzo sprint: {{sprint.desde}}</li>
        <li class="list-group-item">fecha final: {{sprint.hasta}}</li>
      </ul>
      <ul class="list-group list-group-flush">
        <registroEpic :sprintId="sprint.id"></registroEpic>
      </ul>
    </div>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
import registroEpic from './registroEpic.vue'

export default {
    name:'consultaSpring',
    components:{
      registroEpic
    },
    computed:{
      ...mapState(['SpringBusqueda', 'Sprints'])
    },
    methods:{
      ...mapActions(['getSprints'])
    }
}
</script>

<style scoped>
.card-margin{
  margin-top: 3rem;
}
</style>