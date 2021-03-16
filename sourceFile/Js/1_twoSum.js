/*
 * @Author: AlanGolphi
 * @Date: 2021-03-16 16:23:05
 * @LastEditTime: 2021-03-16 17:07:48
 */
var twoSum = function(nums, target) {
    let temp = [];
    for (let i = 0; i < nums.length; i++) {
        let dif = target - nums[i];
        if (temp[dif] != undefined) {
            return [temp[dif], i];
        }
        temp[nums[i]] = i;
    }
}

//这份是JS解决【两数之和】的方案，大体使用双重循环嵌套查询
//过程中使用temp[]进行暂存，遍历前查询temp[]中是否存在，减少查询时间