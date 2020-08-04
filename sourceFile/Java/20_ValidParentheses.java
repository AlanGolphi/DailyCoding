/*
 * @Author: AlanGolphi
 * @Date: 2020-08-04 10:42:00
 * @LastEditTime: 2020-08-04 10:57:03
 */ 
class Solution {
    public boolean isValid(String s) {
        Stack<Character> stack = new Stack<Character>();
        for (char c : s.toCharArray()) {
            if (c == '(') 
                stack.push(')');
            else if (c == '[')
                stack.push(']');
            else if (c == '{')
                stack.push('}');
            else if (stack.isEmpty() || stack.pop() != c) 
                return false;
        }
        return stack.isEmpty();
    }
}
//简单栈法：
//将括号对转变为字符数组，逐个判断，遇到左括号就推进定义的堆栈 stack
//遇到非左括号，就判断 stack 是否为空，或者堆栈推出的字符是否与遇到的字符相同
//即可判断括号是否匹配