function numbersOnly(arr){
    var newArr = [];
    for (var i=0; i<arr.length; i++){
        if (typeof arr[i] === "number"){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

numbersOnly([1, "orange", 2, "green", 3, "red"]);