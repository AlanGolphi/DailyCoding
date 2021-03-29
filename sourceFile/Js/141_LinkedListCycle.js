/*
 * @Author: AlanGolphi
 * @Date: 2021-03-29 18:18:46
 * @LastEditTime: 2021-03-29 18:25:43
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

// 给定一个链表，和一个 POS，判断链表中是否有环
var hasCycle = function(nums) {
    if (!head || !head.next) {
        return false;
    } // 排除链表为 null的情况

    let slow = head;
    let fast = head.next;// 不会刚开始就碰上
    while (head && head.next && slow !+ fast) {
        slow = slow.next;
        fast = fast.next.next;
        //慢指针一次一跳，快指针一次两跳
    }
    return slow == fast;
}