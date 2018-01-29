<template lang='pug'>
    aside.sidebar

        .sidebar__group(v-for="nav, index in navs" :key="index")
            .sidebar__heading(v-if="nav.heading") {{nav.heading}}

            ul.sidebar__list.list
                li.sidebar__item(v-for="item, i in nav.children" :key="i")
                    router-link.sidebar__link.link(:to="{ name: item.routeName }" active-class="active" exact)
                        component(:is="item.icon" height="30") 
                        | {{item.title}}

</template>

<script src='./script.js'></script>

<style lang='scss' src='./style.scss'></style>