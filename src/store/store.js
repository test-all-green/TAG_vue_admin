import Vue from 'vue'
import Vuex from 'vuex'
import { getUser } from "@/api/user";
import { getParkingLots } from "@/api/parkingLot";
import { getParkingOrders } from "@/api/parkingOrder";
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        staffs:[],
        parkingLots:[],
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
        fetchParkingLots({commit}){
          getParkingLots().then((response)=>{
            commit('setParkingLots', response)
          })
        },
        fetchParkingOrders({commit}){
          getParkingOrders().then((response)=>{
            commit('setParkingOrders',response)
          })
        }
    }
})
export default store;