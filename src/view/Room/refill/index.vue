<template lang='pug'>
    main.refill
        h1.room__heading пополнение баланса через ввнутреннюю биржу

        .refill__menu
            ul.refill__menu-list.list
                li.refill__menu-item.refill__menu-item_active Пополнить

                li.refill__menu-item История

            .refill__menu-export Export Private Key

        .refill__products
            h2.refill__heading На етой страничке вы можете купить подходящее количество монет:

            span.refill__desc Перейдя по ссылке, что вы получите после оплаты, Lifekoin зачисляться вам на счёт

            ul.refill__products-list.list
                li.refill__products-item(v-for="item in Refill")
                    header.refill__products-header Цена {{item.price}} Р

                    .refill__products-body
                        span.refill__products-count {{item.count}}
                        | кол-во едениц LFC

                    footer.refill__products-footer 
                        | Для пополнения нажмите:
                        a.refill__products-link.link(href="javascript:;") Пополнить

        .refill__support Если у вас возникнут проблемы с пополнением, пишите нам в поддержку - <a href="mailto:lifekoinsupport@gmail.com" class="link mark">lifekoinsupport@gmail.com</a>

</template>

<script src='./script.js'></script>

<style lang='scss' src='./style.scss'></style>