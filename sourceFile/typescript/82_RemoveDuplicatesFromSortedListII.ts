import { ListNode, createList, logList } from "./models"

// @algorithm @lc id=82 lang=typescript 
// @title remove-duplicates-from-sorted-list-ii
// @test([1,2,3,3,4,4,5])=[1,2,5]
// @test([1,1,1,2,3])=[2,3]
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
  if (!head || !head.next) return head

  const dummy = new ListNode(0)
  dummy.next = head
  let cur = dummy

  while (cur.next && cur.next?.next) {
    if (cur.next?.val === cur.next?.next?.val) {
      const val = cur.next?.val
      while (cur.next && cur.next?.val === val) {
        cur.next = cur.next.next
      }
    } else {
      cur = cur.next
    }
  }

  return dummy.next
};

const l1 = createList([1, 2, 3, 3, 3, 3, 4, 4, 5])
const l2 = createList([1, 1, 1, 2, 3])

logList(deleteDuplicates(l1))