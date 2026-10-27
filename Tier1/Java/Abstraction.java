abstract class ATM{
    abstract void withdraw();
}
class user extends ATM{
    void withdraw(){
        System.out.println("Money Withdrawn");
    }
}
public class Abstraction {
    public static void main(String[] args){
        user u = new user();
        u.withdraw();
    }
}
