window.Vue = require('vue')
Vue.config.devtools = true

import Passung from './components/Passung.js'
import Toleranz from './components/Toleranz.js'

Vue.component('illustration', require('./components/illustration'))
Vue.component('savedFits', require('./components/savedFits'))
Vue.component('selectFit', require('./components/selectFit'))

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
            toleranzklasseBohrung: 'H7',
            toleranzklasseWelle: 'p6'
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
                passung
            });
        },
        deleteFit: function(fit) {
        }
    }
});