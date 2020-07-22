/*
 * @Author: AlanGolphi
 * @Date: 2020-07-22 15:25:37
 * @LastEditTime: 2020-07-22 15:31:55
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
        ListNode newHead = null;
        while (head != null) {
            ListNode temp = head.next;
            head.next = newHead;
            newHead = head;
            head = temp;
        }
        return newHead;
    }
}
//interative solution
//双指针迭代法，定义 temp 作为中间变量
//这里我的理解是：等号前的变量作为卡片放在等号右边的盒子里