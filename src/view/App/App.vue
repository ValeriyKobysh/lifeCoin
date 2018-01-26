<template lang="pug">
    #app
        router-view(name="header" :key="'header'")

        router-view(:key="'content'")

        footer-comp
</template>

<script src="./script.js"></script>

<style lang="scss">
#app{
    display: flex;
    flex-direction: column;
    height: 100vh;
}
</style>
