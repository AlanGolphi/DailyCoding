/*
 * @Author: AlanGolphi
 * @Date: 2021-04-08 16:35:15
 * @LastEditTime: 2021-04-08 16:44:14
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
 * @return {ListNode}
 */

// Swap nodes in pairs两两交换节点
let swapPairs = function(head) {
    let preNode = new ListNode(null);
    preNode.next = head;//定义一个头，防止找不到头
    let temp = preNode;//相当于是-1，结果返回 -1.next就好了

    while (temp.next != null && temp.next.next != null) {
        let left = temp.next;
        let right = temp.next.next;
        //swap left & right
        //每次就交换 temp后面两个节点
        temp.next = right;
        left.next = right.next;
        right.next = left;
        temp = left;
        //交换完后，更新 temp的位置，重复交换temp后面的两个节点
    }
    return preNode.next;
}