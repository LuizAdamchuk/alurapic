<template>
  <div class="corpo">
    <meu-menu :rotas="routes"/>
    <!-- Serve para indicar para o template da página principal da aplicação o local no qual os demais
     componentes carregados através de rotas devem ser renderizados. -->
    <transition name="pagina">
      <router-view></router-view>
    </transition>
    
  </div>
</template>

<script>
// para fazer o v-vor no template precisamos importar o uso da routes aqui.
import { routes } from './routes';
import Menu from './components/shared/menu/Menu.vue';

export default {
  components: {
    'meu-menu': Menu,
  },

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
  .pagina-enter, .pagina-leave-active {
    opacity: 0;
  }
  .pagina-enter-active, .pagina-leave-active {
    transition: opacity 0.4s;
  }
</style>
