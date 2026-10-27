class MyFriend{
    String bike = "RE";
}
class mine extends MyFriend{
    String bike = "Shine";
    void display(){
        System.out.println(super.bike);
        System.out.println(bike);
    }
}
public class Super {
    public static void main(String[] args) {
        mine m = new mine();
        m.display();
    }
}

