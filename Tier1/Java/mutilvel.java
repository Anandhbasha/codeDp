class Grandpa{
    String Property = "House";
}
class Father extends Grandpa{
    String Properties = "Land";
}
class son extends Father{

}
public class mutilvel {
    public static void main(String[] args) {
        son s = new son();
        System.out.println(s.Properties);
        System.out.println(s.Property);
    }
}
