import { Promise } from "es6-promise";

const auth = {
    state: {
        session: false,
        errorFromServer: {
            email: null,
            phone: null
        }
    },
    getters: {
        getSession(state) { return state.session },
        getError(state) { return state.errorFromServer }
    },
    mutations: {
        updateStatus(state, payload){
            state.session = payload === 'true' ? true : false;
        },
        updateError(state, payload){
            state.errorFromServer.email = payload.email_exists === 'true' ? true : false
            state.errorFromServer.phone = payload.phone_exists === 'true' ? true : false
        }
    },
    actions: {
        fetchStatusSession({ rootGetters, commit }){
            const { $http } = rootGetters;

            return new Promise(resolve => {
                $http.get('/index.php?p1=/check_session/')
                .then(response => {
                    commit('updateStatus', response.body.result);
                    resolve();
                }, error => {
                    console.log(error);
                })
            })
        },

        closeSession({ rootGetters, commit }){
            const { $http } = rootGetters;

            return new Promise(resolve => {
                $http.post('/index.php?p1=/close_session/')
                    .then(response => {
                        commit('updateStatus', 'false')
                        resolve()
                    }), error => { console.log(error); }
                
            })

        },

        newUser({ rootGetters, commit }, data)
        {
            const { $http } = rootGetters;

            return new Promise(resolve => {
                $http.post('/index.php?p1=/registration/', data, { emulateJSON: true})
                .then(response => 
                {
                    commit('updateError', response.body.result);
                    resolve();
                }), error => 
                {
                    console.log(error);
                }
            })
        },

        loginUser({ rootGetters }, data)
        {
            const { $http } = rootGetters;

            return new Promise(resolve => {
                $http.post('/index.php?p1=/login/', data, { emulateJSON: true})
                    .then(response => 
                    {
                        resolve(response.body.result)
                    }), error => 
                    {
                        console.log(error);
                    }
            })
        },

        RecoveryPassword({ rootGetters }, data)
        {
            const { $http } = rootGetters;

            $http.post('/index.php?p1=/recovery/', data, { emulateJSON: true})
                .then(response => 
                {
                    console.log(response);
                }), error => 
                {
                    console.log(error);
                }
        }
    }
}

export default auth;