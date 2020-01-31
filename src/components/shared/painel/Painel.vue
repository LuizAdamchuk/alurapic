
<template>
    <div class="painel">
        <h2 class="painel-titulo">{{ titulo }}</h2>
        <!-- precisamos indicar no template de Painel a área que queremos considerar como um 
        slot, ou seja, aquela área que recebera tudo aquilo que tiver dentro da tag <meu-painel>
            -->
        <slot class="painel-conteudo">
        </slot>
    </div>
</template>

<script>
//  precisamos adicionar a propriedade titulo na lista de propriedades recebíveis do componente
// propriedade props. Nela podemos passar uma lista de propriedades que podem ser recebidas 
//pelo componente.
export default {
    props: ['titulo'],
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
</style>
