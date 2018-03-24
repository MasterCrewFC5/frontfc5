<template>
    <div class="home">
        <fc5topbar></fc5topbar>
        <div class="pub"> pub </div>

        <div class="content">
            <div class="manage">
                <div class="texte">
                    <label>Manage your team</label>
                </div>
                <div class="icon">
                    <img src="./../../assets/homepage/manage.svg" alt="manage your team" onclick="location.href='/manage'">
                </div>
            </div>
            <div class="store">
                <div class="texte">
                    <label>Store</label>
                </div>
                <div class="icon">
                    <img src="./../../assets/homepage/store.svg" alt="Store" onclick="location.href='/store'">
                </div>
            </div>
            <div class="searchplayer">
                <div class="texte">
                    <label>Search player</label>
                </div>
                <div class="icon">
                    <img src="./../../assets/homepage/searchplayer.svg" alt="Search player" onclick="location.href='/search'">
                </div>
            </div>
            <div class="findgame">
                <div class="texte">
                    <label>Find game</label>
                </div>
                <div class="icon">
                    <img src="./../../assets/homepage/findgame.svg" alt="find game" onclick="location.href='/findgame'">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import store from './../FootballStore'
    import fc5topbar from './../fc5Topbar.vue'

    export default {
        store: store,
        name: 'app',
        components: {fc5topbar},
        data(){
            return {
                user: { }
            }
        }
    }
</script>

<style lang="scss">
    /*html, body{*/
        /*height: 100%;*/
    /*}*/
    body{
        background: url("../../assets/HomeBackground.png")  no-repeat center center fixed;
        background-size: cover;
    }
    .pub{
        position: absolute;
        top: 8%;
        left: 0%;
        display: block;
        height: 8%;
        width: 100%;
        background: grey;
    }

    .home{
        height: 100%;

        .content{
            margin-top: -15%;
            height:100%;

           /* display: flex;
            align-items: center;
            justify-content: center;*/

            /*border: 1px solid black;*/
            label{
                font-family: Roboto;
                font-style: normal;
                font-weight: bold;
                font-size: 16px;
                color:white;
                letter-spacing: -0.06em;
            }
            .manage{
                top: 16%;
                left: 50%;
                transform: translateX(-50%);
                position: absolute;
            }
            .store{
                top: 50%;
                left: 0;
                transform: translateY(-50%);
                position: absolute;
            }
            .searchplayer{
                position: absolute;
                right: 0;
                top: 50%;
                transform: translateY(-50%);
            }
            .findgame{
                position: absolute;
                bottom: 15%;
                left: 50%;
                transform: translateX(-50%);
            }
        }
    }


</style>
