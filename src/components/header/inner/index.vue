<template lang='pug'>
    header.header
        .header__logo LIFEKOIN

        router-link.header__exit(:to="{ name: 'home' }") ВЫХОД

</template>

<script src='./script.js'></script>

<style lang='scss' src='../style.scss'></style>