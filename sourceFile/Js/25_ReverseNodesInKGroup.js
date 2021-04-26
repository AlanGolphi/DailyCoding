/*
 * @Author: AlanGolphi
 * @Date: 2021-04-14 14:53:14
 * @LastEditTime: 2021-04-22 12:30:58
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
 * @param {number} k
 * @return {ListNode}
 */

//Reverse Nodes In K Group

let reverseKGroup = function(head, k) {
    let dummy = new ListNode(-1);
    dummy.next = head;
    let pre = dummy, end = dummy;

    while (end.next != null) {
        for (let i = 0; i < k && end != null; i++) end = end.next;
        if (end == null) break;

        let start = pre.next;
        let next = end.next;//使用 pre 和 end 来区分每一小段 K
        end.next = null;//断开小段 K，进行单独翻转

        pre.next = reverse(start);
        start.next = next;//
        pre = start;//再接上
        end = start;
    }
    return dummy.next;
}

let reverse = function(head) {//翻转链表
    let newNode = new ListNode(-1);
    let curNode = head;

    while (curNode != null) {
        let nextNode = curNode.next;
        curNode.next = newNode;
        newNode = curNode;
        curNode = nextNode;
    }
    return newNode;
}

// let mergeTwoList = function (l1, l2) {
//     if (l1 == null) {
//         return l2;
//     }
//     if (l2 == null) {
//         return l1;
//     }
//     if (l1.val > l2.val) {
//         l2.next = mergeTwoList(l1, l2.next);
//         return l2;
//     } else {
//         l1.next = mergeTwoList(l1.next, l2);
//         return l1;
//     }
//     return mergeTwoList(l1, l2);
// }