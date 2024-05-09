nums = [0, 0, 1, 1, 1, 1, 2, 3, 3];
for (let i = 0; i < nums.length; i++) {
    let key = i + 1;
    if (nums[i] === nums[key]) {
        if (nums[key] === nums[key + 1]) {
            nums.splice(i, 1);
            i--;
        }
    }
}

console.log(nums);

//[0,0,1,1,2,3,3,_,_]