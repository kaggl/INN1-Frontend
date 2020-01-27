import Vue from 'vue';

//VUETIFY
import vuetify from '../plugins/vuetify'


//VUE ENTRY POINT
import App from '../app.vue';
var vm = new Vue({
	vuetify,
	render: h => h(App)
}).$mount('#app');
