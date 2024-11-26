// @algorithm @lc id=232 lang=typescript
// @title implement-queue-using-stacks

class MyQueue {
  private stack1: number[];
  private stack2: number[];

  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  push = (num: number): void => {
    this.stack1.push(num);
  };

  pop = (): number | undefined => {
    if (!this.stack1.length && !this.stack2.length) return undefined;
    if (this.stack2.length) return this.stack2.pop();
    while (this.stack1.length) {
      const poped = this.stack1.pop();
      if (typeof poped === "number") {
        this.stack2.push(poped);
      }
    }
    return this.stack2.pop();
  };

  peek = (): number | undefined => {
    if (!this.stack1.length && !this.stack2.length) return undefined;
    if (this.stack2.length) return this.stack2[this.stack2.length - 1];
    while (this.stack1.length) {
      const poped = this.stack1.pop();
      if (typeof poped === "number") {
        this.stack2.push(poped);
      }
    }
    return this.stack2[this.stack2.length - 1];
  };

  empty = (): boolean => {
    return this.stack1.length === 0 && this.stack2.length === 0;
  };
}
