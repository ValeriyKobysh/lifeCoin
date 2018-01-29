//region imports icons
import walletIcon from '../../assets/icons/wallet-icon.svg'
import refillIcon from '../../assets/icons/bitcoin-icon.svg'
import sendIcon from '../../assets/icons/send-icon.svg'
import historyIcon from '../../assets/icons/history-icon.svg'
import settingIcon from '../../assets/icons/settings-icon.svg'
import faqIcon from '../../assets/icons/faq-icon.svg'
//endregion

export default {
    data() {
        return {
            navs: [
                {
                    heading: '',
                    children: [
                        { icon: 'wallet-icon', title: 'Мой кошелек', routeName: 'wallet'}
                    ]
                },
                {
                    heading: 'Transaction',
                    children: [
                        { icon: 'refill-icon', title: 'пополнить кошелек', routeName: 'refill'},
                        { icon: 'send-icon', title: 'Отправить средства', routeName: 'send'}
                    ]
                },
                {
                    heading: ' ',
                    children: [
                        { icon: 'history-icon', title: 'история', routeName: 'history'},
                        { icon: 'setting-icon', title: 'Настройки', routeName: 'setting'},
                        { icon: 'faq-icon', title: 'Вопрос/ответ', routeName: 'faq'}
                    ]
                }
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
        settingIcon, historyIcon, faqIcon, walletIcon, refillIcon, sendIcon
    },
}