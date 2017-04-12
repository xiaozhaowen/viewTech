function getSourceArray() {
    // return [30, 12, 100, 88, 40, 40, 5, 75, 2];
    return [42, 20, 17, 27, 13, 8, 17, 48];
}


//---------------------------------直接插入-------------------------------------

function directInsertSort() {
    var arr =getSourceArray();
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            var temp = arr[i];
            var j = 0;
            for (j = i - 1; j >= 0 && temp < arr[j]; j--) {
                arr[j + 1] = arr[j];
            }
            arr[j + 1] = temp;
        }
    }
    console.log(arr);
}
directInsertSort();
//------------------------------简单选择----------------------------------------

function simpleSelectSort() {
    var arr =getSourceArray();
    for(var i=0;i<arr.length;i++){
        var min = arr[i];
        var minIndex =i;
        for(var j=i;j<arr.length;j++){
            if(arr[j]<min){
                min=arr[j];
                minIndex=j;
            }
        }
        var temp = arr[i];
        arr[i]= arr[minIndex];
        arr[minIndex]= temp;
    }
    console.log(arr);
}
simpleSelectSort();

//----------------------------冒泡------------------------------------------


function  getSortResult() {
    var baseArr =['A','B','C','D','E','F','G',"H"],
        subArr =[7,5,3,2,6,1,4,9];

    var len =baseArr.length;
    var temp=[];
    for(var i=0;i<len;i++){
        var ele = i + subArr[i];
        temp.push({
            num:ele,
            str:baseArr[i]
        });
    }

    bubbleSort(temp);
}


function bubbleSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = arr.length - 1; j > i; j--) {
            var after = arr[j], pre = arr[j - 1];
            if (after < pre) {
                swap(arr, j, j - 1);
            }
        }
    }
}

function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

var bubbleArray = getSourceArray();
bubbleSort(bubbleArray);
console.log(bubbleArray);

//--------------------------------快排--------------------------------------
console.log('--------------------------------------');

function quickSort(arr, start, end) {
    var key = arr[start];
    var low = start, high = end;
    while (low < high) {
        while (low < high && arr[high] >= key) {
            high--;
        }
        if (low < high) {
            var temp = arr[high];
            arr[high] = arr[low];
            arr[low] = temp;
            low++;
        }

        while (low < high && arr[low] <= key) {
            low++;
        }
        if (low < high) {
            var temp = arr[high];
            arr[high] = arr[low];
            arr[low] = temp;
            high--;
        }
    }
    if (low > start) {
        quickSort(arr, start, low - 1);
    }
    if (high < end) {
        quickSort(arr, low + 1, end);
    }
}
var quickArray = getSourceArray();
quickSort(quickArray, 0, quickArray.length - 1);
console.log(quickArray);