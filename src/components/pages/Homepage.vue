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
                    <img src="./../../assets/homepage/manage.svg" alt="manger your team" onclick="location.href='/manage'">
                </div>
            </div>
            <div class="store">
                <div class="texte">
                    <label>Store</label>
                </div>
                <div class="icon">
                    <img src="./../../assets/homepage/store.svg" alt="manger your team" onclick="location.href='/store'">
                </div>
            </div>
            <div class="searchplayer">
                <div class="texte">
                    <label>Search player</label>
                </div>
                <div class="icon">
                    <img src="./../../assets/homepage/searchplayer.svg" alt="manger your team" onclick="location.href='/search'">
                </div>
            </div>
            <div class="findgame">
                <div class="texte">
                    <label>Find game</label>
                </div>
                <div class="icon">
                    <img src="./../../assets/homepage/findgame.svg" alt="manger your team" onclick="location.href='/findgame'">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import store from './../FootballStore'
    import fc5topbar from './../fc5Topbar.vue'
    import Vuex from 'vuex'

    export default {
        store: store,
        name: 'app',
        components: {fc5topbar},
        data(){
            return {
                user: {}
            }
        }
    }
</script>

<style lang="scss">
    html, body{
        height: 100%;
    }
    body{
        background: url("../../assets/HomeBackground.png")  no-repeat center center fixed;
        background-size: cover;
    }
    .home{
        height: 100%;

        .pub{
            position: absolute;
            top: 8%;
            left: 0%;
            display: block;
            height: 8%;
            width: 100%;
            background: grey;
        }
        .content{
            margin-top: -15%;
            height:100%;

           /* display: flex;
            align-items: center;
            justify-content: center;*/

            /*border: 1px solid black;*/
            .texte{
                color: white;
                font-size: 16px;
                font-weight: bold;
            }
            .manage{
                /*<!--transform: translate(0%,-50%);-->*/
                .icon{

                }
            }
            .shop{
                /*<!--transform: translate(-50%,0%);-->*/
                .icon{

                }
            }
            .searchplayer{
                /*transform: translate(50%,0%);*/
                .icon{

                }
            }
            .findgame{
                /*transform: translate(0%,50%);*/
                .icon{

                }
            }
        }
    }


</style>
