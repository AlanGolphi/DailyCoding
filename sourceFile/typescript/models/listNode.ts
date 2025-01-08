export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val: number) {
    this.val = val;
    this.next = null;
  }
}

export const createList = (arr: number[]): ListNode | null => {
  if (!arr.length) return null
  let dummy = new ListNode(0)
  const head = dummy
  for (let i = 0; i < arr.length; i++) {
    const newNode = new ListNode(arr[i])
    dummy.next = newNode
    dummy = dummy.next
  }
  return head.next
}

export const logList = (list: ListNode | null) => {
  if (!list) {
    return console.log(null)
  }
  let cur: ListNode | null = list
  while (cur) {
    console.log(cur.val)
    cur = cur.next
  }
}