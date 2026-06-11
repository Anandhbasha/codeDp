interface Vehicle{
    void start();
}

class bikes implements Vehicle{
    public void start(){
        System.out.println("Bike is Moving");
    }
}
class cars implements Vehicle{
    public void start(){
        System.out.println("Car is Moving");
    }
}
public class interfaces {
    public static void main(String[] args) {
        cars c = new cars();
        c.start();
        bikes b = new bikes();
        b.start();
        Vehicle car = new cars();
        car.start();
    }
}
