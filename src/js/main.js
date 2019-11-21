import Vue from 'vue';

//AXIOS
import axios from 'axios';
import VueAxios from 'vue-axios';


//VUETIFY
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css'

import '../css/styles.less';

import store from './store';


Vue.use(Vuetify);
Vue.use(VueAxios, axios)



//VUE ENTRY POINT
import App from '../App.vue';
var vm = new Vue({
	el: '#app',
	store,
	render: h => h(App)
});
