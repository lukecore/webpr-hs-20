Array.prototype.eq = function (arrayToCompare) {
    let isEqual = true;
    if (this.length !== arrayToCompare.length) {
        return false;
    }
    this.map((value, i) => {
        if (!(this[i] === arrayToCompare[i])) {
            isEqual= false;
        }
    })
    return isEqual;
};


const xs1_ = [1, 2, 3, 4, 5];
const ys1_ = [1, 2, 3, 4, 5];
const xs2_ = [1, 2, 3, 4, 5];
const ys2_ = [1, 2, 3, 4];
const xs3_ = [1, 2, 3, 4];
const ys3_ = [1, 2, 3, 4];
const xs4_ = [1, 2, 3, 4, 5, 6, 7];
const ys4_ = [1, 2, 3, 4, 5, 6, 7];
document.writeln(xs1_.eq(ys1_) && !xs2_.eq(ys2_) && xs3_.eq(ys3_) && !xs3_.eq(ys4_) && !xs4_.eq(ys3_));