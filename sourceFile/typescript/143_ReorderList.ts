import { ListNode, createList, logList } from "./models";

// @algorithm @lc id=143 lang=typescript
// @title reorder-list
// @test([1,2,3,4])=[1,4,2,3]
// @test([1,2,3,4,5])=[1,5,2,4,3]
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

/**
 Do not return anything, modify head in-place instead.
 */
function reorderList(head: ListNode | null): void {
  if (!head || !head.next) return;

  let slow: ListNode | null = head;
  let fast: ListNode | null = head;
  while (slow && fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  const rightPart = slow!.next;
  slow!.next = null;
  // [4, 5]
  let p: ListNode | null = rightPart;
  let pre: ListNode | null = null;
  while (p) {
    const nextNode = p.next;
    p.next = pre;
    pre = p;
    p = nextNode;
  }

  // [1, 2, 3]
  // [5, 4]

  let left: ListNode | null = head;
  let right: ListNode | null = pre;
  while (left && right) {
    const leftNext: ListNode | null = left.next;
    const rightNext: ListNode | null = right.next;
    left.next = right;
    right.next = leftNext;
    left = leftNext;
    right = rightNext;
  }
}

const l1 = createList([1, 2, 3, 4, 5]);
reorderList(l1);
logList(l1);
