import java.util.Scanner;
public class exceptions {
    public static void main(String[] args) {
        try{
            Scanner sc = new Scanner(System.in);
            int a=10;
            int ans;
            System.out.println("Enter the number:");
            ans = sc.nextInt();
            System.out.println(a/ans);
            
            sc.close();
        }catch(ArithmeticException e){
            System.out.println("Cannot divided by Zero");
        }System.out.println("Code is Executed as we Planned");
    }
}
