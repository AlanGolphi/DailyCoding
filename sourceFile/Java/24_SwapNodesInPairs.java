/*
 * @Author: AlanGolphi
 * @Date: 2020-07-26 11:19:16
 * @LastEditTime: 2020-07-26 11:34:04
 */ 
class Solution {
    public ListNode swapPairs(ListNode head) {
        ListNode pre = new ListNode(0);
        pre.next = head;
        ListNode temp = pre;
        
        while (temp.next != null && temp.next.next != null) {
            ListNode start = temp.next;
            ListNode end = temp.next.next;
            //swap
            temp.next = end;
            start.next = end.next;
            end.next = start;
            temp = start;
        }
        return pre.next;
    }
}
//迭代法
//先在链表的前面设置 pre 和 temp，pre 不动，每次迭代移动 temp
//每次迭代就在 temp 后面设置 start 和 end ，然后交换两个节点
//直到 temp.next = 0 即交换完了，或者 temp.next.next = 0 即交换到最后只有一个了