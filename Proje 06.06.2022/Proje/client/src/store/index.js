import { createStore } from 'vuex'
import { UIModule } from './ui/index'
export default createStore({
    state: {
        user: {
            token: null,
            username: null,
            type: null,
            balance: null,
            aday: null
        }
    },
    getters: {
        getUser: state => state.user,
        getToken: state => state.user.token,
    },
    mutations: {
        setUser(state, data) {
            state.user.username = data.username
            state.user.type = data.type
            state.user.token = data.token
            state.user.balance = data.balance
            state.user.aday = data.aday
        },
    },
    actions: {
        setUser({ commit }, data) {
            commit('setUser', data)
        }
    },
    modules: {
        UIModule,
    }
})