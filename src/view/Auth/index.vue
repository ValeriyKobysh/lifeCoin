<template lang='pug'>
    .auth-page.content

        .auth-page__content
            transition(tag="div" name="fade"  mode="out-in" appear)
                router-view

</template>

<script src='./script.js'></script>

<style lang='scss' src='./style.scss' scoped></style>