class Triangle {
    constructor(side1, side2, side3){
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }

    static getValidTriangles(...args){
        let valid = [];
        args.forEach(arg => {
            if(arg.hasValidSideLengths()){
                valid.push(arg);
            }
        })
        return valid;
    }

    getPerimeter = () => this.side1 + this.side2 + this.side3;

    hasValidSideLengths(){
        if(this.side1 + this.side2 > this.side3 && this.side1 + this.side3 > this.side2 && this.side2 + this.side3 > this.side1){
            return true;
        } else {
            return false;
        }
    }

    validate(){
        if(this.hasValidSideLengths()){
            this.isValid = true;
        } else {
            this.isValid = false;
        }
    }
}

class Scalene extends Triangle {
    constructor(side1, side2, side3){
        super(side1, side2, side3);
        this.isValidTriangle = this.hasValidSideLengths();
    }

    isScalene(){
        if(this.isValidTriangle && this.side1 !== this.side2 && this.side1 !== this.side3 && this.side2 !== this.side3){
            return true;
        } else {
            return false;
        }
    }

    validate(){
        if(this.isScalene()){
            this.isValidScalene = true;
        } else {
            this.isValidScalene = false;
        }
    }
}

class Isoceles extends Triangle {
    constructor(side1, side2, side3){
        super(side1, side2, side3);
        this.isValidTriangle = this.hasValidSideLengths();
    }

    isIsoceles(){
        if(this.isValidTriangle && ( ( this.side1 === this.side2 && this.side1 !== this.side3 ) || ( this.side1 === this.side3 && this.side1 !== this.side2 ) || ( this.side2 === this.side3 && this.side2 !== this.side1 ) ) ){
            return true;
        } else {
            return false;
        }
    }

    validate(){
        if(this.isIsoceles()){
            this.isValidIsoceles = true;
        } else {
            this.isValidIsoceles = false;
        }
    }
}

module.exports = { Triangle, Scalene, Isoceles };
