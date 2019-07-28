import Vue from 'vue'
import Vuex from 'vuex'
import { getUser } from "@/api/user";
import { getParkingLots,postParkingLot  } from "@/api/parkingLot";
import { getParkingOrders } from "@/api/parkingOrder";
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        staffs:[],
        parkingLots:{},
        parkingOrders:[],
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
        },
        setParkingStaffs(state,parkingStaffs){
            state.staffs=parkingStaffs
        },
        setParkingLots(state,parkingLots){
          state.parkingLots=parkingLots
        },
        setParkingOrders(state,parkingOrders){
          state.parkingOrders=parkingOrders
        }
    },
    actions: {
        fetchParkingStaffs({commit}){
          getUser().then((response) => {
            commit('setParkingStaffs', response)
          })
        },
        async fetchParkingLots({commit}, {page, pageSize}){
          commit('setParkingLots', await getParkingLots(page,pageSize))
        },
        fetchParkingOrders({commit}){
          getParkingOrders().then((response)=>{
            commit('setParkingOrders',response)
          })
        },
        async addParkingLot({commit,dispatch}, {form,page,pageSize}){
          await postParkingLot(form)
          dispatch('fetchParkingLots', {page:page,pageSize:pageSize})
        }
    }
})
export default store;