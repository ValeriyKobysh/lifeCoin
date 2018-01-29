import Vue from "vue"
import Vuex from 'vuex'
import VueResource from 'vue-resource'

Vue.use(Vuex);
Vue.use(VueResource);
//#region import modules
import index from './modules/index';
import refill from './modules/refill'
//endregion

const store = new Vuex.Store({
    state: {

    },
    getters: {
        $http: () => (VueResource),
    },
    actions: {

    },
    modules: {
        index, refill
    }
})

export default store;