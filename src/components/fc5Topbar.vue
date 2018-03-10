<template>
    <div id="nav" class="nav">
        <div v-if="user" class="topbar">


            <div class="leftpart">
                <div class="userlogo">
                    <img src="../assets/topbar/userlogo.png" alt="profilimage" >
                </div>
                <div class="labels">
                    <label class="username"> {{ this.user.data[0].username }} </label>   <br>
                    <label class="teamname"> {{ this.user.data[0].teamname }}</label>
                </div>
            </div>

            <div class="fc5logo">
                <img src="../assets/topbar/fc5logo.png" alt="fc5 logo" onclick="location.href='/home'" >
            </div>

            <div class="rightpart">
                <div class="minimenu" >
                    <i class="fas fa-users" aria-hidden="true" onclick="location.href='/friends'" ></i>
                </div>
                <div class="income">
                    {{ this.user.data[0].money[0].dollars}} $ <br/>
                    {{ this.user.data[0].money[0].fc5}} F <br>
                    {{ this.user.data[0].money[0].revenus}} /m <br>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import store from './FootballStore'
    import Vuex from 'vuex'

    export default{
        store: store,
        name: 'fc5topbar',
        data(){
            return {
                message: "topbar",
                user: null
            }
        },
        methods: {
            getUser(){
                axios.get('http://localhost:3001/user')
                    .then(res => this.user = res.data)
            }
        },
        async created(){
            //this.getUser()
            this.user = await axios.get('http://localhost:3001/user', {
                responseType: 'json'
            });
            //console.log(this.user.data[0].username)
        },
        computed: {}
    }

</script>

<style lang="scss" scoped>
    $textgrey: #595555;
    $almostwhite: #F0F0F0;

    .topbar {
        position: absolute;
        left: 0%;
        right: 0%;
        top: 0%;
        height: 8%;

        background: $almostwhite;
        box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.24), 0px 0px 2px rgba(0, 0, 0, 0.12);

        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-around;
        align-content: space-between;
        align-items: center;

        .leftpart {
            text-align: left;

            height: 100%;
            width: 30%;

            order: 1;

            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-content: space-around;
            align-items: center;
            .userlogo {
                height: 100%;
                width: auto;

                order: 1;
                display: flex;
                align-items: center;
                img{
                    height:60%;
                    width: auto;
                    padding: 0px 3px 0px 0px;
                }

            }
            .labels{
                max-height: 50px;

                order: 2;
                .username{
                    font-style: normal;
                    font-weight: bold;
                    font-size: 18px;
                    color: $textgrey;

                }
                .teamname {
                    font-style: normal;
                    font-weight: normal;
                    font-size: 10px;
                    text-align: center;
                    color: $textgrey;

                }
            }


        }

        .fc5logo{
            height: 100%;
            width: 30%;

            order: 2;

            display: flex;
            align-items: center;
            img{
                height: 80%;
                width: auto;
                filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.24)) ;
            }
        }

        .rightpart {
            font-style: normal;
            font-weight: bold;
            font-size: 10px;
            text-align: right;
            color: $textgrey;

            width: 30%;

            order: 3;

            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            align-items: center;
            .minimenu{
                order: 1;
                flex-grow: 1;
                .fa-users{
                    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.24)) ;
                    font-size: 18px;
                }
            }
            .income {
                font-style: normal;
                font-weight: bold;
                font-size: 10px;
                text-align: right;
                color: $textgrey;

                width: 30%;

                flex-grow: 2;
                order: 2;
            }
        }
    }


</style>
