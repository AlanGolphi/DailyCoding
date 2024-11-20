import { createList, ListNode, logList } from "./models";

// @algorithm @lc id=206 lang=typescript
// @title reverse-linked-list
// @test([1,2,3,4,5])=[5,4,3,2,1]
// @test([1,2])=[2,1]
// @test([])=[]
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

function reverseList(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head;
  let pre: ListNode | null = null;
  let cur: ListNode | null = head;

  while (cur && cur.next) {
    const nextNode: ListNode | null = cur.next;
    cur.next = pre;
    pre = cur;
    cur = nextNode;
  }

  cur.next = pre;
  return cur;
}

// const testList = createList([1, 2, 3, 4, 5]);
// logList(reverseList(testList));

const testList1 = createList([1, 2]);
logList(reverseList(testList1));
