import { ListNode, createList, logList } from "./models";

// @algorithm @lc id=83 lang=typescript
// @title remove-duplicates-from-sorted-list
// @test([1,1,2])=[1,2]
// @test([1,1,2,3,3])=[1,2,3]
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

function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (!head) return null;
  let cur: ListNode | null = head;

  while (cur && cur.next) {
    if (cur.val === cur.next.val) {
      cur.next = cur.next.next;
    } else {
      cur = cur.next;
    }
  }

  return head;
}

const l1 = createList([1, 1, 1, 2, 2, 3, 3, 4, 5, 5, 5, 5, 6]);

logList(deleteDuplicates(l1));
