<template>

<div>
    <div v-for="(item, index) in savedFits" class="flex">
        <div>
            <h4>Nennmass</h4>
            {{ item.fit.basicSize }} mm
            <h4>{{ item.fitType | fitTypeDe }}</h4>
            <span v-if="item.fitType != 'transition'">max. Spiel</span>
            <span v-if="item.fitType == 'transition'">max. Übermass</span> 
            {{ Math.abs(item.maxDiff) }}mm<br>
            <span v-if="item.fitType == 'clearance'">min. Spiel</span>
            <span v-if="item.fitType == 'interference'">max. Übermass</span>
            <span v-if="item.fitType == 'transition'">min. Übermass</span> 
            {{ Math.abs(item.minDiff) }}mm
        </div>
        <div>
            <h4>Bohrung</h4>
            <div class="flex">
                <div>
                    {{ item.fit.hole.upperDeviation }}mm<br>
                    {{ item.fit.hole.lowerDeviation }}mm
                </div>
                <div>
                    {{ item.selectedHole }}
                </div>
            </div>
            <h4>Welle</h4>
            <div class="flex">
                <div>
                    {{ item.fit.shaft.upperDeviation }}mm<br>
                    {{ item.fit.shaft.lowerDeviation }}mm
                </div>
                <div>
                    {{ item.selectedShaft }}
                </div>
            </div>
        </div>
        <div>
            <h4 @click="savedFits.splice(index,1)">Entfernen</h4>
        </div>
    </div>
</div>

</template>

<script>
    export default {
        props: ['savedFits'],
    }
</script>