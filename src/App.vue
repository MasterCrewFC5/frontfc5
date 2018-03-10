<template>
    <div id="app">
        <!--<img src="./assets/logo.png">-->
        <router-view></router-view>
    </div>
</template>

<script>
    import Navmenu from './components/Navmenu'
    import Vuex from 'vuex'
    export default {
        name: 'app',
        components: { Navmenu }
    }
</script>

<style>
    #app {
        @import url('https://fonts.googleapis.com/css?family=Roboto');
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
        height: 100% ;
    }
</style>
