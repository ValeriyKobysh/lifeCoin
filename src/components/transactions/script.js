import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';

export default {
    data() {
        return {
            
        }
    },
    computed: {
        ...mapGetters(['Transactions'])
    },
    props: {
        
    },
    methods: {
        ...mapActions(['fetchTransactions', 'newTransaction']),
        ...mapMutations(['removeTransaction', 'updateTransactions'])
    },
    components: {
        
    },
    created(){
        this.fetchTransactions();

        setInterval(() => {
            this.newTransaction().then(() => {
                this.removeTransaction();
            });
        }, 7000);
    },
    // watch: {
    //     Transactions(value){
    //         if(value.length > 5){
    //             this.removeTransaction();
    //         }
    //     }
    // }
}