<template>

  <div class="corpo">
    <h1 class="centralizado">{{ titulo }}</h1>
    <!-- Não podemos usar interpolação nos atributos das tag's HTML.  
      Podemos usar também seu atalho, substituindo v-bind: por apenas dois pontos-->
    <ul class="lista-fotos">
      <!-- Neste caso o v-for fazer o trabalho do forEach ou for in range, ele pega no data
      a propriedade e faz a interacao no caso aqui foto pode ser substitudo por qualquer palavar
      ja o fotos é o nome da variavel no data, pode usar o in ou of como agente iterante-->
      
      <li  class="lista-fotos-item" v-for="foto in fotos">
        
        <meu-painel :titulo="foto.titulo">
          <img class="imagem-responsiva" :src="foto.url" :alt="foto.titulo">
        </meu-painel>

      </li>
    </ul>

  </div>
</template>

<script>
import Painel from './components/shared/painel/Painel.vue';
//Importar nosso Painel ainda não é suficiente. Precisamos indicar em App.vue como iremos
 //referenciar o componente em seu template. Podemos escolher qualquer nome, no caso, vamos 
 //escolher meu-painel. É através da propriedade components que associamos o nome meu-painel 
 //ao componente

// através da função data dos nossos componentes que disponibilizamos dados para seus templates.
//Todas as propriedades do objeto retornado pela função data são acessíveis no template através
// de interpolação, ou seja, com o uso de {{ }}.
export default {

  components: {
    // aqui eu posso dar qualquer nome
    'meu-painel': Painel
  },

  data() {

    return{
      titulo:"Alurapic",
      fotos: []
    }
  },
  // todo componente do Vue possui ganchos em seu clico de vida (Lifecycle Hooks) que permite 
  // executar um código em determinada fase do seu ciclo, neste caso é o created
  //Em nosso projeto, foi necessário interagir com o hook created para executar uma requisição 
  //para nossa API assim que o componente fosse criado, evitando assim que o usuário tivesse que 
  //clicar em algum botão para buscar a lista de fotos da API.
  created() {
    //consumir uma API é através do $http
    // nesse caso o this assume a variavel recebida do evento, entao, como o $http, usando o 
    //metodo get vamos até o endereco da API, ENTAO/then(), pegamos a resposta res, convertemos
    // para arquivo json(), ENTAO/then(), criamos uma funcao chamada fotos usamos o this 
    //para assumir a variavel do evento que no caso é a resposta da api, e jogamos as fotos para
    // dentro de uma variavel escolhemos o nome fotos, na mesma linha colocamos a reposta caso
    // ocorra algum erro err, gerando uma mensagem no console.log do erro
    this.$http.get('http://localhost:3000/v1/fotos')
      .then(res => res.json())
      .then(fotos => this.fotos = fotos, err => console.log(err));
  },
}
</script>

<style>
  .corpo {
    font-family: Helvetica, sans-serif;
    width: 96%;
    margin: 0 auto;
  }
  .centralizado {
    text-align: center;

  }
  .lista-fotos {
    list-style: none;
  }
  .lista-fotos-item {
    display: inline-block;
  }
   .imagem-responsiva {
    width: 100%;
  }
</style>
