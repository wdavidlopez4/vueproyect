<template>
  <div>
    <h4>añadir feature</h4>
    <!-- formularo de envio al back, altera el modelo reactivamente-->
    <form>
      <div class="form-group">
        <label for="InputNombre">Nombre</label>
        <input type="text" class="form-control" id="InputNombre" v-model="Epic.Nombre">
        <small class="form-text text-muted">ingrese el nombre de la epica</small>
      </div>
      <div class="form-group">
        <label for="InputDescripcion">Descripcion</label>
        <input type="text" class="form-control" id="InputDescripcion" v-model="Epic.Descripcion">
        <small class="form-text text-muted">ingrese una descripcion</small>
      </div>
      <button type="submit" class="btn btn-primary" v-on:click="postAsignacion">Añadir</button>
    </form>

    <!-- card respueta del back, es una promesa-->
    <div class="card card-margin">
      <div class="card-header">
        resultado
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">identificador: {{EpicRespuest.id}}</li>
        <li class="list-group-item">nombre: {{EpicRespuest.nombre}}</li>
        <li class="list-group-item">descripcion: {{EpicRespuest.descripcion}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'

export default {
    name:'registroEpic',
    computed:{
      ...mapState(['Epic', 'EpicRespuest'])
    },
    methods:{
      ...mapActions(['postAsignacion'])
    },
    props:{
      sprintId:String
    },
    mounted(){
      this.Epic.SprintId = this.sprintId;
    },
}
</script>

<style scoped>
  .card-margin{
    margin-top: 2rem;
  }
</style>