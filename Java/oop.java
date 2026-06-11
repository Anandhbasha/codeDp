class Bike{
        String BikeBrand = "Honda";
        String bikename = "Shine";
        int bikemilage = 60;
        int bikenoofTyres = 2;
        int bikeMirrors= 2;
        String bikeColor = "gray";
        int bikeTopSpeed = 120;
    void StartBike1(){
        System.out.println("Engine is ON");
    }
    void stopBike1(){
        System.out.println("Engine is OFF");
    }
}
   
public class oop {
    public static void main(String[] args) {
           Bike b1 = new Bike();    //instence or Object 
           Bike b2 = new Bike();
            // System.out.println(b1.BikeBrand);
            // System.out.println(b1.bikename);
            // System.out.println(b1.bikemilage);
            // System.out.println(b1.bikenoofTyres);
            // System.out.println(b1.bikeMirrors);
            // System.out.println(b1.bikeColor);
            // System.out.println(b1.bikeTopSpeed);
            System.out.println("The Bike Name is:"+b1.bikename);
            b1.bikename= "Unicorn";
            b2.bikename = "Activa";
            System.out.println("The Bike Name is:"+b1.bikename);
            System.out.println("The Bike Name is:"+b2.bikename);
            b1.stopBike1();
            b1.StartBike1();
            

    }
}

