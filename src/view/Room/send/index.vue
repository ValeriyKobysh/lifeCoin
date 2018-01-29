<template lang='pug'>
    main.send
        h1.room__heading Перевод личных средств LIFEKOIN

        .send__form
            .send__group
                label.send__lbl Валюта:

                span.send__value
                    img(src="../../../assets/icons/lf.png")
                    | Lifekoin

            .send__group
                label.send__lbl Кому:

                input.send__field(type="text" placeholder="Вставьте, пожалуйста, кошелек получателя")

            .send__group
                label.send__lbl Количество:

                money.send__field(v-model="total" v-bind="money")

            .send__group
                label.send__lbl Примечание:

                textarea.send__area(v-model="total" v-bind="money" placeholder="Не обезательно")

            a.send__submit.link(href="javascript:;") Отправить

</template>

<script src='./script.js'></script>

<style lang='scss' src='./style.scss'></style>