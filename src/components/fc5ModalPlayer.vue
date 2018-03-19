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
                                            Player commonName
                                        </slot>
                                    </div>
                                </div>
                            </div>

                            <div class="flexrow textleft">
                                <div class="flexcol box">
                                    <div class="thin">Club</div>
                                    <div class="bold">
                                        <slot name="club">
                                            Player Club
                                        </slot>
                                    </div>
                                </div>
                            </div>

                            <div class="flexrow">
                                <div class="flexcol flexgrow1 box">
                                    <div class="thin">Ovr</div>
                                    <div class="bold">
                                        <slot name="ovr">
                                            00
                                        </slot>
                                    </div>
                                </div>
                                <div class="flexcol flexgrow2 box">
                                    <div class="thin">Pos</div>
                                    <div class="bold red">
                                        <slot name="pos">
                                            CDM
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
                                            00
                                        </slot>
                                    </div>
                                </div>
                                <div class="flexcol flexgrow1 box">
                                    <div class="thin">Hei</div>
                                    <div class="bold">
                                        <slot name="height">
                                            000
                                        </slot>
                                    </div>
                                </div>
                                <div class="flexcol flexgrow1 box">
                                    <div class="thin">Wei</div>
                                    <div class="bold">
                                        <slot name="weight">
                                            00
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

                    <div class="flexrow ">
                        <div class="flexcol box">
                            <div class="thin">ATQ</div>
                            <div class="bold red">
                                <slot name="atq">
                                    00
                                </slot>
                            </div>
                        </div>
                        <div class="flexcol box">
                            <div class="thin">Sho</div>
                            <div class="bold">
                                <slot name="shotpower">
                                    00
                                </slot>
                            </div>
                        </div>
                        <div class="flexcol box">
                            <div class="thin">Fin</div>
                            <div class="bold ">
                                <slot name="finishing">
                                    00
                                </slot>
                            </div>
                        </div>
                        <div class="flexcol box">
                            <div class="thin">Lon</div>
                            <div class="bold ">
                                <slot name="longshot">
                                    00
                                </slot>
                            </div>
                        </div>
                        <div class="flexcol box">
                            <div class="thin">Dri</div>
                            <div class="bold ">
                                <slot name="dribbling">
                                    00
                                </slot>
                            </div>
                        </div>
                        <div class="flexcol box">
                            <div class="thin">Con</div>
                            <div class="bold ">
                                <slot name="ballcontrol">
                                    00
                                </slot>
                            </div>
                        </div>
                        <div class="flexcol box">
                            <div class="thin">Cro</div>
                            <div class="bold ">
                                <slot name="crossing">
                                    00
                                </slot>
                            </div>
                        </div>
                        <div class="flexcol box">
                            <div class="thin">Cur</div>
                            <div class="bold ">
                                <slot name="curve">
                                    00
                                </slot>
                            </div>
                        </div>
                        <div class="flexcol box">
                            <div class="thin">Lon</div>
                            <div class="bold ">
                                <slot name="longshot">
                                    00
                                </slot>
                            </div>
                        </div>
                        <div class="flexcol box">
                            <div class="thin">Pen</div>
                            <div class="bold ">
                                <slot name="penalty">
                                    00
                                </slot>
                            </div>
                        </div>
                    </div>
                    <div class="flexrow ">
                        <div class="flexcol box">
                            <div class="thin">DEF</div>
                            <div class="bold green">
                                <slot name="def">
                                    00
                                </slot>
                            </div>
                        </div>
                        <div class="flexcol box">
                            <div class="thin">Int</div>
                            <div class="bold">
                                <slot name="interception">
                                    00
                                </slot>
                            </div>
                        </div>
                        <div class="flexcol box">
                            <div class="thin">Hea</div>
                            <div class="bold ">
                                <slot name="headingaccuracy">
                                    00
                                </slot>
                            </div>
                        </div>
                        <div class="flexcol box">
                            <div class="thin">Jum</div>
                            <div class="bold ">
                                <slot name="jumping">
                                    00
                                </slot>
                            </div>
                        </div>
                        <div class="flexcol box">
                            <div class="thin">Mar</div>
                            <div class="bold ">
                                <slot name="marking">
                                    00
                                </slot>
                            </div>
                        </div>
                        <div class="flexcol box">
                            <div class="thin">Rea</div>
                            <div class="bold ">
                                <slot name="reactions">
                                    00
                                </slot>
                            </div>
                        </div>
                        <div class="flexcol box">
                            <div class="thin">Sli</div>
                            <div class="bold ">
                                <slot name="slidingtackle">
                                    00
                                </slot>
                            </div>
                        </div>
                        <div class="flexcol box">
                            <div class="thin">Tac</div>
                            <div class="bold ">
                                <slot name="standingtackle">
                                    00
                                </slot>
                            </div>
                        </div>
                        <div class="flexcol box">
                            <div class="thin">Str</div>
                            <div class="bold ">
                                <slot name="strength">
                                    00
                                </slot>
                            </div>
                        </div>
                        <div class="flexcol box">
                            <div class="thin">Sta</div>
                            <div class="bold ">
                                <slot name="stamina">
                                    00
                                </slot>
                            </div>
                        </div>
                    </div>
                    <div class="flexrow ">
                        <div class="flexcol box">
                            <div class="thin">SPE</div>
                            <div class="bold blue">
                                <slot name="spe">
                                    00
                                </slot>
                            </div>
                        </div>
                        <div class="flexcol box">
                            <div class="thin">Acc</div>
                            <div class="bold">
                                <slot name="acceleration">
                                    00
                                </slot>
                            </div>
                        </div>
                        <div class="flexcol box">
                            <div class="thin">Spr</div>
                            <div class="bold ">
                                <slot name="sprintspeed">
                                    00
                                </slot>
                            </div>
                        </div>
                        <div class="flexcol box">
                            <div class="thin">Agi</div>
                            <div class="bold ">
                                <slot name="agility">
                                    00
                                </slot>
                            </div>
                        </div>
                        <div class="flexcol box">
                            <div class="thin">Agr</div>
                            <div class="bold ">
                                <slot name="aggression">
                                    00
                                </slot>
                            </div>
                        </div>
                        <div class="flexcol box">
                            <div class="thin">Bal</div>
                            <div class="bold ">
                                <slot name="balance">
                                    00
                                </slot>
                            </div>
                        </div>
                        <div class="flexcol box">
                            <div class="thin">Vis</div>
                            <div class="bold ">
                                <slot name="vision">
                                    00
                                </slot>
                            </div>
                        </div>
                        <div class="flexcol box">
                            <div class="thin">Fki</div>
                            <div class="bold ">
                                <slot name="freekick">
                                    00
                                </slot>
                            </div>
                        </div>
                        <div class="flexcol box">
                            <div class="thin">Pos</div>
                            <div class="bold ">
                                <slot name="positionning">
                                    00
                                </slot>
                            </div>
                        </div>
                        <div class="flexcol box">
                            <div class="thin">Sho</div>
                            <div class="bold ">
                                <slot name="shotpass">
                                    00
                                </slot>
                            </div>
                        </div>
                        <div class="flexcol box">
                            <div class="thin">Lon</div>
                            <div class="bold ">
                                <slot name="longpass">
                                    00
                                </slot>
                            </div>
                        </div>
                    </div>
                    <div class="flexrow ">
                        <div class="flexcol box">
                            <div class="thin">GK &nbsp;</div>
                            <div class="bold yellow">
                                <slot name="gk">
                                    00
                                </slot>
                            </div>
                        </div>
                        <div class="flexcol box">
                            <div class="thin">Div</div>
                            <div class="bold">
                                <slot name="gkdiving">
                                    00
                                </slot>
                            </div>
                        </div>
                        <div class="flexcol box">
                            <div class="thin">Han</div>
                            <div class="bold ">
                                <slot name="handling">
                                    00
                                </slot>
                            </div>
                        </div>
                        <div class="flexcol box">
                            <div class="thin">Kick</div>
                            <div class="bold ">
                                <slot name="kicking">
                                    00
                                </slot>
                            </div>
                        </div>
                        <div class="flexcol box">
                            <div class="thin">Pos</div>
                            <div class="bold ">
                                <slot name="positionning">
                                    00
                                </slot>
                            </div>
                        </div>
                        <div class="flexcol box">
                            <div class="thin">Ref</div>
                            <div class="bold ">
                                <slot name="reflexes">
                                    00
                                </slot>
                            </div>
                        </div>
                    </div>

                    <slot name="svgGraph"/>


                    <div class="modal-footer">
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

    export default {
        name: "fc5modalplayer",
        components: {fc5svggraph},
        props: ['player'],
        data(){
            return{

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
            flex-grow: 2;
        }

        .modal-header h3 {
            margin-top: 0;
            color: #595555;
        }

        .modal-body {
            margin: 20px 0;
        }

        .flag{
            max-height: 24px;
        }

        .modal-default-button {
            background-color: red;
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
