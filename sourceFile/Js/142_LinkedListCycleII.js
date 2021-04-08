/*
 * @Author: AlanGolphi
 * @Date: 2021-04-08 15:03:52
 * @LastEditTime: 2021-04-08 15:08:53
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
 * @return {ListNode}
 */

//给定一个链表，如果有环则返回入环处的索引
let detectCycle = function(head) {
    let slow = head;
    let fast = head;

    while (true) {
        if (fast == null || fast.next == null) {
            return null;
        }
        slow = slow.next;//此处定义快慢指针，使它们在环内相遇
        fast = fast.next.next;
        if (slow == fast) break;
    }
    fast = head;//快慢相遇后将快指针放回head，并降低速度，再次相遇时即为入环处
    while (slow != fast) {
        slow = slow.next;
        fast = fast.next;
    }
    return fast;
}

