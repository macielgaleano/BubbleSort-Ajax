let array = [7, 3, 2, 8, 20, 15, 30];

function hackAcademy(array) {
    let newArray = new Array();
    for (let index = 0; index < array.length; index++) {

        if (index % 2 == 0) {
            newArray.push(Math.pow(array[index], 2));
        }

    }

    function bubble(arr) {
        var len = arr.length;

        for (var i = 0; i < len; i++) {
            for (var j = 0; j < len - i - 1; j++) { // this was missing
                if (arr[j] > arr[j + 1]) {
                    // swap
                    var temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
        return arr;
    }

    newArray = bubble(newArray);

    return newArray;
}

let newArray = hackAcademy(array);