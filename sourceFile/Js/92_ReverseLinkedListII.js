/*
 * @Author: AlanGolphi
 * @Date: 2021-04-14 16:41:25
 * @LastEditTime: 2021-04-14 16:48:10
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */

let reverseBetween = function(head, left, right) {
    let temp = dummy = new ListNode(-1);
    dummy.next = head;
    let count = right - left;
    let front, cur, pre, tail;
    for (let i = 0; i < left - 1; i++) {
        temp = temp.next;
    }
    front = temp;
    pre = tail = temp.next;
    cur = pre.next;
    for (let i = 0; i < count; i++) {
        let next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    }
    front.next = pre;
    tail.next = cur;
    return dummy.next;
}