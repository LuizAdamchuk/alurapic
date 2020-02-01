<template>
  <div class="corpo">
    <nav>
      <ul>       
          <li v-for="route in routes">
            <!-- Tem a mesma finalidade da tag a, permitindo que o usuário clique no elemento da 
            diretiva e vá para outra rota. -->
            <router-link :to="route.path ? route.path : '/'">{{ route.titulo }}</router-link></li>

      </ul>
    </nav>
    <!-- Serve para indicar para o template da página principal da aplicação o local no qual os demais
     componentes carregados através de rotas devem ser renderizados. -->
    <router-view></router-view>
  </div>
</template>

<script>

import { routes } from './routes'

export default {
  data() {
    return {
      routes
    }
  }
}

</script>

<style>
  .corpo {
    font-family: Helvetica, sans-serif;
    width: 96%;
    margin: 0 auto;
  }
</style>
