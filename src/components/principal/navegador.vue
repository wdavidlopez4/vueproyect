<template>
<div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand">Backlop Felipe</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <router-link to="/" tag="li" active-class="nav-item">
                <a class="nav-link active" aria-current="page">home</a>
            </router-link>
            <router-link to="/registroSprin" tag="li" active-class="nav-item">
                <a class="nav-link">Registrar Sprin</a>
            </router-link>
            <router-link to="/registroEpic" tag="li" active-class="nav-item">
              <a class="nav-link">Epic</a>
            </router-link>
            <router-link to="/consultaSpring" tag="li" active-class="nav-item">
              <a class="nav-link">Consultar Sprin</a>
            </router-link>
          </ul>
        </div>
      </div>
    </nav>
    
    <router-view></router-view>
  </div>
</template>

<script>
export default {
    name: 'navegador'
}
</script>

<style>

</style>