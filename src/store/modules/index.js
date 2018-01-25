const index = {
    state: {
        statistic: [],
        reviews: []
    },
    getters: {
        Statistic(state){ return state.statistic; },
        Reviews(state){ return state.reviews; }
    },
    mutations: {
        updateStatistic(state, payload){ state.statistic = payload; },
        updateReviews(state, payload){ state.reviews = payload; },
    },
    actions: {
        fetchStatistic({ rootGetters, commit, state }){
            const { $http } = rootGetters;

            if(state.statistic.length == 0){
                $http.get('/index.php?p1=/get_statistic/')
                    .then(response => {
                        commit('updateStatistic', response.body.result)
                    }, error => {
                        console.log(error);
                    })
            }
        },
        fetchStatistic({ rootGetters, commit, state }){
            const { $http } = rootGetters;

            if(state.reviews.length == 0){
                $http.get('/index.php?p1=/get_reviews/')
                    .then(response => {
                        commit('updateReviews', response.body.result)
                    }, error => {
                        console.log(error);
                    })
            }
        }
    }
}

export default index;