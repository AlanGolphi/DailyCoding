import { ListNode, createList, logList } from "./models";

// @algorithm @lc id=61 lang=typescript
// @title rotate-list
// @test([1,2,3,4,5],2)=[4,5,1,2,3]
// @test([0,1,2],4)=[2,0,1]
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

function rotateRight(head: ListNode | null, k: number): ListNode | null {
  if (!head || !head.next || k < 1) return head;
  const dummy: ListNode | null = new ListNode(0);
  const listHead: ListNode = head as ListNode;
  let count = 1;
  let tail = head;
  while (tail.next) {
    count += 1;
    tail = tail.next;
  }
  let lastIdx = k % count;
  if (lastIdx === 0) return head;

  let left: ListNode = listHead;
  let right: ListNode = listHead;

  while (lastIdx && right && right.next) {
    right = right.next;
    lastIdx--;
  }
  while (left && right && left.next && right.next) {
    left = left.next;
    right = right.next;
  }

  const newNode = left.next;
  left.next = null;
  dummy.next = newNode;
  right.next = listHead;

  return dummy.next;
}

const testList = createList([1, 2]);
logList(rotateRight(testList, 2));
