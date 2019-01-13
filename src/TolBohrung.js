import Grundtoleranzgrad from './Grundtoleranzgrad'
import TgBohrung from './TgBohrung.js'

export default class TolBohrung {

    constructor(nennmass, tgBohrung, grundTg) {
        this.nennmass = nennmass
        this.tgBohrung = new TgBohrung(nennmass, tgBohrung)
        this.grundTg = new Grundtoleranzgrad(nennmass, grundTg)
    }

    getOberesAbmass() {
        let ei = ['C','D','E','F','G','H']
        if(ei.includes(this.tgBohrung.toleranzgrad)){
            return this.tgBohrung.getToleranzgrad() + this.grundTg.getGrundtoleranzgrad()
        }
        return this.tgBohrung.getToleranzgrad()
    }

    getUnteresAbmass() {
        let ei = ['C','D','E','F','G','H']
        if(ei.includes(this.tgBohrung.toleranzgrad)){
            return this.tgBohrung.getToleranzgrad()
        }
        return this.tgBohrung.getToleranzgrad() - this.grundTg.getGrundtoleranzgrad()
    }

    getHoechstmass() {
        return this.nennmass + this.getOberesAbmass()/1000
    }

    getMindestmass() {
        return this.nennmass + this.getUnteresAbmass()/1000
    }

    getMasstoleranz() {
        return this.getOberesAbmass() - this.getUnteresAbmass()
    }

    get(){
        return {
            IT: this.grundTg.getGrundtoleranzgrad(),
            EI: this.tgBohrung.getToleranzgrad(),
            ES: this.getOberesAbmass(),
            EI: this.getUnteresAbmass(),
            Gob:this.getHoechstmass(),
            Gub:this.getMindestmass(),
            Tb: this.getMasstoleranz()
        }
    }


}