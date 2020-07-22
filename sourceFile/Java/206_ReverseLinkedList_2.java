/*
 * @Author: AlanGolphi
 * @Date: 2020-07-22 16:16:52
 * @LastEditTime: 2020-07-22 16:39:31
 */ 
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode reverseList(ListNode head) {
        if (head == null || head.next == null) {
            return head;
        }
        ListNode cur = reverseList(head.next);
        head.next.next = head;
        head.next = null;
        return cur;
    }
}
//recursive solution
//递归法
//先一层一层递归找出最后一个节点，令其为 cur
//再由内往外翻转指向，最后返回 cur ，即链头指针
