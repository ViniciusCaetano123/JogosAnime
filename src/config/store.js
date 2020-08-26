import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        dadosExcel:{
            id:null
        },
        id:null,
        nome:null,
        email:null,
        token:null,
     idCliente:null
    }
})

export default  store