import { Money } from 'v-money'

export default {
    metaInfo: {
        title: 'Перевод личных средств'
    },
    data() {
        return {
            total: 0,
            money: {
                decimal: '.',
                thousands: ' ',
                suffix: ' LFC',
                precision: 2,
                masked: false
              }
        }
    },
    computed: {

    },
    props: {
        
    },
    methods: {

    },
    components: { Money },
    created(){

    }
}