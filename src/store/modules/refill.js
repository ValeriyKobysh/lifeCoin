const refill = {
    state: {
        refill: []
    },
    getters: {
        Refill(state){
            return state.refill;
        }
    },
    mutations: {
        updateRefill({ refill }, payload){
            payload.forEach(element => {
                refill.push(element)
            });
        }
    },
    actions: {
        fetchRefill({ rootGetters, commit }){
            const { $http } = rootGetters;

            return new Promise(resolve => {
                $http.get('https://api.myjson.com/bins/w512l')
                .then(response => {
                    commit('updateRefill', response.body);
                    resolve();
                }, error => {
                    console.log(error);
                })
                
            })
        }
    }
}

export default refill;