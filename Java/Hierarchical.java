class Dad{
    double amount = 20000000;
}
class Son extends Dad{}
class Daughter extends Dad{}
class Wife extends Dad{}
class Mom extends Dad{ }
public class Hierarchical {
    public static void main(String[] args) {
        Son s = new Son();
        Daughter d = new Daughter();
        Wife w = new Wife();
        Mom m = new Mom();
        System.out.println(s.amount);
        System.out.println(d.amount);
        System.out.println(w.amount);
        System.out.println(m.amount);
    }
}
