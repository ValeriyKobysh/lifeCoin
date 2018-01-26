const index = {
    state: {
        transactions: []
    },
    getters: {
        Transactions(state){ return state.transactions; }
    },
    mutations: {
        updateTransactions(state, payload){
            payload.forEach(element => {
                state.transactions.push(element);
            });
        },
        removeTransaction({ transactions }, payload){
            transactions.splice(0, 1);
        }
    },
    actions: {
        fetchTransactions({ rootGetters, commit }){
            const { $http } = rootGetters;

            return new Promise(resolve => {
                $http.get('https://api.myjson.com/bins/1dp0jd')
                .then(response => {
                    commit('updateTransactions', response.body);
                    resolve();
                }, error => {
                    console.log(error);
                })
                
            })
        },
        newTransaction({ rootGetters, commit }){
            const { $http } = rootGetters;

            return new Promise(resolve => {
                $http.get('https://api.myjson.com/bins/r4gzt')
                .then(response => {
                    commit('updateTransactions', response.body);
                    resolve()
                }, error => {
                    console.log(error);
                })
            })
        }
    }
}

export default index;