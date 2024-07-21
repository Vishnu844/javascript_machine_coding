// rotate an array by k.

function rotateArray(arr, k){
    let size  = arr.length;
    if(k > size){
        k = k % size;
    }

    const rotated = arr.splice(size - k, size); 
    arr.unshift(...rotated);

    return arr;
}

console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 4))

console.log("10" + "10")