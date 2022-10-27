import { defineStore } from "pinia";
import axios from "axios";

export const usePiniaStore = defineStore("pinia", {
  state: () => {
    return {
      url: "https://aps.mmeducare.com/api/",
      data: {}
    };
  },
  getters: {
    getUrl: (state) => (uri) => {
      return state.url + uri;
    },
    getData(state) {
      return state.data;
    }
  },
  actions: {
    post(uri,data) {
      axios.post(this.url+uri,data)
      .then((res)=>{
        this.data = res
      })
      .catch((e)=>{
        this.data = e
      })
    }
  },
});
