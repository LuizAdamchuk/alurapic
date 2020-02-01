
<template>
    <div class="painel">
        <!-- o v-on: pode se subistituido por @ -->
        <h2 class="painel-titulo" v-on:dblclick="visivel = !visivel">{{ titulo }}</h2>
        <!-- precisamos indicar no template de Painel a área que queremos considerar como um 
        slot, ou seja, aquela área que recebera tudo aquilo que tiver dentro da tag <meu-painel>
            -->
        <!-- Usamos transition para gerar um marcador de quando queremos criar algum efeito
        nesse as fotos ficam visiveis/invisevis, entao adicionamos o marcador transition para
        gerar um evento e poder colocar o efeito, precisamos colocar um name="",entao isso
        gera um numero de classes para usar no css, por exmplo, .painel-fade-leave-active, 
        .painel-fade-enter-active, .painel-fade-enter, existem mais deve se observar na doc
        entao podemos fazer efeitos de css nesse evento em especifico. -->
        <transition name="painel-fade">
            <div class="painel-conteudo" v-show="visivel">
                <slot ></slot>
            </div>
        </transition>
    </div>
</template>

<script>
//  precisamos adicionar a propriedade titulo na lista de propriedades recebíveis do componente
// propriedade props. Nela podemos passar uma lista de propriedades que podem ser recebidas 
//pelo componente.
export default {
    props: ['titulo'],

    data() {
        return {
            visivel: true,
        }
    }
}
</script>

<style scoped>
    /* Se quisermos que os estilos definidos em styles do nosso componente afete apenas o 
    componente, basta adicionarmos a propriedade scoped na tag style. */
   .painel {
    padding: 0 auto;
    border: solid 2px grey;
    display: inline-block;
    margin: 5px;
    box-shadow: 5px 5px 10px grey;
    width: 200px;
    height: 100%;
    vertical-align: top;
    text-align: center;
  }
  .painel .painel-titulo {
    text-align: center;
    border: solid 2px;
    background: lightblue;
    margin: 0 0 15px 0;
    padding: 10px;
    text-transform: uppercase;
  }
  * {
      box-shadow: 5px 5px 10px gray;
  }
   .painel-fade-enter, .painel-fade-leave-active {
       opacity: 0;
   }
    .painel-fade-enter-active, .painel-fade-leave-active {
        transition: opacity 1s;
    }
</style>
