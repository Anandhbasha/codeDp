// Private
// Protected
// Public
// class Stu{
//     // public String name = "Kathir";
//     public String name = "Kathir";
// }
// public class access {
//     public static void main(String[] args) {
//         Stu S = new Stu();
//         S.name = "kalai";
//         System.out.println("the user name is:"+ S.name);

//     }
// }
// class Atm{
//     private int pin = 9789;
//     void showPin(){
//         System.out.println("The Pinj number is"+pin);
//     }
//     void changePin(int pin){
//         this.pin = pin;
//     }
// }

// public class access{
//     public static void main(String[] args){
//         Atm a = new Atm();
//         a.showPin();
//         a.changePin(1234);
//         a.showPin();
//     }
// }




// import java.util.Scanner; 
// public class pin { 
//     public static void main(String[] args) { 
//         Scanner sc = new Scanner(System.in);
//         int yourpin; 
//         yourpin = sc.nextInt();  
//         pin1 p = new pin1(); 
//         p.changePin(yourpin,5678); 
//          sc.close();
//     } 
//     } 
// class pin1{ 
//     private int pin = 1234; 
//     void changePin(int oldpin,int newpin){
            
//             System.out.println("enter your new pin"); 

//             if ( this.pin == oldpin ) {
//             this.pin = newpin; 
//             System.out.println("pin changed success");
//             }
           
//     }
// }

class Dads{
    protected String Bike = "RE";
}
     
class s1 extends Dads{
    void display(){
        System.out.println("The Dad Bike name is:"+Bike);
    }
}

public class pin{
    public static void main(String[] args) {
        s1 s = new s1();
        s.display();
    }
}