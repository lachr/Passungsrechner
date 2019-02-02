window.Vue = require('vue')
Vue.config.devtools = true

import Passung from './components/Passung.js'
import Toleranz from './components/Toleranz.js'
import { throws } from 'assert';

Vue.component('illustration', require('./components/illustration.vue').default)
Vue.component('savedFits', require('./components/savedFits.vue').default)
Vue.component('selectFit', require('./components/selectFit.vue').default)

// import isoTolerances from './tolerances.json'

// try {  
// }
// catch (e) {
//     console.log(e);
// }



const app = new Vue({
    el: '#app',
    data: {
        form: {
            nennmass: 30.0,
            toleranzklasseBohrung: 'H8',
            toleranzklasseWelle: 'f7'
        },
        savedFits: [],
        selectedHole: 'H8',
        selectedShaft: 'h9',
    },
    computed: {
        abmassBohrung: function () {
            return new Toleranz(this.form.nennmass,this.form.toleranzklasseBohrung).getAbmass()
        },
        abmassWelle: function () {
            return new Toleranz(this.form.nennmass,this.form.toleranzklasseWelle).getAbmass()
        },
        toleranzklassenBohrung: function () {
            return new Toleranz(this.form.nennmass, '').getToleranzklassen().filter(function(element) {
                return element.toleranzklasse == element.toleranzklasse.toUpperCase()
            }).map(function (element) {
                return element.toleranzklasse
            })
        },
        toleranzklassenWelle: function () {
            return new Toleranz(this.form.nennmass, '').getToleranzklassen().filter(function(element) {
                return element.toleranzklasse == element.toleranzklasse.toLowerCase()
            }).map(function (element) {
                return element.toleranzklasse
            })
        },
        passung: function () {
            return new Passung(new Toleranz(this.form.nennmass, this.form.toleranzklasseBohrung).getAbmass(),new Toleranz(this.form.nennmass, this.form.toleranzklasseWelle).getAbmass()).get()
        },
    },
    methods: {
        
        saveFit: function () {
            this.savedFits.push({
                passungstyp: this.passung.passungsart,
                hoechstpassung: this.passung.Po,
                mindestpassung: this.passung.Pu,
                nennmass: this.form.nennmass,
                bohrung :{
                    tk: this.form.toleranzklasseBohrung,
                    es: this.abmassBohrung.es,
                    ei: this.abmassBohrung.ei
                },
                welle :{
                    tk: this.form.toleranzklasseWelle,
                    es: this.abmassWelle.es,
                    ei: this.abmassWelle.ei
                }
            });
        },
        deleteFit: function(fit) {
        }
    }
});