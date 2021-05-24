<template>
  <div>
    <!-- formularo de envio al back, altera el modelo reactivamente-->
    <form>
      <div class="form-group">
        <label for="InputDesde">Desde que fecha</label>
        <input type="text" class="form-control" id="InputDesde" v-model="Sprint.desde">
        <small class="form-text text-muted">debe ingresar la fecha de inicio del sprint</small>
      </div>
      <div class="form-group">
        <label for="InputHasta">Hasta que fehcha</label>
        <input type="text" class="form-control" id="InputHasta" v-model="Sprint.hasta">
        <small class="form-text text-muted">debe ingresar la fehca de finacizacion del sprint</small>
      </div>
      <button type="submit" class="btn btn-primary" v-on:click="postSprint">Enviar</button>
    </form>

    <!-- card respueta del back, es una promesa-->
    <div class="card card-margin">
      <div class="card-header">
        resultado
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">identificador: {{SprintRespuest.id}}</li>
        <li class="list-group-item">fecha comienzo sprint: {{SprintRespuest.desde}}</li>
        <li class="list-group-item">fecha final: {{SprintRespuest.hasta}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'

export default {
    name:'registroSprin',
    computed:{
      ...mapState(['Sprint', 'SprintRespuest'])
    },
    methods:{
      ...mapActions(['postSprint'])
    }
}
</script>

<style scoped>
  .card-margin{
    margin-top: 2rem;
  }
</style>