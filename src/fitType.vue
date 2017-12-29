<template>

<div>
    <div v-if="fitType=='clearance'">
        Spielpassung<br>
        maximales Spiel: {{ Math.abs(maxDiff) }}<br>
        minimales Spiel: {{ Math.abs(minDiff) }}
    </div>
    <div v-if="fitType=='transition'">
        Presspassung<br>
        maximales Übermass: {{ Math.abs(maxDiff) }}<br>
        minimales Übermass: {{ Math.abs(minDiff) }}
    </div>
    <div v-if="fitType=='interference'">
        Übergangspassung<br>
        Maximales Spiel: {{ Math.abs(maxDiff) }}<br>
        Maximales Übermass: {{ Math.abs(minDiff) }}
    </div>
    
    
</div>

</template>

<script>
    export default {
        props: ['fit'],
        computed: {
            fitType: function () {
                if(this.fit.hole.lowerDeviation - this.fit.shaft.upperDeviation >= 0) { return 'clearance'}
                if(this.fit.hole.upperDeviation - this.fit.shaft.lowerDeviation <= 0) { return 'transition'}
                return 'interference';
            },
            maxDiff: function () {
                return parseFloat(this.fit.hole.upperDeviation - this.fit.shaft.lowerDeviation).toFixed(4);
            },
            minDiff: function () {
                return parseFloat(this.fit.hole.lowerDeviation + this.fit.shaft.upperDeviation).toFixed(4);
            }
        }
    }
</script>