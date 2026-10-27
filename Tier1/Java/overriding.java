class Restuarant{
    void Orderfood(){
        System.out.println("Food Ordered from Restuarant");
    }
}
class vegRestuarant extends Restuarant{
    void Orderfood(){
        System.out.println("Food Ordered from Veg-Restuarant");
    }
}
class NvRestuarant extends Restuarant{
    void Orderfood(){
        System.out.println("Food Ordered from Nv-Restarant");
    }
}
public class overriding {
    public static void main(String[] args){
        Restuarant res = new Restuarant();
        vegRestuarant veg =new vegRestuarant();
        NvRestuarant nv = new NvRestuarant();
        nv.Orderfood();
        veg.Orderfood();
        res.Orderfood();

    }
}
