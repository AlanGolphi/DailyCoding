/*
 * @Author: AlanGolphi
 * @Date: 2021-03-15 18:26:19
 * @LastEditTime: 2021-03-15 19:02:50
 */
var findKthLargest = function(nums, k) {
    const len = nums.length;
    let nmax = nums[0];
    let nmin = nums[0];

    for(let i = 0; i < len; i++) {
        nmax = Math.max(nums[i], nmax);
        nmin = Math.min(nums[i], nmin);
    }

    while(nmin <= nmax) {
        let mid = nmin + Math.round((nmax - nmin)/2);
        let co1 = 0;
        let co2 = 0;

        for (let i = 0; i <= len; i++) {
            if(nums[i] >= mid) co1++;
            if(nums[i] >  mid) co2++;
        }
        if(co1 >= k && co2 < k) return mid;
        if(co1 < k) {
            nmax = mid - 1;
        } else {
            nmin = mid + 1;
        }
    }
    return -1;
}