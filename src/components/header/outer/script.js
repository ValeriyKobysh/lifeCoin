import { mapState, mapActions, mapGetters, mapMutations } from 'vuex'

//#region import icons
import searchIcon from '../../../assets/icons/search-icon.svg'
//endregion

export default {
    name: 'header-outer',
    data() {
        return {
            navs: [
                { home: 'javsacript:;', title: 'ВВОЙТИ' },
                { home: 'javsacript:;', title: 'РЕГИСТРАЦИЯ' },
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
