
export default class Passung {

    constructor(bohrung, welle) {
        this.nennmass = parseFloat(bohrung.nennmass)
        this.ES = parseInt(bohrung.es)
        this.EI = parseInt(bohrung.ei)
        this.es = parseInt(welle.es)
        this.ei = parseInt(welle.ei)
    }

    round(x) {
        return Number.parseFloat(x).toFixed(3)
    }
    
    get() {
        var result = {
            GoB: this.round(this.nennmass + this.ES/1000), // Höchstmass Bohrung
            GuB: this.round(this.nennmass + this.EI/1000), // Mindestmass Bohrung
            GoW: this.round(this.nennmass + this.es/1000), // Höchstmass Welle
            GuW: this.round(this.nennmass + this.ei/1000), // Mindestmass Welle
            TB: this.ES - this.EI,                         // Masstoleranz Bohrung
            TW: this.es - this.ei,                         // Masstoleranz Welle
            Po: this.round((this.ES - this.ei)/1000),      // Höchstpassung
            Pu: this.round((this.EI - this.es)/1000),      // Mindestpassung
            PT: this.round(((this.ES - this.EI) + (this.es - this.ei))/1000) // Passtoleranz
        }

        if(result.Po > 0 && result.Pu >= 0) {
            result.passungsart = 'Spielpassung'
        } else if(result.Po <= 0 && result.Pu < 0) {
            result.passungsart = 'Übermasspassung'
        } else {
            result.passungsart = 'Übergangspassung'
        }

        return result
    }
}