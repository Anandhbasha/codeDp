import java.util.Scanner;
public class Basic {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        String name;
        int age;
        float weight;
        System.out.println("Enter the name:");
        name = sc.next();
        System.out.println("Enter the age:");
        age = sc.nextInt();
        System.out.println("Enter your Weight:");
        weight = sc.nextFloat();
        System.out.println("The userName is:"+ name);
        System.out.println("The user age is:"+ age);
        System.out.println("The user weight is:"+ weight);
        sc.close();
    }
    
}