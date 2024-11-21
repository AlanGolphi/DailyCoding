import { ListNode, createList, logList } from "./models";

// @algorithm @lc id=92 lang=typescript
// @title reverse-linked-list-ii
// @test([1,2,3,4,5],2,4)=[1,4,3,2,5]
// @test([5],1,1)=[5]
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

function reverseBetween(
  head: ListNode | null,
  left: number,
  right: number
): ListNode | null {
  if (!head || !head.next) return head;
  const dummy = new ListNode(0);
  dummy.next = head;
  let p: ListNode | null = dummy;

  for (let i = 0; i < left - 1; i++) {
    p = p?.next || null;
  }

  const leftPartTail = p;
  const newCenterPartTail = p?.next || null;
  let pre = newCenterPartTail;
  let cur = newCenterPartTail?.next || null;
  let idx = right - left;

  while (idx) {
    const next = cur?.next || null;
    if (cur) {
      cur.next = pre;
      pre = cur;
      cur = next;
    }
    idx--;
  }
  if (leftPartTail) {
    leftPartTail.next = pre;
  }
  if (newCenterPartTail) {
    newCenterPartTail.next = cur;
  }

  return dummy.next;
}

const testList = createList([1, 2, 3, 4, 5]);
logList(reverseBetween(testList, 2, 4));
