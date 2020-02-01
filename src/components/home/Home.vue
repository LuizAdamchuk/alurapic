<template>

  <div>
    <h1 class="centralizado">{{ titulo }}</h1>
    <!-- Não podemos usar interpolação nos atributos das tag's HTML.  
      Podemos usar também seu atalho, substituindo v-bind: por apenas dois pontos-->
    <!-- Aqui foi colocado uma barra de input que sera de procura, colocamos o nome da classe
    de filtro e colocamos la no nossa Data no scripts, la criamos com str vazia para receber algo
    entao devemos disparar um evento no caso do vue para disparar o evento basta usar a tag
    v-on:(evento), no vaso o input entao o que deve ser feito, no caso o filtro la do Data,
    receber o $event(evento), e as especificacoes target é pra especficiar que é o evento ocorrido
    nesse input e o value é pra pegar o valor que esta recebendo. -->
    <input type="search" class="filtro" v-on:input="filtro = $event.target.value" placeholder="Filtre por parte do título">
    {{ filtro }}
    <ul class="lista-fotos">
      <!-- Neste caso o v-for fazer o trabalho do forEach ou for in range, ele pega no data
      a propriedade e faz a interacao no caso aqui foto pode ser substitudo por qualquer palavar
      ja o fotos é o nome da variavel no data, pode usar o in ou of como agente iterante-->
      
      <li  class="lista-fotos-item" v-for="foto in fotosComFiltro">
        
        <meu-painel :titulo="foto.titulo">
          <imagem-responsiva :url="foto.url" :titulo="foto.titulo"/>
        </meu-painel>

      </li>
    </ul>

  </div>
</template>

<script>
import ImagemResponsiva from '../shared/imagem-responsiva/ImagemResponsiva.vue';
import Painel from '../shared/painel/Painel.vue';
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
    'meu-painel': Painel,
    'imagem-responsiva': ImagemResponsiva,
  },

  data() {

    return{
      titulo:"Alurapic",
      fotos: [],
      filtro: '',
    }
  },
  computed: {

    fotosComFiltro() {
      // significa que se tem algo no input vira true e executa a logica, se nao tem nada no input
      // fica false e retorna todas as fotos
      if (this.filtro) {
        // aqui para filtrar se usa uma expressao regular chamada RegExp
        let exp = new RegExp(this.filtro.trim(), 'i');
        // primeipramente pega o objeto e entao qual caracteristica no caso fotos, escolhe pra 
        // filtrar, de dentro d objto fotos pega os itens no caso foto e pede pra expresao no caso exp
        // testar(test) a caracteristica no caso o titulo
        return this.fotos.filter(foto => exp.test(foto.titulo));
      }else {
        return this.fotos;
      }
    }
  },



  // todo componente do Vue possui ganchos em seu clico de vida (Lifecycle Hooks) que permite 
  // executar um código em determinada fase do seu ciclo, neste caso é o created
  // Em nosso projeto, foi necessário interagir com o hook created para executar uma requisição 
  // para nossa API assim que o componente fosse criado, evitando assim que o usuário tivesse que 
  // clicar em algum botão para buscar a lista de fotos da API.
  created() {
    // consumir uma API é através do $http
    // nesse caso o this assume a variavel recebida do evento, entao, como o $http, usando o 
    // metodo get vamos até o endereco da API, ENTAO/then(), pegamos a resposta res, convertemos
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
  .centralizado {
    text-align: center;

  }
  .lista-fotos {
    list-style: none;
  }
  .lista-fotos-item {
    display: inline-block;
  }
  .filtro {
    display: block;
    width: 100%;
  }
</style>
