<template>

<div>
    <div v-for="(item, index) in savedFits" class="inline-flex w-full border-b px-4">
        <div class="p-2 flex-1">
            <h4>{{ item.passungstyp }}</h4>
            {{ Math.abs(item.hoechstpassung) }}
            <span class="text-grey-dark">Höchstpassung</span>
    
            <br>
            {{ Math.abs(item.mindestpassung) }}
            <span class="text-grey-dark">Mindestpassung</span>
    
        </div>
        <div class="p-2 flex-1">
            <h4 class="text-purple-dark font-normal text-sm">Bohrung</h4>
            <div class="flex">
                <span class="text-lg pt-2 pr-1">
                    {{ item.nennmass }}
                    <span class="text-grey-dark">{{ item.bohrung.tk }}</span>
                </span>
                <span class="text-sm">
                    {{ (item.bohrung.es/1000).toFixed(3) }}<br>
                    {{ (item.bohrung.ei/1000).toFixed(3) }}
                </span>
            </div>
        </div>
        <div class="p-2 flex-1">
            <h4 class="text-purple-dark font-normal text-sm">Welle</h4>
            <div class="flex">
                <span class="text-lg pt-2 pr-1">
                    {{ item.nennmass }}
                    <span class="text-grey-dark">{{ item.welle.tk }}</span>
                </span>
                <span class="text-sm">
                    {{ (item.welle.es/1000).toFixed(3) }}<br>
                    {{ (item.welle.ei/1000).toFixed(3) }}
                </span>
            </div>
        </div>
        <div class="py-2 self-center">
            <button @click="savedFits.splice(index,1)" class="border rounded border-purple-dark py-1 px-2 text-purple-dark hover:bg-purple-dark hover:text-white">x</button>
        </div>
    </div>
</div>

</template>

<script>
    export default {
        props: ['savedFits'],
    }
</script>