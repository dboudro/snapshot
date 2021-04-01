
// require('tailwindcss/dist/tailwind.min.css')
// require('tailwindcss/dist/components.min.css')
// require('tailwindcss/dist/utilities.min.css')

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueResource from 'vue-resource';

Vue.use(VueResource);

Vue.config.productionTip = false;

new Vue({
  router,
  render: function(h) {
    return h(App);
  }
}).$mount("#app");
