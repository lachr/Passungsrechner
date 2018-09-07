<template>

<div class="">
    <div v-show="step == 0" class="">
        <div v-for="(fit, index) in fits" class="bg-white rounded shadow border border-grey-light p-4 mb-2">
            <span class="cursor-pointer text-purple-dark text-lg" @click="setFit(index)">{{ index }}</span>
        </div>
    </div>

    <div v-show="step == 1" class="bg-white rounded shadow border border-grey-light">
        <h2 @click="back" class="font-thin cursor-pointer border-b p-4">{{ fit }}</h2>
        <div v-for="(fitType, index) in fits[fit]" class="px-4 py-2 bg-grey-lightest border-b">
            <span class="cursor-pointer text-purple-dark" @click="setFitType(index)">{{ fitType.title }}</span>
        </div>
    </div>

    <div v-if="step == 2" class="bg-white rounded shadow border border-grey-light">
        <h2 @click="back" class="cursor-pointer font-thin pt-4 pb-1 px-4">{{ fit }}</h2>
        <h3 @click="back" class="cursor-pointer font-thin border-b pb-2 px-4 text-grey-darker">{{ fits[fit][fitType].title }}</h3>
        <div class="bg-indigo-lightest p-4 flex justify-between">
            <span class="leading-normal text-sm font-mono text-indigo-darkest">{{ fits[fit][fitType].description }}</span>
            <div>
                <span v-for="fit in fits[fit][fitType].fits" class="inline-block rounded-full font-mono bg-indigo px-2 py-1 text-sm text-indigo-lightest font-bold  mr-2 mb-2">
                    {{ fit }}
                </span>
            </div>
        </div>
    </div>
    <div v-show="step > 0" class="p-4">

        <span class="text-purple-dark text-sm curosr-pointer" @click="back">Zurück</span>
    </div>

</div>

</template>

<script>
    import fits from './fits.json';
    export default {
        data: function () {
            return {
                step: 0,
                fit: '',
                fits: fits,
                fitType: 0
            }
        },
        methods: {
            setFit: function (fit) {
                this.fit = fit;
                this.step++;
            },
            setFitType: function (fit) {
                this.fitType = fit;
                this.step++;
            },
            back: function () {
                if(this.step > 0){
                    this.step--;
                }
            }
        }
    }
</script>