<template lang='pug'>
    header.header
        .header__logo LIFEKOIN

        nav.header__nav
            ul.header__nav-list.list
                li.header__nav-item(v-for="nav, index in navs" :key="index")
                    router-link.header__nav-link.link(:to="{ name: nav.home }") {{nav.title}}

        .header__search
            label.header__search-lbl
                search-icon(height="15")

            input.header__search-field(type="text" placeholder="НАЙТИ БЛОК КРИПТОВАЛЮТЫ")

        .header__btns
            a.header__btn.link(href="javscript:;") ВОЙТИ В КОШЕЛЕК
            a.header__btn.link(href="javscript:;") СОЗДАТЬ НОВЫЙ КОШЕЛЕК

</template>

<script src='./script.js'></script>

<style lang='scss' src='../style.scss'></style>