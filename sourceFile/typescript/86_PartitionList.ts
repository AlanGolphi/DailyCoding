import { ListNode, createList, logList } from "./models";

// @algorithm @lc id=86 lang=typescript
// @title partition-list
// @test([1,4,3,2,5,2],3)=[1,2,2,4,3,5]
// @test([2,1],2)=[1,2]
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

function partition(head: ListNode | null, x: number): ListNode | null {
  const smallList = new ListNode(0);
  const largeList = new ListNode(0);

  let smallPoint: ListNode | null = smallList;
  let largePoint: ListNode | null = largeList;
  let p: ListNode | null = head;

  while (p) {
    if (p.val < x) {
      smallPoint.next = p;
      smallPoint = smallPoint.next;
    } else {
      largePoint.next = p;
      largePoint = largePoint.next;
    }
    p = p.next;
  }

  smallPoint.next = largeList.next;
  largePoint.next = null;
  return smallList.next;
}

const l1 = createList([1, 4, 3, 2, 5, 2]);
logList(partition(l1, 3));
