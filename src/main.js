import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

class FooterCustom extends HTMLElement {
  constructor() {
    super();
  }
  
  
  connectedCallback() {
    this.year = this.getAttribute("year") || null;
    this.author = this.getAttribute("author") || null;

    this.innerHTML = `&copy; ${this.year} ${this.author}`;
  }
}
customElements.define('footer-custom', FooterCustom);

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
