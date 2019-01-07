function sum(inputNum){
    if(typeof this.previosSum === 'undefined') {
        this.previosSum = 0;
    }
    if(typeof inputNum !== 'number') {
        return this.previosSum;
    }
    this.previosSum = this.previosSum + inputNum;
    return sum;
}
var result = sum(1)(2)(4)();
alert(result);