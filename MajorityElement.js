function majorityEmement(nums) {
    nums.sort();
    let maj = 0, count = 0;
    let le = nums.length;
    if (le === 1) {
        console.log(`this is executed!`);
        return nums;
    }
    for (let i = 0; i < nums.length; i++) {
        let key = i + 1;
        if (nums[i] === nums[key]) {
            maj = nums[key];
        }
    }
    return maj;
}


console.log(majorityEmement([6, 6, 6, 7, 7]));