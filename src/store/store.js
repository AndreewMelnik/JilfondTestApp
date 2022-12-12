import { createStore } from 'vuex'
const store = createStore({
    state() {
        return {
            users: [],
            selectedUser: null
        }
    },
    mutations: {
        selectUser(state,value) {
            console.log('state.selectedUser',state.selectedUser)
            state.selectedUser = value
        }
    },
    actions: {
        selectUser({ commit }, props) {
            commit('selectUser', props)
           
        }
    },
    getters: {
        getUsersArray(state) {
            return state.users
        },
        getSelectedUser(state) {
            return state.selectedUser
        }
    }
})


export default store