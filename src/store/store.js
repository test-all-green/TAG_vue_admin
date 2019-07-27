import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        demo:'demo'
    },
    getters: {
        getDemo(state) {
            return state.demo;
        },
    },
    mutations: {
        changeDemo(state, val) {
            state.Demo = val;
        }
    },
    actions: {}
})
export default store;