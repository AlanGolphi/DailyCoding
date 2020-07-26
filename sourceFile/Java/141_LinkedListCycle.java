/*
 * @Author: AlanGolphi
 * @Date: 2020-07-26 14:51:33
 * @LastEditTime: 2020-07-26 15:01:34
 */ 
public class Solution {
    public boolean hasCycle(ListNode head) {
        if (head == null || head.next == null) {
            return false;
        }

        ListNode slow = head;
        ListNode fast = head.next;

        while (slow != fast) {
            if (fast == null || fast.next == null) {
                return false;
            }
            slow = slow.next;
            fast = fast.next.next;
        }
        return true;
    }
}
//快慢指针法
//先判断链表只有一个或者空的情况，返回 false
//再定义快慢指针，要确保开始时快指针在慢指针的后面，不然执行一步或多步就会返回错误的 true
//然后慢指针一次走一步，快指针一次走两步