<template>
    <g>
        <polygon :points="points"></polygon>
        <circle cx="100" cy="100" r="80"></circle>
        <axis-label
            v-for="(stat, index, key) in stats"
            :stat="stat"
            :index="index"
            :total="stats.length"
            :key="key">
        </axis-label>
    </g>
</template>

<script>

    export default {
        name: "fc5svggraph",
        props: ['stats'],
        data(){
            return{

            }
        },
        computed: {
            // a computed property for the polygon's points
            points: function () {
                let total = this.stats.length
                return this.stats.map(function (stat, i) {
                    let point = valueToPoint(stat.value, i, total)
                    return point.x + ',' + point.y
                }).join(' ')
            }

        },
        components: {
            // a sub component for the labels
            'axis-label': {
                props: {
                    stat: Object,
                    index: Number,
                    total: Number
                },
                template: '<text :x="point.x" :y="point.y">{{stat.label}}</text>',
                computed: {
                    point: function () {
                        return valueToPoint(
                            +this.stat.value + 10,
                            this.index,
                            this.total
                        )
                    }
                }
            }
        }
    }
    function valueToPoint (value, index, total) {
        let x = 0
        let y = -value * 0.8
        let angle = Math.PI * 2 / total * index
        let cos = Math.cos(angle)
        let sin = Math.sin(angle)
        let tx = x * cos - y * sin + 100
        let ty = x * sin + y * cos + 100
        return {
            x: tx,
            y: ty
        }
    }
</script>

<style scoped>
    body {
        font-family: Roboto, sans-serif;
    }

    polygon {
        fill: #5DB55B;
        opacity: 1;
    }

    circle {
        fill: transparent;
        stroke: #e6e5e5;
    }

    text {
        font-family: Roboto, sans-serif;
        font-size: 10px;
        fill: #595555;
    }

    label {
        display: inline-block;
        margin-left: 10px;
        width: 20px;
    }

    #raw {
        position: absolute;
        top: 0;
        left: 300px;
    }
</style>
