import toleranzen from '../data/tolerances.json';

export default class Toleranz {

    constructor(n, tk) {
        this.nennmass = parseFloat(n)
        this.toleranzklasse = tk
    }
    
    getToleranzklassen() {
        var result = []
        Object.keys(toleranzen).map(function(key, index) {
            if(toleranzen[key]['lowerlimit'] < this.nennmass && toleranzen[key]['upperlimit'] >= this.nennmass) {
                result.push(toleranzen[key])
            }
        }.bind(this));

        if(result == undefined){
            throw new RangeError('Nennmass ist ausserhalb des gültigen Bereichs (0<N<=400)')
        }

        return result
    }

    
    getAbmass() {
        var tmp = this.getToleranzklassen()
        var result
        Object.keys(tmp).map(function(key, index) {
            if(tmp[key]['toleranzklasse'] == this.toleranzklasse) {
                result = tmp[key]
                result.nennmass = this.nennmass
            }
        }.bind(this));

        if(result == undefined){
            throw new RangeError('Toleranzklasse nicht verfügbar')
        }

        return result
    }
}