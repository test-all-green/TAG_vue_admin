import Vue from 'vue'
import Vuex from 'vuex'
import moment from "moment";
import { getUser, addUser } from "@/api/user";
import { getParkingLots, postParkingLot } from "@/api/parkingLot";
import { getShareParkingLots } from "@/api/shareParkingLot";
import { getParkingOrders } from "@/api/parkingOrder";
import { getStaffCharacter } from "@/api/staffCharacter"
import { getRegion } from "@/api/region"
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    staffs: [],
    parkingLots: {},
    parkingOrders: {
      content:[]
    },
    shareParkingLots:[],
    characters: [],
    regions: [],
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
    setShareParkingLots(state, shareParkingLots) {
      state.shareParkingLots = shareParkingLots
    },
    setParkingOrders(state, parkingOrders) {
      state.parkingOrders = parkingOrders
    },
    setCharacters(state, characters) {
      state.characters = characters
    },
    setRegions(state, regions) {
      state.regions = regions
    }
  },
  actions: {
    async fetchParkingStaffs({ commit }, { page, pageSize }) {
      commit('setParkingStaffs', await getUser(page, pageSize))
    },
    async fetchParkingLots({ commit }, { page, pageSize ,condition}) {
      commit('setParkingLots', await getParkingLots(page, pageSize,condition))
    },
    async fetchShareParkingLots({ commit }, { page, pageSize }) {
      console.log("share");
      var aaa=await getShareParkingLots(page, pageSize)
      console.log('aaa :', aaa);
      commit('setShareParkingLots', await getShareParkingLots(page, pageSize))
    },
    async fetchParkingOrders({ commit }, { page, pageSize }) {
      var aaa=await getParkingOrders(page, pageSize)
      console.log('aaa :', aaa);
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
    },
    async getRegion({ commit }) {
      commit('setRegions', await getRegion())
    }
  },
  getters: {
    showShareParkingLots:state=>state.shareParkingLots.content.map((item)=>{
      if (item.status==0) item.status='未发布'
      if (item.status==1) item.status='已发布'
      if (item.status==2) item.status='使用中'
      if(item.beginTime==null) item.beginTime='未设置'
      else item.beginTime=moment(item.beginTime).format("YYYY/MM/DD HH:mm:ss");
      if(item.endTime==null) item.endTime='未设置'
      else item.endTime=moment(item.endTime).format("YYYY/MM/DD HH:mm:ss");
      return item;
    }),
    showParkingOrders: state => state.parkingOrders.content.map((item) => {
      item.type = item.type == 1 ? '存车' : '取车'
      if(item.status=="PW") item.status ='无人处理'
      if(item.status=="PI") item.status ='存取中'
      if(item.status=="F") item.status ='完成'
      if(item.status=="WP") item.status ='前往地点'
      if(item.status=="C") item.status ='前往地点'
      return item;
    })
  }
})
export default store;