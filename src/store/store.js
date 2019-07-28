import Vue from 'vue'
import Vuex from 'vuex'
import { getUser,addUser } from "@/api/user";
import { getParkingLots } from "@/api/parkingLot";
import { getParkingOrders } from "@/api/parkingOrder";
import { getStaffCharacter } from "@/api/staffCharacter"
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        staffs:[],
        parkingLots:[],
        parkingOrders:[],
        characters:[],
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
        },
        setCharacters(state,characters){
          state.characters=characters
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
        },
        addParkingStaffs({dispatch},form){
          addUser(form).then((response) => {
            this.dispatch('fetchParkingStaffs')
          })
        },
        getStaffCharacter({commit}){
          getStaffCharacter().then((response)=>{
            commit('setCharacters',response)
          })
        }
    }
})
export default store;