import java.util.*;
public class HashsetDemo {
    public static void main(String[] args){
        // HashSet <String> fruits = new HashSet <>();
        // fruits.add("Apple");
        // fruits.add("Orange");
        // fruits.add("Banana");
        // fruits.add("Apple");
        // fruits.add("apple");
        // System.out.println(fruits);
        HashSet<Integer> nums = new HashSet<>();
        nums.add(10);
        nums.add(2);
        nums.add(5);
        nums.add(105);
        nums.add(12);
        System.out.println(nums);
    }
}

// 2,1,8.3,4,10,20,30
// Duplicate will not allow