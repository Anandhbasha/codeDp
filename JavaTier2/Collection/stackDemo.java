import java.util.*;
public class stackDemo {
    public static void main(String[] args) {
        Stack <String> stack = new Stack<>();
        System.out.println(stack.empty());
            stack.push("java");
            stack.push("Python");
            stack.push("Mern");
            stack.push("React");
            System.out.println(stack);
            System.out.println(stack.peek());
            stack.pop();
            System.out.println(stack);
            // System.out.println(stack.empty());
            System.out.println(stack.search("Python"));
            System.out.println(stack.size());
            System.out.println(stack.get(1));
            System.out.println(stack.contains("Java"));
            stack.clear();
            System.out.println(stack);

    }
}
//Mern -1 Python -2 Java 3

// push
// add element -> top
// LIFO -> last in first out
// pop
// push and pop change the orignal stack data but peek doesn't change original value it only shows the top of the stack element
// peek


// 30
// 20
// 10