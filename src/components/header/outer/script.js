import { mapState, mapActions, mapGetters, mapMutations } from 'vuex'

//#region import icons
import searchIcon from '../../../assets/icons/search-icon.svg'
//endregion

export default {
    name: 'header-outer',
    data() {
        return {
            navs: [
                { home: 'login', title: 'ВВОЙТИ' },
                { home: 'sign', title: 'РЕГИСТРАЦИЯ' },
                { home: 'javsacript:;', title: 'API' },
                { home: 'javsacript:;', title: 'О КРИПТОВАЛЮТЕ' }
            ]
        }
    },
    computed: {

    },
    props: {

    },
    methods: {

    },
    components: {
        searchIcon
    }
}
