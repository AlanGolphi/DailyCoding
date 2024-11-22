import { ListNode } from "./models";

// @algorithm @lc id=142 lang=typescript
// @title linked-list-cycle-ii
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

function detectCycle(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return null;

  const record = new Set<ListNode | null>();
  let p = head;

  while (p && p.next) {
    if (record.has(p)) {
      return p;
    }
    record.add(p);
    p = p.next;
  }
  return null;
}
