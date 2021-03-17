/*
 * @Author: AlanGolphi
 * @Date: 2021-03-17 09:56:41
 * @LastEditTime: 2021-03-17 10:21:51
 */
//Given a sorted array of distinct integers and a target value, 
//return the index if the target is found. If not, 
//return the index where it would be if it were inserted in order.


//Binary Search function 
//二分查找搜索法，适用于数据很大的情况，时间复杂度 O(logn)
//确定搜索范围内的最大和最小，在 while(nmin <= nmax) 里进行 mid 和 target 的比较
//再依据比较结果，对 nmin 和 nmax 进行移动
var searchInsert = function(nums, target) {
    let nmax = nums.length - 1;
    let nmin = 0;

    while (nmin <= nmax) {
        let mid = Math.floor((nmin + nmax) / 2);

        if (nums[mid] == target) {
            return mid;
        }
        if (nums[mid] > target) {
            nmax = mid - 1;
        } else {
            nmin = mid + 1;
        }
    }
    return nmin;
    //if didn't find, return the index(nmin)找不到就返回 nmin 即最后适配的位置
}

//Traverse Search function
var seacrchInsert = function (nums, target) {
    let i = 0;
    while (nums[i] < target) {
        i += 1;
    }
    return i;
}

//感觉像是种技巧解，在数据量小的时候，耗费时间与二分法差不多，时间复杂度 O(n)