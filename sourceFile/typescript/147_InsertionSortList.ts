import { ListNode, createList, logList } from "./models";

// @algorithm @lc id=147 lang=typescript
// @title insertion-sort-list
// @test([4,2,1,3])=[1,2,3,4]
// @test([-1,5,3,4,0])=[-1,0,3,4,5]
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

function insertionSortList(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head;
  const dummy = new ListNode(0);
  dummy.next = head;
  let lastSortNode: ListNode | null = head;
  let current: ListNode | null = head.next;

  while (current) {
    if (lastSortNode.val <= current.val) {
      lastSortNode = current;
    } else {
      let pre: ListNode | null = dummy;
      while (pre?.next && pre.next?.val! <= current.val) {
        pre = pre.next;
      }

      lastSortNode.next = current.next;
      current.next = pre.next;
      pre.next = current;
    }

    current = lastSortNode.next;
  }

  return dummy.next;
}

const l1 = createList([-1, 5, 3, 4, 0]);
logList(insertionSortList(l1));
