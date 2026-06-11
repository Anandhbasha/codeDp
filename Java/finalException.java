import java.util.Scanner;

public class finalException {
    public static void main(String[] args){
        try{
            Scanner sc = new Scanner(System.in);
            System.out.println("Enter the Number:");
            int num = sc.nextInt();
            if(num<0){
                throw new ArithmeticException("Negative Number is not allowed");
            } 
            double res = Math.sqrt(num);
            System.out.println("Square Root:"+res);
            sc.close();
        }catch (ArithmeticException e){
            System.out.println(e.getMessage());
        }
    }
}
