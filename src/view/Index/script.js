import { mapState, mapActions, mapGetters, mapMutations } from 'vuex'

//#region import components
import transactions from '../../components/transactions'
//endregion

export default {
    metaInfo: {
        title: 'Главная'
    },
    data() {
        return {
            counter: 350738,
            val: '34,435,343,256.00'
        }
    },
    computed: {
        Counter(){
            return this.counter.toString().split('');
        }
    },
    components: {
        transactions
    },
    methods: {
        getRandomNumber(min, max){
            return Math.round(Math.random() * (max - min) + min) ;
        },
        increment(){
            let increment = this.getRandomNumber(1, 4)

            this.counter += increment;
        }
    },
    created(){
        setInterval(() => {
            this.increment();
        }, 1000);
    }
}