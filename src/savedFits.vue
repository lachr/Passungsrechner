<template>

<div>
    <div v-for="item in savedFits" class="flex">
        <div>
            <h4>Nennmass</h4>
            {{ item.fit.basicSize }} mm
            <h4>{{ item.fitType | fitTypeDe }}</h4>
            max. Spiel! {{ item.maxDiff }}mm<br>
            min. Spiel! {{ item.minDiff }}mm
        </div>
        <div>
            <h4>Bohrung</h4>
            <div class="flex">
                <div>
                    {{ item.fit.hole.upperDeviation }}mm<br>
                    {{ item.fit.hole.lowerDeviation }}mm
                </div>
                <div>
                    (H7)!!
                </div>
            </div>
            <h4>Welle</h4>
            <div class="flex">
                <div>
                    {{ item.fit.shaft.upperDeviation }}mm<br>
                    {{ item.fit.shaft.lowerDeviation }}mm
                </div>
                <div>
                    (H7)!!
                </div>
            </div>
        </div>
        <div>
            <h4>Entfernen</h4>
        </div>
    </div>
</div>

</template>

<script>
    export default {
        props: ['savedFits'],
    }
</script>