class Payments{
    void Pay(){
        System.out.println("Payment done");
    }
}
class GooglePay extends Payments{
    void Pay(){
        System.out.println("Payment done by Gpay");
    }
}
class Upi extends Payments{
    void Pay(){
        System.out.println("Payment done by UPI");
    }
}
public class methodoverriding {
    public static void main(String[] args) {
        Payments p = new Payments();
        GooglePay g = new GooglePay();
        Upi u = new Upi();
        p.Pay();
        u.Pay();
        g.Pay();
    }
}
