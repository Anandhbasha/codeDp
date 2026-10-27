class Doctor{
    void treat(){
        System.out.println("Doctor treating patient");
    }
}
class Patient{
    void details(){
        System.out.println("Patient Admitted");
    }
}
class Hospital{
    private Doctor d  = new Doctor();
    private Patient p = new Patient();
    void hospitalWork(){
        d.treat();
        p.details();
    }
}
public class composition {
    public static void main(String[] args){
        Hospital h = new Hospital();
        h.hospitalWork();
    }
}
