function getAbsDifference(val1, val2) {
    console.log("Calculator.getAbsDifference");
    if (val2 > val1) {
        return val2 - val1;
    }
    else if (val2 === val1) {
        return 0.0;
    }
    else {
        return val1 - val2; 
    }
}

class Hypotenuse {
    constructor(x1 = 0.0, x2 = 0.0, y1 = 0.0, y2 = 0.0) {
        this.x1 = x1;
        this.x2 = x2;
        this.y1 = y1;
        this.y2 = y2;
    }

    resetValues() {
        this.x1 = 0.0;
        this.x2 = 0.0;
        this.y1 = 0.0;
        this.y2 = 0.0;
    }

    x_dist() { 
        return Math.abs(this.x2 - this.x1);
        
    }
    y_dist() {
        return Math.abs(this.y2 - this.y1);
    }

    GetHypotenuse()
    {
        const xd = this.x_dist(); 
        const yd = this.y_dist(); 
        return Math.sqrt((xd * xd) + (yd * yd));
    }

    GetInRange(range)
    {
        return (range >= this.GetHypotenuse()); 
    }

}

export { Hypotenuse, getAbsDifference }