import Grundtoleranzgrad from './components/Grundtoleranzgrad'
import TgWelle from './TgWelle.js'

export default class TolWelle {

    constructor(nennmass, tgWelle, grundTg) {
        this.nennmass = nennmass
        this.tgWelle = new TgWelle(nennmass, tgWelle)
        this.grundTg = new Grundtoleranzgrad(nennmass, grundTg)
    }

    getOberesAbmass() {
        let es = ['c','d','e','f','g','h']
        if(es.includes(this.tgWelle.toleranzgrad)){
            return this.tgWelle.getToleranzgrad()
        }
        return this.tgWelle.getToleranzgrad() + this.grundTg.getGrundtoleranzgrad()
    }

    getUnteresAbmass() {
        let es = ['c','d','e','f','g','h']
        if(es.includes(this.tgWelle.toleranzgrad)){
            return this.tgWelle.getToleranzgrad() - this.grundTg.getGrundtoleranzgrad()
        }
        return this.tgWelle.getToleranzgrad()
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
            EI: this.tgWelle.getToleranzgrad(),
            ES: this.getOberesAbmass(),
            EI: this.getUnteresAbmass(),
            Gow:this.getHoechstmass(),
            Guw:this.getMindestmass(),
            Tw: this.getMasstoleranz()
        }
    }


}