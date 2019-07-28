import Vue from 'vue'
import Vuex from 'vuex'
import { getUser, addUser } from "@/api/user";
import { getParkingLots, postParkingLot } from "@/api/parkingLot";
import { getParkingOrders } from "@/api/parkingOrder";
import { getStaffCharacter } from "@/api/staffCharacter"
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    staffs: [],
    parkingLots: {},
    parkingOrders: {},
    characters: [],
    demo: 'demo'
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
    setParkingStaffs(state, parkingStaffs) {
      state.staffs = parkingStaffs
    },
    setParkingLots(state, parkingLots) {
      state.parkingLots = parkingLots
    },
    setParkingOrders(state, parkingOrders) {
      state.parkingOrders = parkingOrders
    },
    setCharacters(state, characters) {
      state.characters = characters
    }
  },
  actions: {
    async fetchParkingStaffs({ commit }, { page, pageSize }) {
      commit('setParkingStaffs', await getUser(page, pageSize))
    },
    async fetchParkingLots({ commit }, { page, pageSize ,condition}) {
      commit('setParkingLots', await getParkingLots(page, pageSize,condition))
    },
    async fetchParkingOrders({ commit }, { page, pageSize }) {
      var aaa=await getParkingOrders(page, pageSize)
      console.log('content', aaa.content);
      commit('setParkingOrders', await getParkingOrders(page, pageSize))
    },
    async addParkingStaffs({ dispatch }, { form, page, pageSize }) {
      await addUser(form)
      dispatch('fetchParkingStaffs', { page: page, pageSize })
    },
    async getStaffCharacter({ commit }) {
      commit('setCharacters', await getStaffCharacter())
    },
    async addParkingLot({ commit, dispatch }, { form, page, pageSize,condition }) {
      await postParkingLot(form)
      dispatch('fetchParkingLots', { page: page, pageSize: pageSize,condition: condition })
    }
  },
  getters: {
    showParkingOrders: state => state.parkingOrders.content.map((item) => {
      item.parkingOrderType = item.parkingOrderType == 1 ? '存车' : '取车'
      item.parkingOrderStatus = item.parkingOrderStatus == 1 ? '存取中' : '无人处理'
      return item;
    })
  }
})
export default store;