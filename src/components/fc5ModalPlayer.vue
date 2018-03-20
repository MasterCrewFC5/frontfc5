<template>
    <transition name="modal">
        <div class="modal-mask" >
            <div class="modal-wrapper" @click.self="$emit('close')">
                <div class="modal-container">

                    <div class="flexrow toppart">
                        <div class="flexcol left">
                            <div class="flexrow textleft">
                                <div class="flexcol box">
                                    <div class="thin">Name</div>
                                    <div class="bold">
                                        <slot name="commonName">
                                            {{ player.commonName || player.firstName +' '+ player.lastName }}
                                        </slot>
                                    </div>
                                </div>
                            </div>

                            <div class="flexrow textleft">
                                <div class="flexcol box">
                                    <div class="thin">Club</div>
                                    <div class="bold">
                                        <slot name="club">
                                           {{ player.club.name }}
                                        </slot>
                                    </div>
                                </div>
                            </div>

                            <div class="flexrow">
                                <div class="flexcol flexgrow1 box">
                                    <div class="thin">Ovr</div>
                                    <div class="bold">
                                        <slot name="ovr">
                                            {{player.rating}}
                                        </slot>
                                    </div>
                                </div>
                                <div class="flexcol flexgrow2 box">
                                    <div class="thin">Pos</div>
                                    <div class="bold red">
                                        <slot name="pos">
                                            <fc5playerposition :position="player.position"></fc5playerposition>
                                        </slot>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="flexcol right">
                            <div class="flexrow">
                                <div class="flexcol flexgrow1 box">
                                    <div class="thin">Age</div>
                                    <div class="bold">
                                        <slot name="age">
                                            {{player.age}}
                                        </slot>
                                    </div>
                                </div>
                                <div class="flexcol flexgrow1 box">
                                    <div class="thin">Hei</div>
                                    <div class="bold">
                                        <slot name="height">
                                            {{player.height}}
                                        </slot>
                                    </div>
                                </div>
                                <div class="flexcol flexgrow1 box">
                                    <div class="thin">Wei</div>
                                    <div class="bold">
                                        <slot name="weight">
                                            {{player.weight}}
                                        </slot>
                                    </div>
                                </div>
                            </div>

                            <div class="flexrow textleft ">
                                <div class="flexcol">
                                    <div class="thin">Nation</div>
                                    <div class="bold">
                                        <slot name="nation">
                                            <img class="flag" :src="player.nation.imageUrls.small" alt="player Flag">
                                        </slot>
                                    </div>
                                </div>
                            </div>

                            <div class="flexrow textleft  ">
                                <div class="flexcol box">
                                    <div class="thin">Value</div>
                                    <div class="bold">
                                        <slot name="value">
                                            300 000 $
                                        </slot>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="flexrow line ">
                        <div class="flexcol box">
                            <div class="thin">ATQ</div>
                            <div class="bold red">
                                <slot name="atq">
                                    {{ Math.round((player.finishing + player.shotpower + player.longshots + player.volleys + player.penalties + player.dribbling + player.curve + player.crossing + player.ballcontrol) / 9) }}
                                </slot>
                            </div>
                        </div>
                        <div class="flexcol box">
                            <div class="thin">Sho</div>
                            <div class="bold">
                                <slot name="shotpower">
                                    {{player.shotpower}}
                                </slot>
                            </div>
                        </div>
                        <div class="flexcol box">
                            <div class="thin">Fin</div>
                            <div class="bold ">
                                <slot name="finishing">
                                    {{player.finishing}}
                                </slot>
                            </div>
                        </div>
                        <div class="flexcol box">
                            <div class="thin">Lon</div>
                            <div class="bold ">
                                <slot name="longshot">
                                    {{player.longshots}}
                                </slot>
                            </div>
                        </div>
                        <div class="flexcol box">
                            <div class="thin">Dri</div>
                            <div class="bold ">
                                <slot name="dribbling">
                                    {{player.dribbling}}
                                </slot>
                            </div>
                        </div>
                        <div class="flexcol box">
                            <div class="thin">Con</div>
                            <div class="bold ">
                                <slot name="ballcontrol">
                                    {{player.ballcontrol}}
                                </slot>
                            </div>
                        </div>
                        <div class="flexcol box">
                            <div class="thin">Cro</div>
                            <div class="bold ">
                                <slot name="crossing">
                                    {{player.crossing}}
                                </slot>
                            </div>
                        </div>
                        <div class="flexcol box">
                            <div class="thin">Cur</div>
                            <div class="bold ">
                                <slot name="curve">
                                    {{player.curve}}
                                </slot>
                            </div>
                        </div>
                        <div class="flexcol box">
                            <div class="thin">Vol</div>
                            <div class="bold ">
                                <slot name="volleys">
                                    {{player.volleys}}
                                </slot>
                            </div>
                        </div>
                        <div class="flexcol box">
                            <div class="thin">Pen</div>
                            <div class="bold ">
                                <slot name="penalties">
                                    {{player.penalties}}
                                </slot>
                            </div>
                        </div>
                    </div>
                    <div class="flexrow line">
                        <div class="flexcol box">
                            <div class="thin">DEF</div>
                            <div class="bold green">
                                <slot name="def">
                                    {{ Math.round((player.headingaccuracy + player.interceptions + player.jumping + player.marking + player.reactions + player.slidingtackle + player.standingtackle + player.strength + player.stamina) / 9) }}
                                </slot>
                            </div>
                        </div>
                        <div class="flexcol box">
                            <div class="thin">Int</div>
                            <div class="bold">
                                <slot name="interceptions">
                                    {{player.interceptions}}
                                </slot>
                            </div>
                        </div>
                        <div class="flexcol box">
                            <div class="thin">Hea</div>
                            <div class="bold ">
                                <slot name="headingaccuracy">
                                    {{player.headingaccuracy}}
                                </slot>
                            </div>
                        </div>
                        <div class="flexcol box">
                            <div class="thin">Jum</div>
                            <div class="bold ">
                                <slot name="jumping">
                                    {{player.jumping}}
                                </slot>
                            </div>
                        </div>
                        <div class="flexcol box">
                            <div class="thin">Mar</div>
                            <div class="bold ">
                                <slot name="marking">
                                    {{player.marking}}
                                </slot>
                            </div>
                        </div>
                        <div class="flexcol box">
                            <div class="thin">Rea</div>
                            <div class="bold ">
                                <slot name="reactions">
                                    {{player.reactions}}
                                </slot>
                            </div>
                        </div>
                        <div class="flexcol box">
                            <div class="thin">Sli</div>
                            <div class="bold ">
                                <slot name="slidingtackle">
                                    {{player.slidingtackle}}
                                </slot>
                            </div>
                        </div>
                        <div class="flexcol box">
                            <div class="thin">Tac</div>
                            <div class="bold ">
                                <slot name="standingtackle">
                                    {{player.standingtackle}}
                                </slot>
                            </div>
                        </div>
                        <div class="flexcol box">
                            <div class="thin">Str</div>
                            <div class="bold ">
                                <slot name="strength">
                                    {{player.strength}}
                                </slot>
                            </div>
                        </div>
                        <div class="flexcol box">
                            <div class="thin">Sta</div>
                            <div class="bold ">
                                <slot name="stamina">
                                    {{player.stamina}}
                                </slot>
                            </div>
                        </div>
                    </div>
                    <div class="flexrow line">
                        <div class="flexcol box">
                            <div class="thin">SPE</div>
                            <div class="bold blue">
                                <slot name="spe">
                                    {{ Math.round((player.acceleration + player.aggression + player.agility + player.balance + player.freekickaccuracy + player.shortpassing + player.sprintspeed + player.longpassing + player.positioning + player.vision) / 10) }}
                                </slot>
                            </div>
                        </div>
                        <div class="flexcol box">
                            <div class="thin">Acc</div>
                            <div class="bold">
                                <slot name="acceleration">
                                    {{player.acceleration}}
                                </slot>
                            </div>
                        </div>
                        <div class="flexcol box">
                            <div class="thin">Spr</div>
                            <div class="bold ">
                                <slot name="sprintspeed">
                                    {{player.sprintspeed}}
                                </slot>
                            </div>
                        </div>
                        <div class="flexcol box">
                            <div class="thin">Agi</div>
                            <div class="bold ">
                                <slot name="agility">
                                    {{player.balance}}
                                </slot>
                            </div>
                        </div>
                        <div class="flexcol box">
                            <div class="thin">Agr</div>
                            <div class="bold ">
                                <slot name="aggression">
                                    {{player.aggression}}
                                </slot>
                            </div>
                        </div>
                        <div class="flexcol box">
                            <div class="thin">Bal</div>
                            <div class="bold ">
                                <slot name="balance">
                                    {{player.balance}}
                                </slot>
                            </div>
                        </div>
                        <div class="flexcol box">
                            <div class="thin">Vis</div>
                            <div class="bold ">
                                <slot name="vision">
                                    {{player.vision}}
                                </slot>
                            </div>
                        </div>
                        <div class="flexcol box">
                            <div class="thin">Fki</div>
                            <div class="bold ">
                                <slot name="freekick">
                                    {{player.freekickaccuracy}}
                                </slot>
                            </div>
                        </div>
                        <div class="flexcol box">
                            <div class="thin">Pos</div>
                            <div class="bold ">
                                <slot name="positioning">
                                    {{player.positioning}}
                                </slot>
                            </div>
                        </div>
                        <div class="flexcol box">
                            <div class="thin">Sho</div>
                            <div class="bold ">
                                <slot name="shortpassing">
                                    {{player.shortpassing}}
                                </slot>
                            </div>
                        </div>
                        <div class="flexcol box">
                            <div class="thin">Lon</div>
                            <div class="bold ">
                                <slot name="longpassing">
                                    {{player.longpassing}}
                                </slot>
                            </div>
                        </div>
                    </div>
                    <div class="flexrow line">
                        <div class="flexcol box">
                            <div class="thin">GK &nbsp;</div>
                            <div class="bold yellow">
                                <slot name="gk">
                                    {{ Math.round((player.gkhandling + player.gkkicking + player.gkdiving + player.gkpositioning + player.gkreflexes) / 5)}}
                                </slot>
                            </div>
                        </div>
                        <div class="flexcol box">
                            <div class="thin">Div</div>
                            <div class="bold">
                                <slot name="gkdiving">
                                    {{player.gkdiving}}
                                </slot>
                            </div>
                        </div>
                        <div class="flexcol box">
                            <div class="thin">Han</div>
                            <div class="bold ">
                                <slot name="handling">
                                    {{player.gkhandling}}
                                </slot>
                            </div>
                        </div>
                        <div class="flexcol box">
                            <div class="thin">Kick</div>
                            <div class="bold ">
                                <slot name="kicking">
                                    {{player.gkkicking}}
                                </slot>
                            </div>
                        </div>
                        <div class="flexcol box">
                            <div class="thin">Pos</div>
                            <div class="bold ">
                                <slot name="gkpositioning">
                                    {{player.gkpositioning}}
                                </slot>
                            </div>
                        </div>
                        <div class="flexcol box">
                            <div class="thin">Ref</div>
                            <div class="bold ">
                                <slot name="reflexes">
                                    {{player.gkreflexes}}
                                </slot>
                            </div>
                        </div>
                    </div>

                    <div v-if="graphIsShown">
                        <slot name="svgGraph">
                            <svg width="200" height="200">
                                <fc5svggraph :stats="stats"/>
                            </svg>
                        </slot>
                    </div>


                    <div class="modal-footer" @click="openContract" >
                        <slot name="footer">
                            Offer contract
                            <button class="modal-default-button" @click="$emit('close')">
                                Close
                            </button>
                        </slot>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>

    import fc5svggraph from './fc5SvgGraph'
    import fc5playerposition from './fc5PlayerPosition'

    export default {
        name: "fc5modalplayer",
        components: {fc5svggraph, fc5playerposition},
        props: ['player'],
        data(){
          return{
              graphIsShown: true
          }
        },
        computed: {
            stats: function () {
                let gkStats = [
                    { label: 'Diving', value: this.player.gkdiving },
                    { label: 'Handling', value: this.player.gkhandling },
                    { label: 'Kicking', value: this.player.gkkicking },
                    { label: 'Positionning', value: this.player.gkpositioning },
                    { label: 'Reflexes', value: this.player.gkreflexes },
                ]
                let playerStats = [
                    { label: 'Shoot', value: (this.player.finishing + this.player.shotpower + this.player.longshots + this.player.volleys) / 4 },
                    { label: 'Speed', value: (this.player.sprintspeed + this.player.acceleration) / 2 },
                    { label: 'Dribble', value: (this.player.dribbling + this.player.ballcontrol + this.player.agility ) / 3 },
                    { label: 'Passing', value: (this.player.shortpassing + this.player.longpassing + this.player.crossing) / 3 },
                    { label: 'Defense', value: (this.player.interceptions + this.player.marking + this.player.slidingtackle + this.player.standingtackle ) / 4 },
                    { label: 'Physicality', value: (this.player.stamina + this.player.strength + this.player.jumping) /3 },
                ]

                if(this.player.isGK === true ) return gkStats;

                return playerStats;
            }
        },
        methods:{
            openContract(){
                console.log("hide graph and show contract proposition")
            }
        }
    }
</script>

<style lang="scss" scoped>
    .modal-mask {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        display: table;
        transition: opacity .3s ease;
    }

    .modal-wrapper {
        display: table-cell;
        vertical-align: middle;
    }

    .modal-container {
        width: 92%;
        margin: 0px auto;
        background-color: #fff;
        box-shadow: 2px 0px 2px rgba(0, 0, 0, .24), 0 0px 2px rgba(0, 0, 0, .12)  ;
        transition: all .3s ease;
        font-family: Roboto;
        padding: 10px 5px 10px 5px;

        .left{
            flex-grow: 1;
        }
        .right{
            flex-grow: 2;
        }
        .modal-header h3 {
            margin-top: 0;
            color: #595555;
        }

        .modal-body {
            margin: 20px 0;
        }

        .line{
            justify-content: space-evenly;
            padding: 5px 0px 5px 0px;
        }
        .flag{
            max-height: 24px;
        }

        .modal-default-button {
            float: right;
        }
    }



    /*
     * The following styles are auto-applied to elements with
     * transition="modal" when their visibility is toggled
     * by Vue.js.
     *
     * You can easily play with the modal transition by editing
     * these styles.
     */

    .modal-enter {
        opacity: 0;
    }

    .modal-leave-active {
        opacity: 0;
    }

    .modal-enter .modal-container,
    .modal-leave-active .modal-container {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }
</style>
