<template>
  <div class="hello">
    Joueur actuel:
    <div v-if="playingUser ===1">
      <img src="./../assets/player132.png">
    </div>
    <div v-else=""><img src="./../assets/player232.png"></div>
    <h2>{{ playingUser }}</h2>
    <div class="terrain">
      <div class="cell" v-for="cell in terrain">
        <div class="isBallon" v-if="cell.isBallon === 1">
          <img src="./../assets/ball24.png">
        </div>
        <div v-else>
          <!--{{ cell.name }}-->
        </div>
        <div class="user2" v-if="cell.user2.isPlayer == 1" @click="pass(cell.user2.player)">
          <img src="./../assets/player216.png">
        </div>
        <div class="user1" v-if="cell.user1.isPlayer == 1" @click="pass(cell.user1.player)">
          <img src="./../assets/player116.png">
        </div>
      </div>
    </div>
    <button @click="shoot">Tirer</button>
    <input type="number" v-model="ball.position">
    <button @click="dribble">dribble</button>
    <button @click="test">JSON</button>
    <h2>{{User1.score}} - {{User2.score}}</h2>
    journal d'évenement: <br>
    <div v-for="event in events">
      {{ event.description }}
    </div>
  </div>
</template>


<script>
  import _ from 'lodash'
  import store from './FootballStore'
  import Vuex from 'vuex'

  export default {
    store: store,
    name: 'hello',
    props: {},
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        wTerrain: 7,
        hTerrain: 9,
        eventz: [
          /*{ id:34567878, description: 'test' },
           { id:0, description: 'test1' },
           { id:0, description: 'test2' },*/
        ],
        ball: {
          position: 45,
          possessor: '1'
        },
        terrain: [],
        User1: {
          score: 0,
          players: {
            player1: {
              position: 49,
              stats: {
                atq: 10,
                def: 90
              }
            },
            player2: {
              position: 58,
              stats: {
                atq: 10,
                def: 90
              }
            },
            player3: {
              position: 38,
              stats: {
                atq: 10,
                def: 90
              }
            },
            player4: {
              position: 17,
              stats: {
                atq: 10,
                def: 90
              }
            },
            player5: {
              position: 77,
              stats: {
                atq: 10,
                def: 90
              }
            },
            player6: {
              position: 35,
              stats: {
                atq: 10,
                def: 90
              }
            },
            player7: {
              position: 55,
              stats: {
                atq: 10,
                def: 90
              }
            },
            player8: {
              position: 14,
              stats: {
                atq: 10,
                def: 90
              }
            },
            player9: {
              position: 74,
              stats: {
                atq: 10,
                def: 90
              }
            },
            player10: {
              position: 32,
              stats: {
                atq: 10,
                def: 90
              }
            },
            player11: {
              position: 52,
              stats: {
                atq: 10,
                def: 90
              }
            },
          }
        },
        User2: {
          score: 0,
          players: {
            player1: {
              position: 49,
              stats: {
                atq: 10,
                def: 90
              }
            },
            player2: {
              position: 58,
              stats: {
                atq: 10,
                def: 90
              }
            },
            player3: {
              position: 38,
              stats: {
                atq: 10,
                def: 90
              }
            },
            player4: {
              position: 17,
              stats: {
                atq: 10,
                def: 90
              }
            },
            player5: {
              position: 77,
              stats: {
                atq: 10,
                def: 90
              }
            },
            player6: {
              position: 36,
              stats: {
                atq: 10,
                def: 90
              }
            },
            player7: {
              position: 56,
              stats: {
                atq: 10,
                def: 90
              }
            },
            player8: {
              position: 15,
              stats: {
                atq: 10,
                def: 90
              }
            },
            player9: {
              position: 75,
              stats: {
                atq: 10,
                def: 90
              }
            },
            player10: {
              position: 32,
              stats: {
                atq: 10,
                def: 90
              }
            },
            player11: {
              position: 52,
              stats: {
                atq: 10,
                def: 90
              }
            },
          }
        },
        playingUser: 1
      }
    },
    methods: {
      ...Vuex.mapActions([
        'createEvent'
      ]),

      shoot() {
        if (this.checkIfPlayer() === false) {
          this.createEvent('Impossible de tirer sans joueur')
          return false
        }
        this.checkIfGoal();
        this.createTerrain(this.ball.position, this.User1.players, this.User2.players)
      },

      /*createEvent(description){
       const event = {
       id: Math.floor(Math.random() * 1000000000),
       description: description
       }
       this.events.push(event)
       },*/

      checkIfGoal(){
        let posTarget = this.playingUser === 1 ? 41 : 49;
        let distanceToTarget;
        ( this.playingUser === 1 ) ? posTarget = 41 : posTarget = 49;
        distanceToTarget = posTarget - this.ball.position;

        let resultShoot = Math.abs(Math.random() * 100);
        if (resultShoot >= 80) { // but
          if (this.playingUser === 1) {
            this.User1.score++
            store.dispatch('createEvent', 'GOOOOAAAAL')
            this.playingUser = 2
          } else {
            this.User2.score++
            store.dispatch('createEvent', 'GOOOOAAAAL')
            this.playingUser = 1
          }
          this.ball.position = 45

        } else if (resultShoot > 30 && resultShoot < 80) { // 6 metres
          if (this.playingUser === 1) {
            this.ball.position = 41
            store.dispatch('createEvent', '6 mètres')
            this.playingUser = 2
          } else {
            this.ball.position = 49
            store.dispatch('createEvent', '6 mètres')
            this.playingUser = 1
          }
        } else { //corner
          if (this.playingUser === 1) {
            this.ball.position = 71
            store.dispatch('createEvent', 'corner')
          } else {
            this.ball.position = 19
            store.dispatch('createEvent', 'corner')
          }
        }
      },

      checkIfPlayer(){
        if (this.playingUser === 1) {
          let result = _.findKey(this.User1.players, {'position': this.ball.position});
          if (result === undefined) {
            return false
          } else {
            return true
          }
        } else {
          let result = _.findKey(this.User2.players, {'position': this.ball.position});
          if (result === undefined) {
            return false
          } else {
            return true
          }
        }

      },

      checkIfEnnemyPlayer(){
        if (this.playingUser === 1) {
          let result = _.findKey(this.User2.players, {'position': this.ball.position});
          if (result === undefined) {
            return false
          } else {
            return this.User2.players[result]
          }
        } else {
          let result = _.findKey(this.User1.players, {'position': this.ball.position});
          if (result === undefined) {
            return false
          } else {
            return this.User1.players[result]
          }
        }
      },

      pass(cible) {
        this.ball.position = cible;
        this.createTerrain(cible, this.User1.players, this.User2.players)
      },

      dribble() {
        if (this.checkIfPlayer() === false) {
          store.dispatch('createEvent', 'Impossible de dribbler sans joueur')
          return false
        }
        this.movePlayer()

        var posBallon = this.ball.position;
        //posBallon = this.checkLimiteTerrainBallon(posBallon);
        posBallon = this.tryDribble(posBallon)
        this.ball.position = posBallon
        this.createTerrain(this.ball.position, this.User1.players, this.User2.players)
      },

      movePlayer(){
        let posBallon = this.ball.position;

        if (this.playingUser === 1) {
          let joueur = _.findKey(this.User1.players, {'position': posBallon});
          if (joueur === undefined) {
            return false
          } else {
            this.User1.players[joueur].position--
            return true
          }
        } else {
          let joueur = _.findKey(this.User2.players, {'position': posBallon});
          if (joueur === undefined) {
            return false
          } else {
            this.User2.players[joueur].position++
            return true
          }
        }

      },

      tryDribble(posBallon){
        // on regarde si un joueur adverse est situé sur la meme case
        this.checkIfEnnemyPlayer()
        // si oui on calcule si le dribble est réussi
        // si non le dribble est réussi


        (this.playingUser === 1) ? posBallon-- : posBallon++;
        this.createEvent('Dribble réussi')
        this.events.push(goalEvent)
        return posBallon
      },

      createTerrain(posBallon, posJoueursUser1, posJoueursUser2) {
        this.terrain = [];
        for (let y = 1; y <= this.hTerrain; y++) {
          for (let x = 1; x <= this.wTerrain; x++) {
            const jsonData = {
              name: '',
              isBallon: 0,
              isPlayer: 0,
              user1: {
                player: {},
                isPlayer: 0
              },
              user2: {
                player: {},
                isPlayer: 0
              }
            };

            jsonData.name = '' + x.toString() + y.toString() + '';

            if (posBallon.toString() === x.toString() + y.toString()) {
              jsonData.isBallon = 1
            } else {
              jsonData.isBallon = 0
            }

            let numberCurrentCell = x * 10 + y;

            let posJoueurUser1 = _.findKey(posJoueursUser1, {'position': numberCurrentCell});
            let posJoueurUser2 = _.findKey(posJoueursUser2, {'position': numberCurrentCell});
            if (posJoueurUser1 !== undefined) {
              jsonData.user1.player = numberCurrentCell;
              jsonData.user1.isPlayer = 1;
              jsonData.isPlayer = 1
            }
            if (posJoueurUser2 !== undefined) {
              jsonData.user2.player = numberCurrentCell;
              jsonData.user2.isPlayer = 1;
              jsonData.isPlayer = 1
            }
            this.terrain.push(jsonData);
          }
        }
      },

      test(value) {
        this.checkIfPlayer()
        this.createTerrain(this.ball.position, this.User1.players, this.User2.players)
      },

      createBallon(posBallon) {
        this.ball.position = posBallon;
      },

      checkLimiteTerrainBallon(positionBallon) {
        switch (positionBallon) {
          default :
            return positionBallon
            break;
          case 50:
            return 44
            this.changePlayingUser()
            break;
          case 49:
            this.shoot()
            break;
        }
      },

      changePlayingUser(){
        if (this.playingUser === 1) {
          this.playingUser = 2
        } else {
          this.playingUser = 1
        }
      },

      reverseUserPlayers(players){
        for (const p in players) {
          let player = players[p]
          player.position = this.reversePosition(player.position)
        }
        return players
      },

      reversePosition(position){
        let positionVerticale = parseInt(position.toString().substr(1, 1))
        let positionHorizontale = parseInt(position.toString().substr(0, 1)) * 10
        positionVerticale = Math.abs(positionVerticale - 10)
        position = positionHorizontale + positionVerticale
        return position
      }
    },
    created() {
      this.User2.players = this.reverseUserPlayers(this.User2.players)
      this.createTerrain(this.ball.position, this.User1.players, this.User2.players);
    },
    computed: {
      ...Vuex.mapGetters(['events'])
    }
  }
</script>


<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  .cell {
    display: block;
    background-color: #23BF4B;
    background-repeat: no-repeat;
    width: 49px;
    height: 49px;
    float: left;
    border: 1px solid white;
  }

  .cliquable {
    cursor: pointer;
  }

  .isBallon {
    justify-content: center;
    cursor: pointer;
  }

  .isBallon1joueur {
    background-image: url("./../assets/ball24.png");
  }

  .isBallon2joueur {
    background-image: url("./../assets/ball24.png");
  }

  .terrain {
    width: 400px;
  }

  .user1 {
    justify-content: center;
    margin-top: 20%; /*temp*/
  }

  .user2 {
    justify-content: center;
    transform: rotate(180deg);
  }
</style>
