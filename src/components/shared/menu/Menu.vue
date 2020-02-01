<template>
    <nav>
      <!-- Aqui formulamos um v-for para criar o menu -->
      <ul>       
          <li v-for="rota of rotas">
            <!-- Tem a mesma finalidade da tag a, permitindo que o usuário clique no elemento da 
            diretiva e vá para outra rota. Como o retorno do parametro é vazio, o home nao acessa
            entao precisamos fazer um if ternario, na mesma linha com  ? {se for true}:
            {se for falso}, colocando pra receber a /-->
            <router-link :to="rota.path ? rota.path : '/'">{{ rota.titulo }}</router-link></li>

      </ul>
    </nav>
</template>

<script>
    export default {
        props: ['rotas']
    }
</script>

<style scoped>

</style>