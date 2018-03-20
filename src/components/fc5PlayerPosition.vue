<template>
    <span :class="classObject">{{ position }}</span>
</template>

<script>
    export default {
        name: "fc5playerposition",
        props: ['position'],
        computed: {
            classObject: function () {
                const atq = 'bold red'
                const def = 'bold green'
                const spe = 'bold blue'
                const gk = 'bold yellow'
                const atqList = ['ST', 'LW', 'RW', 'WF', 'CF']
                const defList = ['LB', 'CB', 'RB', 'SW', 'RWB', 'LWB']
                const speList = ['CM', 'CDM', 'LM', 'RM', 'CAM', 'CDM', 'DM', 'AM']

                if(atqList.includes(this.position)) { return atq }
                if(defList.includes(this.position)) { return def }
                if(speList.includes(this.position)) { return spe }
                return gk
            }
        }
    }
</script>

<style scoped>

</style>
