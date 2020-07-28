/*
 * @Author: AlanGolphi
 * @Date: 2020-07-28 13:18:50
 * @LastEditTime: 2020-07-28 13:45:27
 */ 
class Solution {
    public ListNode reverseKGroup(ListNode head, int k) {
        ListNode dummy = new ListNode(0);
        dummy.next = head;

        ListNode pre = dummy;
        ListNode end = dummy;

        while (end.next != null) {
            for (int i = 0; i < k && end != null; i++) end = end.next;
            if (end == null) break;

            ListNode start = pre.next;
            ListNode next = end.next;
            end.next = null;
            pre.next = reverse(start);
            start.next = next;
            pre = start;
            end = start;
        }
        return dummy.next;
    }
//主函数：将整个链表每 K 个分成一块，并在每块的头和尾标记 start 和 end
//调用子函数 reverse() 将每一块进行链表反转，反转之后 start 和 end 依旧在那块的两端，头变成了尾，尾变成了头
//然后用上一块的尾，也就是反转之后的 start 指向 下一块的头，也就是next


    private ListNode reverse(ListNode head) {
        ListNode newNode = null;
        ListNode curNode = head;

        while (curNode != null) {
            ListNode nextNode = curNode.next;
            curNode.next = newNode;
            newNode = curNode;
            curNode = nextNode;
        }
        return newNode;
    }
}
//子函数 reverse()
//定义 newNode, curNode, nextNode 在每块链表内进行反转