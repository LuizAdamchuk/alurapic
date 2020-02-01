import Vue from 'vue'
// Importamos do módulo vue o global view object Vue
import App from './App.vue'
import VueResource from 'vue-resource';
// não pasta importarmos o módulo VueResource, veja, apenas importamos o módulo dentro de 
//App.vue, mas precisamos ainda registrá-lo. Fazemos isso através do global view object que
// já temos importado

//O módulo VueResource disponibiliza artefatos especializados na realização de requisições 
//assíncronas ao mesmo tempo em que se integra com o ecossistema do Vue.

// registrando o módulo/plugin no global view object
Vue.use(VueResource);

//por intermédio de uma view instance criada a partir do global view object que renderizamos 
//um componente em index.html
new Vue({
  // aqui fica o nome do el: (elemento) que vai receber a renderizacao no caso no index tem
  // uma tag com id=app que ira receber 
  el: '#app',
  // aqui estamos passando o modulo que vai receber a renderizacao.
  render: h => h(App)
})
