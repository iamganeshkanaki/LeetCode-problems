let arr = [4, 1, 2, 3, 4, 5];
let val = 4
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
        arr.splice(i, 1);
        i--;
    }
}
console.log(arr);