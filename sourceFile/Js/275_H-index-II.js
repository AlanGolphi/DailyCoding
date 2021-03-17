/*
 * @Author: AlanGolphi
 * @Date: 2021-03-17 16:25:44
 * @LastEditTime: 2021-03-17 16:34:03
 */
//Given an array of integers citations
//where citations[i] is the number of citations a researcher 
//received for their ith paper and citations is sorted in an ascending order, 
//return compute the researcher's h-index.

//Key point: value >= len - index
//找到 c, c >= n - i, n为文章数目，i为索引
var hIndex = function(citations) {
    const len = citations.length;
    let low = 0;
    let high = len - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (citations[mid] == (len - mid)) {
            return (len - mid);
        } else if (citations[mid] > (len - mid)) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return (len - low);
}
// 使用二分查找，找到第i篇的引用次数大于等于len - i，关键在于确定要找的是什么，用函数描述出来。