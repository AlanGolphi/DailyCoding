import { ListNode, createList, logList } from "./models"

// @algorithm @lc id=21 lang=typescript
// @title merge-two-sorted-lists
// @test([1,2,4],[1,3,4])=[1,1,2,3,4,4]
// @test([],[])=[]
// @test([],[0])=[0]

// Definition for singly-linked list.
// class ListNode {
//   val: number
//   next: ListNode | null
//   constructor(val?: number, next?: ListNode | null) {
//     this.val = (val === undefined ? 0 : val)
//     this.next = (next === undefined ? null : next)
//   }
// }


// function mergeTwoLists(
//   list1: ListNode | null,
//   list2: ListNode | null
// ): ListNode | null {
//   if (!list1) return list2;
//   if (!list2) return list1;

//   let p: ListNode = new ListNode();
//   let res = p;

//   while (list1 && list2) {
//     if (list1.val < list2.val) {
//       p.next = list1;
//       list1 = list1.next;
//     } else {
//       p.next = list2;
//       list2 = list2.next;
//     }
//     p = p.next;
//   }
//   p.next = !list1 ? list2 : list1;
//   return res.next;
// }

function mergeTwoSortedLists(list1: ListNode | null, list2: ListNode | null) {
  if (!list1) return list2
  if (!list2) return list1

  const head = new ListNode(0)
  let cur = head

  while (list1 && list2) {
    if (list1.val <= list2.val) {
      cur.next = list1
      list1 = list1.next
    } else {
      cur.next = list2
      list2 = list2.next
    }
    cur = cur.next
  }

  cur.next = list1 ? list1 : list2
  return head.next
}

const list1 = createList([1, 2, 4]);
const list2 = createList([1, 3, 4]);

logList(mergeTwoSortedLists(list1, list2));
