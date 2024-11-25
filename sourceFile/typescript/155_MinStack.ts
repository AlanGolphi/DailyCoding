// @algorithm @lc id=155 lang=typescript
// @title min-stack

class MinStack {
  private stack: number[];
  private minStack: number[];

  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push = (num: number): void => {
    this.stack.push(num);
    if (
      this.minStack.length === 0 ||
      num <= this.minStack[this.minStack.length - 1]
    ) {
      this.minStack.push(num);
    }
  };

  pop = (): void => {
    const poped = this.stack.pop();
    if (poped === this.minStack[this.minStack.length - 1]) {
      this.minStack.pop();
    }
  };

  top = (): number => {
    return this.stack[this.stack.length - 1];
  };

  getMin = (): number => {
    return this.minStack[this.minStack.length - 1];
  };
}
