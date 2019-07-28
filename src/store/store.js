import Vue from 'vue'
import Vuex from 'vuex'
import { getUser,addUser } from "@/api/user";
import { getParkingLots,postParkingLot  } from "@/api/parkingLot";
import { getParkingOrders } from "@/api/parkingOrder";
import { getStaffCharacter } from "@/api/staffCharacter"
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        staffs:[],
        parkingLots:{},
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
        async fetchParkingStaffs({commit}, {page, pageSize}){
          commit('setParkingStaffs', await getUser(page,pageSize))
        },
        async fetchParkingLots({commit}, {page, pageSize}){
          commit('setParkingLots', await getParkingLots(page,pageSize))
        },
        async fetchParkingOrders({commit}){
          commit('setParkingOrders',await getParkingOrders())
        },
        async addParkingStaffs({dispatch},{form,page,pageSize}){
          await addUser(form)
          dispatch('fetchParkingStaffs',{page:page,pageSize})
        },
        async getStaffCharacter({commit}){
            commit('setCharacters',await getStaffCharacter())
        },
        async addParkingLot({commit,dispatch}, {form,page,pageSize}){
          await postParkingLot(form)
          dispatch('fetchParkingLots', {page:page,pageSize:pageSize})
        }
    }
})
export default store;