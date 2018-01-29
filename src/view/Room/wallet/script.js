//region import plugins
import { Line } from 'vue';
import Char from 'chart.js'
//endregion

//region import icons
import rubIcon from '../../../assets/icons/rub-icon.svg'
//end region

export default {
    metaInfo: {
        title: 'Ваш платежный аккаунт'
    },
    extends: Line,
    data() {
        return {

        }
    },
    computed: {

    },
    props: ['data', 'options'],
    methods: {
        paintChar(){
            let ctx = document.getElementById('char'),
                myChar = new Char(ctx, {
                    type: 'line',
                    data: {
                        labels: ['2018-01', "", "", "", "", "", "", "", "", "", "2018-02"],
                        datasets: [{
                            display: true,
                            data: [0, 2, 5, 3, 4, 6, 5, 7, 8, 10, 20],
                            backgroundColor: [
                                'transparent'
                            ],
                            borderColor: [
                                '#235e8b',
                            ],
                            borderWidth: 2,
                            radius: 0,
                            // stepped: true,
                        }]
                    },
                    options: {
                        scales: {
                            yAxes: [{
                                ticks: {
                                    display: false
                                },
                            }],
                            xAxes: [{
                                ticks: {
                                    fontColor: '#235e8b',
                                    fontFamily: 'Roboto',
                                    fontSize: 14
                                }
                            }]
                        },
                        legend: {
                            display: false,
                            labels: {
                                fontColor: '#235e8b'
                            }
                        }
                    }
                })
        }
    },
    components: { rubIcon },
    mounted () {
        // this.renderChart(this.data, this.options)
        this.paintChar();
      }
}