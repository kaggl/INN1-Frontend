import Vue from 'vue';

//AXIOS
import axios from 'axios';
import VueAxios from 'vue-axios';


//VUETIFY
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css'

import '../css/styles.less';

import store from './store';

import JsonExcel from 'vue-json-excel'


Vue.use(Vuetify);
Vue.use(VueAxios, axios)
Vue.component('downloadExcel', JsonExcel)



//VUE ENTRY POINT
import App from '../App.vue';
var vm = new Vue({
	el: '#app',
	store,
	render: h => h(App)
});
