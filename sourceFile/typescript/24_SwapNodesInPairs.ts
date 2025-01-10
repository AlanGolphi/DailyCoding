import { ListNode, createList, logList } from "./models";

// @algorithm @lc id=24 lang=typescript
// @title swap-nodes-in-pairs
// @test([1,2,3,4])=[2,1,4,3]
// @test([])=[]
// @test([1])=[1]
// @test([1,2,3])=[2,1,3]
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

function swapPairs(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head;
  const dummy = new ListNode(0);
  let p: ListNode | null = dummy;
  let left: ListNode | null = head;
  let right: ListNode | null = head.next;

  while (left && right) {
    left.next = right.next;
    right.next = left;
    p.next = right;

    p = left;
    left = left.next;
    right = left?.next || null;
  }

  return dummy.next;
}

const testHead = createList([1, 2, 3, 4]);
logList(swapPairs(testHead));
