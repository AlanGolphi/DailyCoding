import { ListNode, createList, logList } from "./models";

// @algorithm @lc id=2 lang=typescript
// @title add-two-numbers
// @test([2,4,3],[5,6,4])=[7,0,8]
// @test([0],[0])=[0]
// @test([9,9,9,9,9,9,9],[9,9,9,9])=[8,9,9,9,0,0,0,1]
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

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  const dummy = new ListNode(0);
  let p: ListNode | null = dummy;
  let left: ListNode | null = l1;
  let right: ListNode | null = l2;
  let carry: number = 0;

  while (left !== null && right !== null) {
    const sum: number = left.val + right.val + carry;
    carry = sum >= 10 ? Math.floor(sum / 10) : 0;
    const remainder = sum % 10;
    const newNode = new ListNode(remainder);

    p.next = newNode;
    p = p.next;
    left = left.next;
    right = right.next;
  }

  while (left !== null) {
    const sum: number = left.val + carry;
    carry = sum >= 10 ? Math.floor(sum / 10) : 0;
    const remainder = sum % 10;
    const newNode = new ListNode(remainder);

    p.next = newNode;
    p = p.next;
    left = left.next;
  }

  while (right !== null) {
    const sum: number = right.val + carry;
    carry = sum >= 10 ? Math.floor(sum / 10) : 0;
    const remainder = sum % 10;
    const newNode = new ListNode(remainder);

    p.next = newNode;
    p = p.next;
    right = right.next;
  }

  if (carry) {
    const newNode = new ListNode(carry);
    p.next = newNode;
  }

  return dummy.next;
}

const l1 = createList([9, 9, 9, 9, 9, 9, 9]);
const l2 = createList([9, 9, 9, 9]);

logList(addTwoNumbers(l1, l2));
