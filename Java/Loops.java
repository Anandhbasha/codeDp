 import java.util.Scanner;
public class Loops {
    public static void main(String[] args) {
        //do while
        // Scanner sc = new Scanner(System.in);
        // int pin;
        // do{
        //     System.out.println("Enter your Pin number:");
        //     pin = sc.nextInt();
        // }while(pin!=1234);
        // System.out.println("In correct Password");
        
        // sc.close();

        
    //    break
        // for(int customer=0;customer<=10;customer++){
        //     if(customer==6){
        //         System.out.println("Ticked Sold out");
        //         break;
        //     }
        //     System.out.println("Ticket is given to Customer:"+ customer);
        // }

    // continue
    Scanner sc = new Scanner(System.in);
    int absent;
    System.out.println("Enter the studentNumber:");
    absent = sc.nextInt();
    for(int student=1;student<=5;student++){
        if(student==absent){
            continue;
        }
        System.out.println("Attendance for the Students:"+student);
    }
    sc.close();
    }
    
}
