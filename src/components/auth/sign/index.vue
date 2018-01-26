<template lang='pug'>
    .auth__form
        h2.auth__heading Регистрация

        .auth__group
            label.auth__lbl E-mail
            input.auth__field(type="text")

        .auth__group
            label.auth__lbl Пароль
            input.auth__field(type="password")

        .auth__group
            label.auth__lbl Повторить пароль
            input.auth__field(type="password")

        .auth__recaptcha
            .g-recaptcha(data-sitekey="6Lfoq0IUAAAAAAxkgDUxO2wkM0_YNbARbRFXPlFO")

        a.auth__btn.auth__btn_orange.link(href="javascript:;") Регистрация

        router-link.auth__btn.auth__btn_dark.link(:to="{ name: 'login' }") Войти

</template>

<script src='./script.js'></script>

<style lang='scss' src='../style.scss' scoped></style>