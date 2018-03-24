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

<style lang="scss">
    $red: #EB5757;
    $green: #27AE60;
    $blue: #2D9CDB;
    $yellow: #F2C94C;
    $white: #F0F0F0;

    #app {
        @import url('https://fonts.googleapis.com/css?family=Roboto');
        @import url('https://fonts.googleapis.com/css?family=Roboto:100');
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #595555;
        margin-top: 8%;
        padding-top: 8%;
        height: 100% ;
    }

    .pub{
        width:100%;
    }

    .thin{
        font-weight: 100;
    }
    .bold{
        font-weight: 700;
    }
    .red{
        color: $red;
    }
    .green{
        color: $green;
    }
    .blue{
        color: $blue;
    }
    .yellow{
        color: $yellow;
    }
    .white{
        color: $white;
    }

    .flexrow{
        display: flex;
        flex-direction: row;
    }
    .flexcol{
        display: flex;
        flex-direction: column;
    }
    .textleft{
        text-align: left;
    }
    .textright{
        text-align: right;
    }
    .flexgrow1{
        flex-grow: 1;
    }
    .flexgrow2{
        flex-grow: 2;
    }
    .box{
        padding:2px;
    }


    /* width */
    ::-webkit-scrollbar {
        width: 10px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background: #F0F0F0;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #828282;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #555;
    }
</style>
