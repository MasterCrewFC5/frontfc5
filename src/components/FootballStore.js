/**
 * Created by negor on 14/11/17.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const state = { // data
    events:[
        {
            id:34567878,
            description: 'Welcome'
        }
    ]

}

const mutations = { // on ne modifie le state qu'ici
    CREATE_EVENT: ( state,description )=>{
        state.events.push({
            id: Math.floor(Math.random()*1000000000),
            description: description
        })
    },
    SET_USER:()=>{

    }
}

const getters = { // permet de recup les data
    events: state => state.events
}

const actions = { // on appel les mutations. si besoin on peut faire les appels ajax ici
    createEvent(store,description){
        store.commit('CREATE_EVENT', description)
    },
    getConnectedUser(){
        async function getUser() {
            try {
                const response = await axios.get('/user');
                console.log(response);
                store.commit('SET_USER', description)
            } catch (error) {
                console.error(error);
            }
        }
    }
}


let store = new Vuex.Store({
    state: state,
    mutations: mutations,
    getters: getters,
    actions: actions,
    strict: true
})

global.store = store
export default store
