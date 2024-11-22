import { createList, ListNode } from "./models";

// @algorithm @lc id=141 lang=typescript
// @title linked-list-cycle
// @test([3,2,0,-4],1)=true
// @test([1,2],0)=true
// @test([1],-1)=false
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

// function hasCycle(head: ListNode | null): boolean {
//   if (!head || !head.next) return false;
//   let slow = head;
//   let fast = head;
//   while (slow.next && fast.next && fast.next.next) {
//     if (fast.next.next === slow) return true;
//     slow = slow.next;
//     fast = fast.next.next;
//   }
//   return false;
// }

function hasCycle(head: ListNode | null): boolean {
  if (!head || !head.next) return false;
  const cache = new Set<ListNode | null>();
  let p = head;
  while (p && p.next) {
    if (cache.has(p.next)) return true;
    cache.add(p.next);
    p = p.next;
  }
  return false;
}

const testHead = createList([3, 2, 0, -4]);
let tail = testHead;
while (tail?.next) {
  tail = tail.next;
}
if (tail) {
  tail.next = testHead;
}

console.log(hasCycle(testHead));
