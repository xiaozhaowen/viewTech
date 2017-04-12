/**
 * Created by knight on 17/3/2.
 */

Array.prototype.min = function () {
    var min = this[0];
    for(var i=0;i<this.length;i++){
        if(this[i]<min){
            min = this[i];
        }
    }
    return min;
};

var arr =[10,5,5,30];
var total =0;
var total2 =0;
for(var i in arr){
    if(arr.hasOwnProperty(i)){
        var x = parseInt(arr[i],10);
        total += parseInt(arr[i],10);
    }
}

for(var i=0;i<arr.length;i++){
    total2+=arr[i];
}


console.log(total);
console.log(total2);