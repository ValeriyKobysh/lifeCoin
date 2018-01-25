<template lang="pug">
    #app
        transition
            router-view

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
