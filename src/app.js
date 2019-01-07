window.Vue = require('vue')
Vue.config.devtools = true

Vue.component('illustration', require('./illustration.vue'))
Vue.component('fitType', require('./fitType.vue'))
Vue.component('savedFits', require('./savedFits.vue'))
Vue.component('selectFit', require('./selectFit.vue'))

import isoTolerances from './tolerances.json'
import Grundtoleranzgrad from './Grundtoleranzgrad.js'
import TgBohrung from './TgBohrung.js'
import TgWelle from './TgWelle.js'

var welle = new TgWelle(100,'e')
console.log(welle.getNennmassbereiche());
console.log(welle.getNennmassbereich());
console.log(welle.getGrundtoleranzFromNennmassbereich());
console.log(welle.getToleranzgrad());
// var bohrung = new TgBohrung(100,'F')
// console.log(bohrung.getNennmassbereiche());
// console.log(bohrung.getNennmassbereich());
// console.log(bohrung.getGrundtoleranzFromNennmassbereich());
// console.log(bohrung.getToleranzgrad());
// var tol1 = new Grundtoleranzgrad(100,7)
// console.log(tol1.getNennmassbereiche());
// console.log(tol1.getNennmassbereich());
// console.log(tol1.getGrundtoleranzgradeFromNennmassbereich());
// console.log(tol1.getGrundtoleranzgrad());

Vue.filter('fitTypeDe', function (value) {
    switch(value)
    {
        case "clearance":
            return "Spielpassung";
        case "transition":
            return "Presspassung";
        case "interference":
            return "Übergangspassung";
        default:
            return "";
    }
});


const app = new Vue({
    el: '#app',
    data: {
        isoTolerances: isoTolerances,
        fit: {
            basicSize: 30.0, // Nennmass
            hole: {
                upperDeviation: 0.033,  //Oberes Abmass
                lowerDeviation: 0,  //Unteres Abmass
            },
            shaft: {
                upperDeviation: 0,  //Oberes Abmass
                lowerDeviation: -0.036,  //Unteres Abmass
            }
        },
        savedFits: [],
        selectedHole: 'H8',
        selectedShaft: 'h9',
    },
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
    },
    methods: {
        updateHole: function () {
            var tolClass = this.isoTolerances.hole[this.selectedHole];
            var range = this.getRange(tolClass);
            this.fit.hole.upperDeviation = parseFloat(tolClass[range].upper/1000).toFixed(4);
            this.fit.hole.lowerDeviation = parseFloat(tolClass[range].lower/1000).toFixed(4);
        },
        updateShaft: function () {
            var tolClass = this.isoTolerances.shaft[this.selectedShaft];
            var range = this.getRange(tolClass);
            this.fit.shaft.upperDeviation = parseFloat(tolClass[range].upper/1000).toFixed(4);
            this.fit.shaft.lowerDeviation = parseFloat(tolClass[range].lower/1000).toFixed(4);
        },
        getRange: function (data) {
            console.log(data);
            for(var i in data){
                if(parseFloat(this.fit.basicSize) <= parseFloat(i)) {
                    console.log('return i', i);
                    return i;
                }
            }
        },
        saveFit: function () {
            this.savedFits.push({
                fitType: this.fitType,
                fit: JSON.parse(JSON.stringify(this.fit)),
                selectedHole: this.selectedHole,
                selectedShaft: this.selectedShaft,
                maxDiff: this.maxDiff,
                minDiff: this.minDiff
            });
        },
        deleteFit: function(fit) {

        }
    }
});