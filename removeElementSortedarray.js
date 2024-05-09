const removeElementFromSortedArray = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1]) {
            arr.splice(i, 1);
            i--;
        }
    }
    return arr;
}
arr = [1, 1, 2, 3, 3, 4, 5, 6];
console.log(removeElementFromSortedArray(arr));