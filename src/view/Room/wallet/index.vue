<template lang='pug'>
    main.wallet
        .wallet__header
            h1.room__heading ваш платежный аккаунт

            .wallet__group
                span.wallet__lbl Ваш кошелек Lifekoin:

                span.wallet__value dd4231231fd21312312gswse221

                a.wallet__copy.link(href="javascript:;") Копировать

            .wallet__group
                span.wallet__q.mark
                    img(src="../../../assets/icons/lf.png")
                    | 15.5

                span.wallet__q
                    rubIcon(height="15")
                    | 3 452.33

        .wallet__top

            .wallet__balans
                .wallet__balans-header Ваш баланс

                .wallet__balans-body
                    rub-icon.wallet__balans-icon(height="35")
                    | 3,453.33
                .wallet__balans-footer 
                    span Мой кошелек lifekoin

                    span 0.31231232 LFC

            .wallet__char
                .wallet__char-currency LFC = 8.234.51 P
                canvas#char

        .wallet__history
            h2.wallet__title история транзакций:

            ul.wallet__history-list.list
                li.wallet__history-item(v-for="item in 5")
                    span 
                        img(src="../../../assets/icons/wallet-history-img.svg")

                        | Перевод LFC

                    span Nov 22, 2017

                    span +0.12343546547 LFC

        .wallet__news
            h2.wallet__title последние новости

            ul.wallet__news-list.list
                li.wallet__news-item(v-for="item in 2")
                    span.wallet__news-title 
                        img(src="../../../assets/icons/phone-img.svg")
                        | Готовиться мобильное приложение

                    | Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,


</template>

<script src='./script.js'></script>

<style lang='scss' src='./style.scss'></style>