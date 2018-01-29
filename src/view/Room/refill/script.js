import { mapGetters, mapActions } from 'vuex'

export default {
    metaInfo: {
        title: 'Пополнить кошелек'
    },
    data() {
        return {
            refill: []
        }
    },
    computed: {
        ...mapGetters(['Refill'])
    },
    props: {
        
    },
    methods: {
        ...mapActions(['fetchRefill'])
    },
    components: {
    },
    created(){
        this.fetchRefill()
    }
}