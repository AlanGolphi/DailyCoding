import { createList, ListNode, logList } from "./models";

// @algorithm @lc id=19 lang=typescript
// @title remove-nth-node-from-end-of-list
// @test([1,2,3,4,5],2)=[1,2,3,5]
// @test([1],1)=[]
// @test([1,2],1)=[1]
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  if (!head) return head;
  if (!head.next && n === 1) return null;
  const dummy: ListNode | null = new ListNode(0);
  dummy.next = head;

  let fast: ListNode | null = dummy;
  let slow: ListNode | null = dummy;
  while (n) {
    fast = fast?.next || null;
    n--;
  }
  while (fast?.next) {
    slow = slow?.next || null;
    fast = fast.next;
  }

  if (slow) {
    slow.next = slow?.next?.next || null;
  }

  return dummy.next;
}

const testList = createList([1, 2, 3, 4, 5]);
logList(removeNthFromEnd(testList, 2));

// const testList1 = createList([1, 2]);
// logList(removeNthFromEnd(testList1, 2));
