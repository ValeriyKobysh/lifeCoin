<template lang='pug'>
    section.transactions
        .transactions__container.container
            h2.transactions__heading ПОСЛЕДНИЕ ПЕРЕВОДЫ

            table.transactions__table
                thead.transactions__header
                    tr
                        td Высота
                        td Возраст
                        td Транзакции
                        td Всего отправлено
                        td Передано по
                        td Размер (Кб)
                        td Вес

                transition-group.transactions__body(tag="tbody" name="flip" appear)
                    tr(v-for="transaction, index in Transactions" :key="transaction[0] + index")
                        td(v-for="data, i in transaction" :key="i" :class="{ mark: i == 0 || i == 4 }") {{data}}
                        //- td.mark(:key="index") {{transaction[0]}}
                        //- td(:key="index") {{transaction[1]}}
                        //- td(:key="index") {{transaction[2]}}
                        //- td(:key="index") {{transaction[3]}} LFC
                        //- td.mark(:key="index") {{transaction[4]}}
                        //- td(:key="index") {{transaction[5]}}
                        //- td(:key="index") {{transaction[6]}}

</template>

<script src='./script.js'></script>

<style lang='scss' src='./style.scss'></style>