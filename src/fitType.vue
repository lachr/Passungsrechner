<template>

<div>
    <div v-if="fitType=='clearance'">
        <div class="text-lg">Spielpassung</div>
        <div class="text-sm text-grey-light mb-4">Passungsart</div>
        <div class="text-lg">{{ Math.abs(maxDiff) }} mm</div>
        <div class="text-sm text-grey-light mb-4">max. Spiel</div>
        <div class="text-lg">{{ Math.abs(minDiff) }} mm</div>
        <div class="text-sm text-grey-light">min. Spiel</div>
    </div>
    <div v-if="fitType=='transition'" class="text-lg">
        <div class="text-lg">Presspassung</div>
        <div class="text-sm text-grey-light mb-4">Passungsart</div>
        <div class="text-lg">{{ Math.abs(maxDiff) }} mm</div>
        <div class="text-sm text-grey-light mb-4">max. Übermass</div>
        <div class="text-lg">{{ Math.abs(minDiff) }} mm</div>
        <div class="text-sm text-grey-light">min. Übermass</div>
    </div>
    <div v-if="fitType=='interference'" class="text-lg">
        <div class="text-lg">Übergangspassung</div>
        <div class="text-sm text-grey-light mb-4">Passungsart</div>
        <div class="text-lg">{{ Math.abs(maxDiff) }} mm</div>
        <div class="text-sm text-grey-light mb-4">max. Spiel</div>
        <div class="text-lg">{{ Math.abs(minDiff) }} mm</div>
        <div class="text-sm text-grey-light">max. Übermass</div>
    </div>
</div>

</template>

<script>
    export default {
        props: ['fit', 'fitType', 'maxDiff','minDiff']
    }
</script>