<template>
    <div class="store">
        <fc5topbar></fc5topbar>
        <div class="content">
            <img class="pub" src="./../../assets/pub.svg" alt=" pub">

            <div class="toppart">
                <img src="./../../assets/store/storeribbon.svg" class="ribbon" alt="store ribbon" />
            </div>

            <div class="shoplist">
                <div class="card" v-for="(item, index) in items" @click="getItemModal(item.id)">
                    <div class="flexrow">
                        <div class="left">
                            <img :src="item.image" alt="item image"/>
                        </div>
                        <div class="center flexcol">
                            <div class="title">{{ item.title }}</div>
                            <div class="description">{{ item.description }}</div>
                        </div>
                        <div class="right">
                            {{ item.value }}<span v-if="item.fc5buyable"><img src="./../../assets/store/smallcoin.svg" alt="fc5$"></span> <span v-else>$</span>
                        </div>

                    </div>
                </div>
            </div>

            <fc5modalstore v-if="showModal" @close="showModal = false" :item="itemShownInModal">
            </fc5modalstore>

        </div>
    </div>

</template>

<script>
    import axios from 'axios'
    import fc5topbar from './../fc5Topbar.vue'
    import fc5modalstore from '@/components/fc5ModalStore.vue'

    export default {
        name: "store",
        components: {fc5topbar, fc5modalstore},
        data(){
            return{
                items: [],
                showModal: false,
                itemShownInModal:
                    {
                    "id": 1,
                    "title":"Premium mode",
                    "value": 2.99,
                    "fc5buyable": false,
                    "description": "Delete all commercials from the app for ever",
                    "image": "fc5logo.png"
                }
            }
        },
        methods:{
            async getItemModal(idItemClicked){
                const dataReceived = await axios.get('http://localhost:3001/storeItems?id='+ idItemClicked +'', {
                    responseType: 'json'
                });
                this.itemShownInModal = dataReceived.data[0]
                this.showModal = true;
            }
        },
        async created(){
            const dataReceived = await axios.get('http://localhost:3001/storeItems', {
                responseType: 'json'
            });
            this.items = dataReceived.data
        }

    }
</script>

<style lang="scss">
    body {
        background-color: #5DB55B;
    }



    .store{

        .content{
            position: absolute;
            height: 85%;

            .shoplist{
                padding: 10px 20px 10px 20px;
                overflow: auto;
                max-height: 85%;

                .card {
                    left: 0%;
                    height: 75px;
                    width: 100%;
                    background-color: #F0F0F0;
                    margin-bottom: 8px;
                    box-shadow: 2px 0px 2px rgba(0, 0, 0, 0.24), 0px 0px 2px rgba(0, 0, 0, 0.12);

                    display: flex;
                    flex-direction: row;
                    justify-content: space-around;
                    align-content: space-between;
                    align-items: center;

                    .left{
                        width:20%;
                        img{
                            max-height: 80%;
                            width: auto;
                        }
                    }
                    .center{
                        flex-grow: 2;
                    }
                    .right{
                        width:20%;
                        font-size: 16px;
                    }
                }
                .title{
                    font-size: larger;
                    font-weight: 700;
                }
                .description{
                    font-weight: 100;
                }
            }
        }
    }
</style>
