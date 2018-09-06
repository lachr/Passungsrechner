<template>

<div class="md:flex items-center">
    <svg :width="width" :height="height" class="mb-2 md:mr-4">
        <rect :x="width*0.1" :y="holeTopY" :width="width*0.4" :height="holeHeight" fill="#BCDEFA" />
        <rect :x="width*0.5" :y="shaftTopY" :width="width*0.4" :height="shaftHeight" fill="#B2B7FF" />
        <line x1="0" :y1="height*0.5" :x2="width" :y2="height*0.5" style="stroke:#22292F;stroke-width:2" />
    </svg>

    <svg width="180" height="50">
        <rect x="0" y="0" width="15" height="15" fill="#BCDEFA" />
        <text x="20" y="15" fill="#8795a1" font-size="15">Toleranzfeld Bohrung</text>
        <rect x="0" y="30" width="15" height="15" fill="#B2B7FF" />
        <text x="20" y="45" fill="#8795a1" font-size="15">Toleranzfeld Welle</text>
    </svg>
</div>

</template>

<script>
    export default {
        props: ['fit'],
        data: function () {
            return {
                height: 100,
                width: 100
            }
        },
        methods: {
            getMaxDiff: function (a, b, c, d) {
                return Math.max(a,b,c,d)-Math.min(a,b,c,d);
            }
        },
        computed: {
            scale: function () {
                var maxDiff = this.getMaxDiff(
                    this.fit.hole.upperDeviation,
                    this.fit.hole.lowerDeviation,
                    this.fit.shaft.upperDeviation,
                    this.fit.shaft.lowerDeviation
                );
                return 1+(this.height-(maxDiff))/(maxDiff);
            },
            holeTopY: function () {
                return Math.round(this.height/2-this.fit.hole.upperDeviation*this.scale);
            },
            holeHeight: function () {
                return Math.round((this.fit.hole.upperDeviation-this.fit.hole.lowerDeviation)*this.scale);
            },
            shaftTopY: function () {
                return Math.round(this.height/2-this.fit.shaft.upperDeviation*this.scale);
            },
            shaftHeight: function () {
                return Math.round((this.fit.shaft.upperDeviation-this.fit.shaft.lowerDeviation)*this.scale);
            },
        }
    }
</script>