import Vue from 'vue'
// Importamos do módulo vue o global view object Vue
import App from './App.vue'


//por intermédio de uma view instance criada a partir do global view object que renderizamos 
//um componente em index.html
new Vue({
  // aqui fica o nome do el: (elemento) que vai receber a renderizacao no caso no index tem
  // uma tag com id=app que ira receber 
  el: '#app',
  // aqui estamos passando o modulo que vai receber a renderizacao.
  render: h => h(App)
})
