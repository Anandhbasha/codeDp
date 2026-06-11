class engine{
    String name = "FIAT";
    void engineSounds(){
        System.out.println("Engine sounds good");
    }
}
class newCars {
    String name = "punto";
    engine e = new engine();   
    void display(){
        System.out.println(name);
        System.out.println(e.name);
    }
    
    
}
public class Association {
    public static void main(String[] args) {
        newCars nw = new newCars();
        nw.display();
    }
}
