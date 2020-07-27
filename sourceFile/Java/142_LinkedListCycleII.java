/*
 * @Author: AlanGolphi
 * @Date: 2020-07-27 11:04:36
 * @LastEditTime: 2020-07-27 11:21:43
 */ 
public class Solution {
    public ListNode detectCycle(ListNode head) {
        ListNode slow = head;
        ListNode fast = head;

        while (true) {
            if (fast == null || fast.next == null) {
                return null;
            }

            slow = slow.next;
            fast = fast.next.next;
            if (slow == fast) break;
        }

        fast = head;
        while (slow != fast) {
            slow = slow.next;
            fast = fast.next;
        }
        return fast;
    }
}
//快慢双指针法
//设 链表头到连接处有 a 个节点， 环里有 b 个节点
//快慢指针初始时同时指向 head，每次 slow 走 1 步， fast 走 2 步
//快慢指针第一次相遇，必定在环内：slow 走了 nb 步， fast 走了 2nb 步
//然后 fast 归零，fast 和 slow 每次走一步
//第二次相遇时，就在连接节点处：slow 走了 a+nb 步， fast 从 head 处走了 a 步
//返回 fast 所在位置