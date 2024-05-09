const removeItem = (arr,val) =>{
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === val){
            arr.splice(i,1);
            i--;
        }
    }
    return arr;
}

arr = [1,2,2,1];
val = 1;
console.log(removeItem(arr,val));