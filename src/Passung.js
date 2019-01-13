import TolBohrung from './TolBohrung.js'
import TolWelle from './TolWelle.js'

export default class Passung {

    constructor(nennmass, tgBohrung, grundTgBohrung, tgWelle, grundTgWelle) {
        this.nennmass = nennmass
        this.tolBohrung = new TolBohrung(nennmass, tgBohrung, grundTgBohrung)
        this.tolWelle = new TolWelle(nennmass, tgWelle, grundTgWelle)
    }

    get() {
        return {
            Hoechstpassung: this.tolBohrung.tgBohrung.getNennmassbereich(),
            Mindestpassung: this.tolBohrung.get()['Gub']-this.tolWelle.get()['Gow'],
            Passtoleranz: (this.tolBohrung.get()['Gob']-this.tolWelle.get()['Guw'])-(this.tolBohrung.get()['Gub']-this.tolWelle.get()['Gow'])
        }
    }
}