const profile = {
    state: {
        profileData: [],
        profileInfo: {
            id: null,
            password: null,
            dateAdd: null,
            email: null,
            phone: null,
            idCustomer: null,
            name: '',
            country: '',
            city: '',
            address: ''
        }
    },
    getters: {
        ProfileData(state){
            return state.profileData;
        },
        ProfileInfo(state){
            return state.profileInfo;
        }
    },
    mutations: {
        updateProfileData(state, payload){ state.profileData = payload; },
        updateProfileInfo({ profileInfo }, payload) { 
            profileInfo.id = payload.id
            profileInfo.email = payload.email
            profileInfo.password = payload.password
            profileInfo.dateAdd = payload.date_add
            profileInfo.idCustomer = payload.id_customer
            profileInfo.phone = payload.phone
            profileInfo.name = payload.name ? payload.name : '',
            profileInfo.country = payload.country ? payload.country : ''
            profileInfo.city = payload.city ? payload.city : ''
            profileInfo.address = payload.address ? payload.address : ''
        }
    },
    actions: {
        fetchProfileInfo({ rootGetters, commit }){
            const { $http } = rootGetters;

            $http.get('index.php?p1=/get_user_info/')
                .then(response => {
                    commit('updateProfileInfo', response.body.result)
                }, error => {
                    console.log(error);
                })
        },
        setProfileInfo({ rootGetters }, payload){
            const 
                { $http } = rootGetters,
                { ProfileData } = rootGetters;

            let data = {};

            if(payload == 'personal'){
                data.func = 'setPersonalInfo';
                data.name = ProfileData.name;
                data.country =  ProfileData.country;
                data.city = ProfileData.city;
                data.address = ProfileData.address;
            } else {
                data.func = 'setPassword';
                data.password =  ProfileData.password;
            }

            $http.post('index.php?p1=/set_user_info/', data, { emulateJSON: true } )
        }
    }
}

export default profile;