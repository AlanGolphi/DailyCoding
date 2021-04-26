/*
 * @Author: AlanGolphi
 * @Date: 2021-04-12 16:42:59
 * @LastEditTime: 2021-04-21 20:24:35
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

//迭代解法
let mergeTwoLists = function(l1, l2) {
    if (l1 == null) {
        return l2;
    }
    if (l2 == null) {
        return l1;
    }
    let pre = newHead = new ListNode(-1);
    while (l1 && l2) {
        if (l1.val < l2.val) {
            pre.next = l1;
            pre = l1;
            l1 = l1.next;
        } else {
            pre.next = l2;
            pre = l2;
            l2 = l2.next;
        }
    }
    pre.next = l1 == null ? l2 : l1;
    return newHead.next;
}

//递归解法
let mergeTwoLists = function(l1, l2) {
    let merge = (l1, l2) => {
        if (l1 == null) {
            return l2;
        }
        if (l2 == null) {
            return l1;
        }

        if (l1.val > l2.val) {
            l2.next = merge(l1, l2.next);
            return l2;
        } else {
            l1.next = merge(l1.next, l2);
            return l1;
        }
    }
    return merge(l1, l2);
}