<template>

<div>
    <div v-for="(item, index) in savedFits" class="inline-flex border-b w-full">
        <div class="p-2 flex-1">
            <h4>{{ item.fitType | fitTypeDe }}</h4>
            {{ Math.abs(item.maxDiff) }}
            <span class="text-grey-dark" v-if="item.fitType != 'transition'">max. Spiel</span>
            <span class="text-grey-dark" v-if="item.fitType == 'transition'">max. Übermass</span> 
            <br>
            {{ Math.abs(item.minDiff) }}
            <span class="text-grey-dark" v-if="item.fitType == 'clearance'">min. Spiel</span>
            <span class="text-grey-dark" v-if="item.fitType == 'interference'">max. Übermass</span>
            <span class="text-grey-dark" v-if="item.fitType == 'transition'">min. Übermass</span> 
        </div>
        <div class="p-2 flex-1">
            <h4 class="text-grey-dark">Bohrung</h4>
            <div class="flex">
                <span class="text-lg pt-2 pr-1">
                    {{ item.fit.basicSize }}
                    <span class="text-grey-dark">{{ item.selectedHole }}</span>
                </span>
                <span class="text-sm">
                    {{ item.fit.hole.upperDeviation }}<br>
                    {{ item.fit.hole.lowerDeviation }}
                </span>
            </div>
        </div>
        <div class="p-2 flex-1">
            <h4 class="text-grey-dark">Welle</h4>
            <div class="flex">
                <span class="text-lg pt-2 pr-1">
                    {{ item.fit.basicSize }}
                    <span class="text-grey-dark">{{ item.selectedShaft }}</span>
                </span>
                <span class="text-sm">
                    {{ item.fit.shaft.upperDeviation }}<br>
                    {{ item.fit.shaft.lowerDeviation }}
                </span>
            </div>
        </div>
        <div class="py-2 self-center">
            <button @click="savedFits.splice(index,1)" class="border rounded border-black py-1 px-2 hover:bg-black hover:text-white">x</button>
        </div>
    </div>
</div>

</template>

<script>
    export default {
        props: ['savedFits'],
    }
</script>