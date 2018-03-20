<template>
    <div class="searchplayers">
        <fc5topbar></fc5topbar>

        <div class="content">
            <div class="pub"><img src="./../../assets/pub.svg" alt=""> </div>

            <div class="search">
                <input type="text" class="search-input" placeholder="Search ..." v-model="form.searchValue">
                <img class="find" src="./../../assets/searchButton.svg" alt="search" @click="searchPlayers()" @keyup.enter.native="searchPlayers()">
                <span v-if="filterIsActive">
                    <img class="filter" src="./../../assets/filterActive.svg" alt="filter active" @click="setFilterActive">
                </span>
                <span v-else>
                    <img class="filter" src="./../../assets/filter.svg" alt="filter" @click="setFilterActive">
                </span>
            </div>

            <transition name="slide-toggle">
                <div class="filters" v-if="filterIsActive">

                    <div class="position">
                        Position  <v-select  class="searchinput" v-model="selected" :options="['G','LF','LW','RW','ST','CAM','CB','CM']" />
                    </div>

                    <div class="age">
                        <label for="ageMin"> Age </label> <input id="ageMin" type="number" placeholder="Min"> <label for="agemax"> - </label> <input   id="ageMax" type="number" placeholder="Max">
                    </div>

                    <div class="ATQ">
                        <label for="atqMin"> ATQ </label> <input id="atqMin" type="number" placeholder="min"> <label for="atqMax"> - </label> <input   id="atqMax" type="number" placeholder="max">
                    </div>

                    <div class="DEF">
                        <label for="defMin"> DEF </label> <input id="defMin" type="number" placeholder="Min..."> <label for="defMax"> - </label> <input   id="defMax" type="number" placeholder="Max...">

                    </div>

                    <div class="SPE">
                        <label for="speMin"> SPE </label> <input id="speMin" type="number" placeholder="Min..."> <label for="speMax"> - </label> <input   id="speMax" type="number" placeholder="Max...">
                    </div>

                    <div class="GK">
                        <label for="gkMin"> GK &nbsp; </label> <input id="gkMin" type="number" placeholder="Min..."> <label for="gkMax"> - </label> <input   id="gkMax" type="number" placeholder="Max...">
                    </div>
                </div>
            </transition>

            <div class="results">
                <div v-for=" player in players">
                    <div class="card" @click="getPlayerModal(player.id)">
                        <div class="info">
                            <span class="name bold"> {{ player.commonName || player.firstName +' '+ player.lastName }} </span>
                            <span class="clubname thin"> {{ player.club.name }} </span>
                            <span class="age thin">{{ player.age }} </span>
                            <span class="height thin"> {{ player.height }}</span>
                            <span class="weight thin">{{ player.weight }} </span>
                        </div>
                        <div class="stats">

                            <div class="atq">
                                <div class="label bold ">
                                    ATQ
                                </div>
                                <div class="value red bold">
                                    {{ player.finishing }}
                                </div>
                            </div>

                            <div class="def">
                                <div class="label bold ">
                                    DEF
                                </div>
                                <div class="value green bold">
                                    {{ player.interceptions }}
                                </div>
                            </div>

                            <div class="spe">
                                <div class="label bold ">
                                    SPE
                                </div>
                                <div class="value blue bold">
                                    {{ player.acceleration }}
                                </div>
                            </div>

                            <div class="gk">
                                <div class="label bold ">
                                    GK
                                </div>
                                <div class="value yellow bold">
                                    {{ player.gkdiving }}
                                </div>
                            </div>

                        </div>
                        <div class="rightpart">
                            <div class="values">
                                <span class="overall thin"> {{ player.rating }} </span>
                                  <fc5playerposition :position="player.position"></fc5playerposition>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-if="players.length < 1" class="noresult bold white">
                    No result found
                </div>
            </div>
        </div>

        <fc5modalplayer v-if="showModal" @close="showModal = false" :player="playerShownInModal">
        </fc5modalplayer>
    </div>
</template>

<script>
    import axios from 'axios'
    import store from './../FootballStore'

    import fc5modalplayer from './../fc5ModalPlayer'
    import fc5playerposition from './../fc5PlayerPosition'
    import fc5svggraph from './../fc5SvgGraph'
    import vSelect from 'vue-select'
    import fc5topbar from './../fc5Topbar.vue'

    export default {
        store: store,
        name: 'app',
        components: {fc5topbar, vSelect, fc5modalplayer, fc5svggraph, fc5playerposition},
        data() {
            return {
                selected: '',
                form: {
                    searchValue: "",
                    position: "",
                    ageMin: null,
                    ageMax: null,
                    atqMin: null,
                    defMin: null,
                    defMax: null,
                    speMin: null,
                    speMax: null,
                    gkMin: null,
                    gkMax: null
                },
                players: [
                    {
                        "commonName": "",
                        "firstName": "Eden",
                        "lastName": "Hazard",
                        "nation": {
                            "imageUrls": {
                                "small": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/flags/html5/24x14/7.png",
                                "medium": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/flags/html5/30x19/7.png"
                            },
                            "abbrName": "Belgium",
                            "name": "Belgium"
                        },
                        "club": {
                            "abbrName": "Chelsea",
                            "id": 5,
                            "name": "Chelsea"
                        },
                        "position": "LW",
                        "composure": 87,
                        "height": 173,
                        "weight": 76,
                        "birthdate": "1991-01-07",
                        "age": 27,
                        "acceleration": 93,
                        "aggression": 54,
                        "agility": 93,
                        "balance": 91,
                        "ballcontrol": 92,
                        "foot": "Right",
                        "crossing": 80,
                        "curve": 82,
                        "dribbling": 93,
                        "finishing": 83,
                        "freekickaccuracy": 79,
                        "gkdiving": 11,
                        "gkhandling": 12,
                        "gkkicking": 6,
                        "gkpositioning": 8,
                        "gkreflexes": 8,
                        "headingaccuracy": 57,
                        "interceptions": 41,
                        "jumping": 59,
                        "longpassing": 81,
                        "longshots": 82,
                        "marking": 25,
                        "penalties": 86,
                        "positioning": 85,
                        "potential": 91,
                        "reactions": 85,
                        "shortpassing": 86,
                        "shotpower": 79,
                        "slidingtackle": 22,
                        "sprintspeed": 87,
                        "standingtackle": 27,
                        "stamina": 79,
                        "strength": 65,
                        "vision": 86,
                        "volleys": 79,
                        "weakFoot": 4,
                        "name": "Hazard",
                        "isGK": false,
                        "positionFull": "Left Wing",
                        "isSpecialType": false,
                        "contracts": null,
                        "fitness": null,
                        "isLoan": null,
                        "itemType": "player",
                        "id": "183277",
                        "baseId": 183277,
                        "rating": 90
                    },
                    {
                        "commonName": "",
                        "firstName": "Giorgio",
                        "headshotImgUrl": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/players/html5/134x134/138956.png",
                        "lastName": "Chiellini",
                        "league": {
                            "abbrName": "ITA 1",
                            "id": 31,
                            "imgUrl": null,
                            "name": "Calcio A"
                        },
                        "nation": {
                            "imageUrls": {
                                "small": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/flags/html5/24x14/27.png",
                                "medium": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/flags/html5/30x19/27.png",
                                "large": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/flags/html5/40x25/27.png"
                            },
                            "abbrName": "Italy",
                            "id": 27,
                            "imgUrl": null,
                            "name": "Italy"
                        },
                        "club": {
                            "imageUrls": {
                                "dark": {
                                    "small": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/clubbadges/html5/dark/24x24/l45.png",
                                    "medium": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/clubbadges/html5/dark/27x27/l45.png",
                                    "large": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/clubbadges/html5/dark/34x34/l45.png"
                                },
                                "normal": {
                                    "small": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/clubbadges/html5/normal/24x24/l45.png",
                                    "medium": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/clubbadges/html5/normal/27x27/l45.png",
                                    "large": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/clubbadges/html5/normal/34x34/l45.png"
                                }
                            },
                            "abbrName": "Juventus",
                            "id": 45,
                            "imgUrl": null,
                            "name": "Juventus"
                        },
                        "headshot": {
                            "largeImgUrl": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/players/html5/134x134/138956.png",
                            "medImgUrl": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/players/html5/105x105/138956.png",
                            "smallImgUrl": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/players/html5/40x40/138956.png"
                        },
                        "specialImages": {
                            "largeTOTWImgUrl": null,
                            "medTOTWImgUrl": null
                        },
                        "position": "CB",
                        "composure": 82,
                        "playStyle": "Basic",
                        "playStyleId": null,
                        "height": 187,
                        "weight": 85,
                        "birthdate": "1984-08-14",
                        "age": 33,
                        "acceleration": 68,
                        "aggression": 92,
                        "agility": 59,
                        "balance": 64,
                        "ballcontrol": 57,
                        "foot": "Left",
                        "skillMoves": 2,
                        "crossing": 58,
                        "curve": 60,
                        "dribbling": 58,
                        "finishing": 33,
                        "freekickaccuracy": 31,
                        "gkdiving": 3,
                        "gkhandling": 3,
                        "gkkicking": 2,
                        "gkpositioning": 4,
                        "gkreflexes": 3,
                        "headingaccuracy": 84,
                        "interceptions": 88,
                        "jumping": 89,
                        "longpassing": 59,
                        "longshots": 49,
                        "marking": 92,
                        "penalties": 50,
                        "positioning": 28,
                        "potential": 89,
                        "reactions": 82,
                        "shortpassing": 59,
                        "shotpower": 78,
                        "slidingtackle": 90,
                        "sprintspeed": 78,
                        "standingtackle": 92,
                        "stamina": 68,
                        "strength": 91,
                        "vision": 50,
                        "volleys": 45,
                        "weakFoot": 2,
                        "traits": [
                            "Long Throw",
                            "Injury Prone",
                            "Avoids Using Weaker Foot",
                            "Dives Into Tackles",
                            "Leadership",
                            "Power Header"
                        ],
                        "specialities": [
                            "Tackler",
                            "Tactician",
                            "Strength",
                            "Complete Defender"
                        ],
                        "atkWorkRate": "Low",
                        "defWorkRate": "High",
                        "playerType": "rare",
                        "attributes": [
                            {
                                "name": "fut.attribute.PAC",
                                "value": 74,
                                "chemistryBonus": [
                                    0
                                ]
                            },
                            {
                                "name": "fut.attribute.SHO",
                                "value": 46,
                                "chemistryBonus": [
                                    0
                                ]
                            },
                            {
                                "name": "fut.attribute.PAS",
                                "value": 56,
                                "chemistryBonus": [
                                    0
                                ]
                            },
                            {
                                "name": "fut.attribute.DRI",
                                "value": 60,
                                "chemistryBonus": [
                                    0
                                ]
                            },
                            {
                                "name": "fut.attribute.DEF",
                                "value": 90,
                                "chemistryBonus": [
                                    0
                                ]
                            },
                            {
                                "name": "fut.attribute.PHY",
                                "value": 85,
                                "chemistryBonus": [
                                    0
                                ]
                            }
                        ],
                        "name": "Chiellini",
                        "quality": "gold",
                        "color": "rare_gold",
                        "isGK": false,
                        "positionFull": "Centre Back",
                        "isSpecialType": false,
                        "contracts": null,
                        "fitness": null,
                        "rawAttributeChemistryBonus": null,
                        "isLoan": null,
                        "squadPosition": null,
                        "iconAttributes": null,
                        "itemType": "player",
                        "discardValue": null,
                        "id": "138956",
                        "modelName": "FUTPlayerItem",
                        "baseId": 138956,
                        "rating": 89
                    },
                    {
                        "commonName": "",
                        "firstName": "Manuel",
                        "headshotImgUrl": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/players/html5/134x134/167495.png",
                        "lastName": "Neuer",
                        "league": {
                            "abbrName": "ALL 1",
                            "id": 19,
                            "imgUrl": null,
                            "name": "Bundesliga"
                        },
                        "nation": {
                            "imageUrls": {
                                "small": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/flags/html5/24x14/21.png",
                                "medium": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/flags/html5/30x19/21.png",
                                "large": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/flags/html5/40x25/21.png"
                            },
                            "abbrName": "Allemagne",
                            "id": 21,
                            "imgUrl": null,
                            "name": "Allemagne"
                        },
                        "club": {
                            "imageUrls": {
                                "dark": {
                                    "small": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/clubbadges/html5/dark/24x24/l21.png",
                                    "medium": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/clubbadges/html5/dark/27x27/l21.png",
                                    "large": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/clubbadges/html5/dark/34x34/l21.png"
                                },
                                "normal": {
                                    "small": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/clubbadges/html5/normal/24x24/l21.png",
                                    "medium": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/clubbadges/html5/normal/27x27/l21.png",
                                    "large": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/clubbadges/html5/normal/34x34/l21.png"
                                }
                            },
                            "abbrName": "FC Bayern",
                            "id": 21,
                            "imgUrl": null,
                            "name": "FC Bayern Munich"
                        },
                        "headshot": {
                            "largeImgUrl": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/players/html5/134x134/167495.png",
                            "medImgUrl": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/players/html5/105x105/167495.png",
                            "smallImgUrl": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/players/html5/40x40/167495.png"
                        },
                        "specialImages": {
                            "largeTOTWImgUrl": null,
                            "medTOTWImgUrl": null
                        },
                        "position": "G",
                        "composure": 70,
                        "playStyle": "Base",
                        "playStyleId": null,
                        "height": 193,
                        "weight": 92,
                        "birthdate": "1986-03-27",
                        "age": 31,
                        "acceleration": 58,
                        "aggression": 29,
                        "agility": 52,
                        "balance": 35,
                        "ballcontrol": 48,
                        "foot": "Droit",
                        "skillMoves": 1,
                        "crossing": 15,
                        "curve": 14,
                        "dribbling": 30,
                        "finishing": 13,
                        "freekickaccuracy": 11,
                        "gkdiving": 91,
                        "gkhandling": 90,
                        "gkkicking": 95,
                        "gkpositioning": 91,
                        "gkreflexes": 89,
                        "headingaccuracy": 25,
                        "interceptions": 30,
                        "jumping": 78,
                        "longpassing": 59,
                        "longshots": 16,
                        "marking": 10,
                        "penalties": 47,
                        "positioning": 12,
                        "potential": 92,
                        "reactions": 85,
                        "shortpassing": 55,
                        "shotpower": 25,
                        "slidingtackle": 11,
                        "sprintspeed": 61,
                        "standingtackle": 10,
                        "stamina": 44,
                        "strength": 83,
                        "vision": 70,
                        "volleys": 11,
                        "weakFoot": 4,
                        "traits": [
                            "Longue relance",
                            "Gardien - Duel",
                            "Gardien libéro"
                        ],
                        "specialities": null,
                        "atkWorkRate": "Moyen",
                        "defWorkRate": "Moyen",
                        "playerType": "Rare",
                        "attributes": [
                            {
                                "name": "fut.attribute.DIV",
                                "value": 91,
                                "chemistryBonus": [
                                    0
                                ]
                            },
                            {
                                "name": "fut.attribute.HAN",
                                "value": 90,
                                "chemistryBonus": [
                                    0
                                ]
                            },
                            {
                                "name": "fut.attribute.KIC",
                                "value": 95,
                                "chemistryBonus": [
                                    0
                                ]
                            },
                            {
                                "name": "fut.attribute.REF",
                                "value": 89,
                                "chemistryBonus": [
                                    0
                                ]
                            },
                            {
                                "name": "fut.attribute.SPD",
                                "value": 58,
                                "chemistryBonus": [
                                    0
                                ]
                            },
                            {
                                "name": "fut.attribute.POS",
                                "value": 91,
                                "chemistryBonus": [
                                    0
                                ]
                            }
                        ],
                        "name": "Neuer",
                        "quality": "gold",
                        "color": "rare_gold",
                        "isGK": true,
                        "positionFull": "Gardien",
                        "isSpecialType": false,
                        "contracts": null,
                        "fitness": null,
                        "rawAttributeChemistryBonus": null,
                        "isLoan": null,
                        "squadPosition": null,
                        "iconAttributes": null,
                        "itemType": "player",
                        "discardValue": null,
                        "id": "167495",
                        "modelName": "FUTPlayerItem",
                        "baseId": 167495,
                        "rating": 92
                    },
                    {
                        "commonName": "",
                        "firstName": "Gareth",
                        "headshotImgUrl": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/players/html5/134x134/173731.png",
                        "lastName": "Bale",
                        "league": {
                            "abbrName": "ESP 1",
                            "id": 53,
                            "imgUrl": null,
                            "name": "LaLiga Santander"
                        },
                        "nation": {
                            "imageUrls": {
                                "small": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/flags/html5/24x14/50.png",
                                "medium": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/flags/html5/30x19/50.png",
                                "large": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/flags/html5/40x25/50.png"
                            },
                            "abbrName": "Wales",
                            "id": 50,
                            "imgUrl": null,
                            "name": "Wales"
                        },
                        "club": {
                            "imageUrls": {
                                "dark": {
                                    "small": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/clubbadges/html5/dark/24x24/l243.png",
                                    "medium": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/clubbadges/html5/dark/27x27/l243.png",
                                    "large": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/clubbadges/html5/dark/34x34/l243.png"
                                },
                                "normal": {
                                    "small": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/clubbadges/html5/normal/24x24/l243.png",
                                    "medium": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/clubbadges/html5/normal/27x27/l243.png",
                                    "large": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/clubbadges/html5/normal/34x34/l243.png"
                                }
                            },
                            "abbrName": "R. Madrid",
                            "id": 243,
                            "imgUrl": null,
                            "name": "Real Madrid"
                        },
                        "headshot": {
                            "largeImgUrl": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/players/html5/134x134/173731.png",
                            "medImgUrl": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/players/html5/105x105/173731.png",
                            "smallImgUrl": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/players/html5/40x40/173731.png"
                        },
                        "specialImages": {
                            "largeTOTWImgUrl": null,
                            "medTOTWImgUrl": null
                        },
                        "position": "RW",
                        "composure": 85,
                        "playStyle": "Basic",
                        "playStyleId": null,
                        "height": 183,
                        "weight": 74,
                        "birthdate": "1989-07-16",
                        "age": 28,
                        "acceleration": 93,
                        "aggression": 65,
                        "agility": 77,
                        "balance": 65,
                        "ballcontrol": 87,
                        "foot": "Left",
                        "skillMoves": 4,
                        "crossing": 87,
                        "curve": 86,
                        "dribbling": 89,
                        "finishing": 87,
                        "freekickaccuracy": 85,
                        "gkdiving": 15,
                        "gkhandling": 15,
                        "gkkicking": 11,
                        "gkpositioning": 5,
                        "gkreflexes": 6,
                        "headingaccuracy": 86,
                        "interceptions": 59,
                        "jumping": 85,
                        "longpassing": 80,
                        "longshots": 90,
                        "marking": 51,
                        "penalties": 76,
                        "positioning": 86,
                        "potential": 89,
                        "reactions": 87,
                        "shortpassing": 86,
                        "shotpower": 91,
                        "slidingtackle": 52,
                        "sprintspeed": 95,
                        "standingtackle": 55,
                        "stamina": 76,
                        "strength": 80,
                        "vision": 79,
                        "volleys": 76,
                        "weakFoot": 3,
                        "traits": [
                            "Long Throw",
                            "Injury Prone",
                            "Avoids Using Weaker Foot",
                            "Shooting - Long Shot Taker",
                            "Dribbler - Speed Dribbler",
                            "Shooting - Chip Shot"
                        ],
                        "specialities": [
                            "Speedster",
                            "Dribbler",
                            "Distance Shooter",
                            "Crosser",
                            "Clinical Finisher",
                            "Complete Forward",
                            "Poacher"
                        ],
                        "atkWorkRate": "High",
                        "defWorkRate": "Medium",
                        "playerType": "rare",
                        "attributes": [
                            {
                                "name": "fut.attribute.PAC",
                                "value": 94,
                                "chemistryBonus": [
                                    0
                                ]
                            },
                            {
                                "name": "fut.attribute.SHO",
                                "value": 87,
                                "chemistryBonus": [
                                    0
                                ]
                            },
                            {
                                "name": "fut.attribute.PAS",
                                "value": 84,
                                "chemistryBonus": [
                                    0
                                ]
                            },
                            {
                                "name": "fut.attribute.DRI",
                                "value": 86,
                                "chemistryBonus": [
                                    0
                                ]
                            },
                            {
                                "name": "fut.attribute.DEF",
                                "value": 57,
                                "chemistryBonus": [
                                    0
                                ]
                            },
                            {
                                "name": "fut.attribute.PHY",
                                "value": 76,
                                "chemistryBonus": [
                                    0
                                ]
                            }
                        ],
                        "name": "Bale",
                        "quality": "gold",
                        "color": "rare_gold",
                        "isGK": false,
                        "positionFull": "Right Wing",
                        "isSpecialType": false,
                        "contracts": null,
                        "fitness": null,
                        "rawAttributeChemistryBonus": null,
                        "isLoan": null,
                        "squadPosition": null,
                        "iconAttributes": null,
                        "itemType": "player",
                        "discardValue": null,
                        "id": "173731",
                        "modelName": "FUTPlayerItem",
                        "baseId": 173731,
                        "rating": 89
                    },
                ],
                filterIsActive: false,
                showModal: false,
                playerShownInModal:
                    {
                "commonName": "",
                "firstName": "Eden",
                "lastName": "Hazard",
                "nation": {
                "imageUrls": {
                    "small": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/flags/html5/24x14/7.png",
                        "medium": "https://fifa17.content.easports.com/fifa/fltOnlineAssets/B1BA185F-AD7C-4128-8A64-746DE4EC5A82/2018/fut/items/images/flags/html5/30x19/7.png"
                },
                "abbrName": "Belgium",
                    "name": "Belgium"
            },
                "club": {
                "abbrName": "Chelsea",
                    "id": 5,
                    "name": "Chelsea"
            },
                "position": "LW",
                "composure": 87,
                "height": 173,
                "weight": 76,
                "birthdate": "1991-01-07",
                "age": 27,
                "acceleration": 93,
                "aggression": 54,
                "agility": 93,
                "balance": 91,
                "ballcontrol": 92,
                "foot": "Right",
                "crossing": 80,
                "curve": 82,
                "dribbling": 93,
                "finishing": 83,
                "freekickaccuracy": 79,
                "gkdiving": 11,
                "gkhandling": 12,
                "gkkicking": 6,
                "gkpositioning": 8,
                "gkreflexes": 8,
                "headingaccuracy": 57,
                "interceptions": 41,
                "jumping": 59,
                "longpassing": 81,
                "longshots": 82,
                "marking": 25,
                "penalties": 86,
                "positioning": 85,
                "potential": 91,
                "reactions": 85,
                "shortpassing": 86,
                "shotpower": 79,
                "slidingtackle": 22,
                "sprintspeed": 87,
                "standingtackle": 27,
                "stamina": 79,
                "strength": 65,
                "vision": 86,
                "volleys": 79,
                "weakFoot": 4,
                "name": "Hazard",
                "isGK": false,
                "positionFull": "Left Wing",
                "isSpecialType": false,
                "contracts": null,
                "fitness": null,
                "isLoan": null,
                "itemType": "player",
                "id": "183277",
                "baseId": 183277,
                "rating": 90
            }
            }
        },
        methods:{
            setFilterActive(){
                this.filterIsActive = !this.filterIsActive
            },
            async searchPlayers(){
                const dataReceived = await axios.get('http://localhost:3001/players?name_like='+this.form.searchValue+'&position_like='+this.selected+'&_limit=15', {
                    responseType: 'json'
                });
                this.players = dataReceived.data
                this.hideFilters()

            },
            hideFilters(){
                this.filterIsActive = false
            },
            async getPlayerModal(idPlayerClicked){
                const dataReceived = await axios.get('http://localhost:3001/players?id='+ idPlayerClicked +'', {
                    responseType: 'json'
                });
                this.playerShownInModal = dataReceived.data[0]
                this.showModal = true;
            }
        },
        async created(){

        },
    }
</script>

<style lang="scss">
    body {
        background-color: #5DB55B;
    }

    .card {
        left: 0%;
        height: 75px;
        width: 100%;
        background-color: #F0F0F0;
        margin-bottom: 8px;
        box-shadow: 2px 0px 2px rgba(0,0,0, 0.24),0px 0px 2px rgba(0,0,0, 0.12);

        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-content: space-between;
        align-items: center;

        .info{
            order: 0;
            width: 40%;

            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-content: space-evenly;
            align-items: center;


            .name{
                align-self: flex-start;
                padding-left: 5px;
                font-size:12px;
            }
            .clubname{
                align-self: flex-start;
                padding-left: 5px;
                font-size:11px;
            }
            .age{
                align-self: flex-start;
                padding-left: 5px;
                font-size:11px;
            }
            .height{
                align-self: flex-start;
                padding-left: 5px;
                font-size:11px;
            }
            .weight{
                align-self: flex-start;
                padding-left: 5px;
                font-size:11px;
            }
        }

        .stats{
            order: 1;
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
            align-items: center;

            flex-grow: 2;
            .atq, .def, .spe, .gk{
                height:100%;
                width: 25%;
            }
            .label{
                vertical-align: bottom;
            }
            .value{
                display: flex;
                align-items: center;
                justify-content: center;

                height: 50%;
                font-size: 19px;
                background-image: url("./../../assets/circle.svg");
                background-repeat: no-repeat;
                background-position: center ;
                background-size: 79%;
            }
        }

        .rightpart{
            height: 90%;
            order: 2;
            display: flex;
            flex-direction: column;
            flex-grow: 1;
            padding-right: 5px;
            .values{
                display: flex;
                flex-direction: row;
                justify-content: flex-end;
                background-image: url("./../../assets/underline.svg");
                background-repeat: no-repeat;
                background-position: bottom right;
                .overall{
                    margin-right: 2px;
                }
            }
        }
    }

    .searchplayers{
        display:flex;

        .content {

            position: absolute;
            height: 85%;
            width: 100%;
            left: 0;

            display: flex;
            flex-direction: column;

            /*border: 1px solid black;*/
            .search {
               /* display: flex;
                flex-direction: row;
                justify-content: space-evenly;*/

                .search-input{
                    color: #595555;
                    width: 60%;
                    font-family: Roboto;
                    font-size: 16px;
                    font-weight: bold;
                }
                .find {

                }
                .filter {

                }
            }

            .filters {
                background-color: #449E42;
                width: 100%;
                line-height: 2.5;
                box-shadow: inset 0px 0px 8px rgba(0, 0, 0, 0.12);

                padding: 10px 0px 10px 0px;
                color: #F0F0F0;
                font-weight: bold;
                input{
                    height:30px;
                }
                input[type=number]{
                    width: 50px;
                    font-family: Roboto;
                    font-weight: 700;
                    font-size: 15px;
                    text-align: center;
                }
                .searchinput{
                    background-color: #FFF;
                }
                .position{
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: space-evenly;
                }
                .age{
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: space-evenly;
                }
                .ATQ{
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: space-evenly;
                }
                .DEF{
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: space-evenly;
                }
                .SPE{
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: space-evenly;
                }
                .GK{
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: space-evenly;
                }
            }

            .results {
                padding: 10px 20px 10px 20px;
                overflow: auto;
                background-color: #5DB55B;
            }

        }
    }

    .selected-tag{
        color: #595555 !important;
    }

    .slide-toggle-enter-active,
    .slide-toggle-leave-active {
        transition: height .3s;
        opacity:0;
    }
    .slide-toggle-enter-active {
        height: 200px;
    }
    .slide-toggle-enter,
    .slide-toggle-leave-active {
        height: 0;
        opacity: 0;
    }
    .slide-toggle-leave {
        height: 200px;
        opacity: 1;
    }
</style>
